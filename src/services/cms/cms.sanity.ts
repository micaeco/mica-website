import { maxCommentaryDepth } from "@/lib/constants";
import { env } from "@/lib/env";
import { BlogPost } from "@/types/blog";
import { Faq } from "@/types/faqs";
import { CmsService } from "./cms.contract";
import { createClient } from "next-sanity";
import { PrivacyPolicy } from "@/types/privacy-policy";

export class SanityCmsService implements CmsService {
  private readClient = createClient({
    projectId: env.sanity.projectId,
    dataset: env.sanity.dataset,
    apiVersion: env.sanity.apiVersion,
    useCdn: true,
  });
  private writeClient = createClient({
    projectId: env.sanity.projectId,
    dataset: env.sanity.dataset,
    apiVersion: env.sanity.apiVersion,
    token: env.sanity.apiToken,
    useCdn: false,
  });

  async getBlogPosts(locale?: string): Promise<BlogPost[]> {
    return this.readClient.fetch(
      `*[_type == "blogPost"] | order(date desc) {
        "slug": slug.current,
        ${
          locale
            ? `
          "title": title[$locale],
          "summary": summary[$locale],
          "content": content[$locale],
        `
            : `
          "title": title,
          "summary": summary,
          "content": content,
        `
        }
        "cover": cover.asset->url,
        "author": author->{
          name,
          "profilePicture": profilePicture.asset->url
        },
        date,
        tag
      }`,
      locale ? { locale } : undefined
    );
  }

  async getBlogPost(slug: string, locale?: string): Promise<BlogPost> {
    return this.readClient.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0] {
        "id": _id,
        "slug": slug.current,
        ${
          locale
            ? `
          "title": title[$locale],
          "summary": summary[$locale],
          "content": content[$locale],
        `
            : `
          "title": title,
          "summary": summary,
          "content": content,
        `
        }
        "cover": cover.asset->url,
        "author": author->{
          name,
          "profilePicture": profilePicture.asset->url
        },
        date,
        tag
      }`,
      locale ? { slug, locale } : { slug }
    );
  }

  async getBlogPostTitle(postId: string, locale: string): Promise<string> {
    return this.readClient.fetch(`*[_type == "blogPost" && _id == $postId][0].title[$locale]`, {
      postId,
      locale,
    });
  }

  async getFaqs(locale?: string): Promise<Faq[]> {
    return this.readClient.fetch(
      `
      *[_type == "faq"] {
        ${
          locale
            ? `
          "question": question[$locale],
          "answer": answer[$locale],
        `
            : `
          "question": question,
          "answer": answer,
        `
        }
        lastUpdated
      }
    `,
      locale ? { locale } : undefined
    );
  }

  async getComments(postId: string) {
    const baseReplyQuery = `
      "id": _id,
      "createdAt": _createdAt,
      name,
      comment,
      "replies": replies[]->
    `;

    const generateRecursiveQuery = (depth: number): string => {
      if (depth === 0) return baseReplyQuery;
      return `
        "id": _id,
        "createdAt": _createdAt,
        name,
        comment,
        "replies": replies[]-> {
          ${generateRecursiveQuery(depth - 1)}
        }
      `;
    };

    return this.writeClient.fetch(
      `
      *[_type == "comment" && blogPost._ref == $postId] {
        ${generateRecursiveQuery(maxCommentaryDepth)}
      } | order(createdAt desc)
    `,
      { postId }
    );
  }

  async getPrivacyPolicy(locale: string): Promise<PrivacyPolicy> {
    const privacyPolicy = await this.readClient.fetch(
      `
      *[_type == "privacyPolicy"][0] {
        "content": content[$locale],
      }
    `,
      { locale }
    );

    return privacyPolicy;
  }

  async storeComment(
    postId: string,
    name: string,
    email: string,
    comment: string,
    parentId?: string
  ): Promise<void> {
    const result = await this.writeClient.create({
      _type: "comment",
      name,
      email,
      comment,
      blogPost: {
        _type: "reference",
        _ref: postId,
      },
    });

    if (parentId) {
      await this.writeClient
        .patch(parentId)
        .setIfMissing({ replies: [] })
        .append("replies", [
          {
            _type: "reference",
            _ref: result._id,
            _key: result._id,
          },
        ])
        .commit();
    }
  }
}

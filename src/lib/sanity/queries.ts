"use server";

import { maxCommentaryDepth } from '@/lib/constants';
import { client, writeClient } from './config'
import { BlogPost, Faq } from '@/types'

export async function getBlogPosts(locale?: string) {
  return client.fetch(
    `*[_type == "blogPost"] | order(date desc) {
      "slug": slug.current,
      ${locale ? `
        "title": title[$locale],
        "summary": summary[$locale],
        "content": content[$locale],
      ` : `
        "title": title,
        "summary": summary,
        "content": content,
      `}
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

export async function getBlogPost(slug: string, locale?: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      "id": _id,
      "slug": slug.current,
      ${locale ? `
        "title": title[$locale],
        "summary": summary[$locale],
        "content": content[$locale],
      ` : `
        "title": title,
        "summary": summary,
        "content": content,
      `}
      "cover": cover.asset->url,
      "author": author->{
        name,
        "profilePicture": profilePicture.asset->url
      },
      date,
      tag
    }`,
    locale ? { slug, locale } : { slug }
  )
}

export async function getFaqs(locale?: string): Promise<Faq[]> {
  return client.fetch(`
    *[_type == "faq"] {
      ${locale ? `
        "question": question[$locale],
        "answer": answer[$locale],
      ` : `
        "question": question,
        "answer": answer,
      `}
      lastUpdated
    }
  `, locale ? { locale } : undefined)
}

export async function getComments(postId: string) {
  const baseReplyQuery = `
    "id": _id,
    "createdAt": _createdAt,
    name,
    comment,
    "replies": replies[]->
  `;

  function generateRecursiveQuery(depth: number): string {
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
  }

  let comments = await writeClient.fetch(`
    *[_type == "comment" && blogPost._ref == $postId] {
      ${generateRecursiveQuery(maxCommentaryDepth)}
    } | order(createdAt desc)
  `, { postId });

  return comments;
}

export async function createComment(postId: string, name: string, email: string, comment: string, parentId?: string) {
  try {
    const result = await writeClient.create({
      _type: 'comment',
      name,
      email,
      comment,
      blogPost: {
        _type: 'reference',
        _ref: postId
      }
    });

    if (parentId) {
      await writeClient
        .patch(parentId)
        .setIfMissing({ replies: [] })
        .append('replies', [{
          _type: 'reference',
          _ref: result._id,
          _key: result._id
        }])
        .commit();
    }

    return;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw new Error('Failed to create comment');
  }
}
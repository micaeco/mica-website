import { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { SanityCmsService } from "@/services/cms.sanity";
import BlogPost from "./_components/blog-post";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale();
  const { slug } = await params;

  const cms = new SanityCmsService();
  const post = await cms.getBlogPost(slug, locale);

  return {
    title: post.title,
  };
}

export default async function BlogPostContent({ params }: Props) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}

"use server";

import { client } from './config'
import { BlogPost, Faq } from '@/types'

export async function getBlogPosts(locale: string) {
  return client.fetch(
    `*[_type == "blogPost"] | order(date desc) {
      "slug": slug.current,
      "title": title[$locale],
      "summary": summary[$locale],
      "content": content[$locale],
      "cover": cover.asset->url,
      author,
      date,
      tag
    }`,
    { locale }
  );
}

export async function getBlogPost(slug: string, locale: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      "slug": slug.current,
      "title": title[$locale],
      "summary": summary[$locale],
      "content": content[$locale],
      "cover": cover.asset->url,
      author,
      date,
      tag
    }`,
    { slug, locale }
  )
}

export async function getFaqs(locale: string): Promise<Faq[]> {
  return client.fetch(`
    *[_type == "faq"] {
      "question": question[$locale],
      "answer": answer[$locale],
      lastUpdated
    }
  `, { locale })
}

"use server";

import { client } from './config'
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
      author,
      date,
      tag
    }`,
    locale ? { locale } : undefined
  );
}

export async function getBlogPost(slug: string, locale?: string): Promise<BlogPost | null> {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
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
      author,
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
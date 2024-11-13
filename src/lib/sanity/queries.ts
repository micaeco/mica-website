"use server";

import { client } from './config'
import { BlogPost, Faq } from '@/types'

export async function getBlogPosts(locale?: string): Promise<BlogPost[]> {
  if (locale) {
    return client.fetch(`
    *[_type == "blogPost" && lang == $locale] | order(date desc) {
      lang,
      "slug": slug.current,
      title,
      summary,
      "cover": cover.asset->url,
      content,
      author,
      date,
      tag
    }
  `, { locale })
  }

  return client.fetch(`
    *[_type == "blogPost"] | order(date desc) {
      lang,
      "slug": slug.current,
      title,
      summary,
      "cover": cover.asset->url,
      content,
      author,
      date,
      tag
    }
  `)
}

export async function getBlogPost(slug: string, locale: string): Promise<BlogPost | null> {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug && lang == $locale][0] {
      lang,
      "slug": slug.current,
      title,
      summary,
      "cover": cover.asset->url,
      content,
      author,
      date,
      tag
    }
  `, { slug, locale })
}

export async function getFaqs(locale: string): Promise<Faq[]> {
  return client.fetch(`
    *[_type == "faq" && lang == $locale] | order(_createdAt asc) {
      lang,
      question,
      answer,
      lastUpdated
    }
  `, { locale })
}

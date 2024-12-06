import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/routing'

import { getBlogPosts } from '@/services/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const pages = [
    '/',
    '/about',
    '/beta',
    '/contact',
    '/faqs',
    '/product'
  ] as const

  const staticPages = pages.map(page => ({
    url: `${baseUrl}${page ? `${page}` : ''}`,
    lastModified: new Date(),
    alternates: {
      languages: locales.reduce((acc, lang) => ({
        ...acc,
        [lang]: `${baseUrl}/${lang}${page ? `${page}` : ''}`
      }), {} as Record<typeof locales[number], string>)
    }
  }))

  const blogPosts = await getBlogPosts();

  const blogPages = blogPosts.map((post: { slug: string; date: Date }) => {
    return {
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: post.date || new Date(),
      alternates: {
        languages: locales.reduce((acc, lang) => ({
          ...acc,
          [lang]: `${baseUrl}/${lang}/blog/${post.slug}`
        }), {} as Record<typeof locales[number], string>)
      }
    }
  })

  return [...staticPages, ...blogPages]
}
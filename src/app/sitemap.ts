import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/routing'
import { getBlogPosts } from '@/lib/github'
import { parseReadme } from '@/lib/utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL

  const pages = [
    '/',
    '/about',
    '/beta',
    '/contact',
    '/faqs',
    '/product'
  ] as const

  const blogPosts = await getBlogPosts();

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

  const blogPages = Object.entries(blogPosts).map(([filename, content]) => {
    const { metadata } = parseReadme(content)
    const slug = filename.replace(/\.md$/, '')

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(...(metadata.date.split('/').reverse().map(Number) as [number, number, number])).toISOString() || new Date(),
      alternates: {
        languages: locales.reduce((acc, lang) => ({
          ...acc,
          ...(metadata.lang === lang ? { [lang]: `${baseUrl}/${lang}/blog/${slug}` } : {})
        }), {} as Record<typeof locales[number], string>)
      }
    }
  })

  return [...staticPages, ...blogPages]
}
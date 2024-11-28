import type { MetadataRoute } from 'next'

import { environment } from '@/lib/environment';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = environment.appUrl;

  const pages = [
    '/',
    '/about',
    '/beta',
    '/contact',
    '/faqs',
    '/product'
  ] as const


  return {
    rules: {
      userAgent: '*',
      allow: [...pages],
      disallow: '',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
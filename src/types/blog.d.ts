import { Locale } from '@/i18n/routing'

export const BlogPostTags = ['all', 'article', 'manual', 'others'] as const;
export type BlogPostTag = typeof BlogPostTags[number];

export interface BlogAuthor {
  name: string
  profilePicture: string
}

export interface BlogPost {
  lang: Locale
  slug: string
  title: string
  summary: string
  cover: string
  content: any[]
  author?: BlogAuthor
  date?: string
  tag: PostTag
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: Date;
}

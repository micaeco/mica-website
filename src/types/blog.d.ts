import { Locale } from '@/i18n/routing'

export const BlogPostTags = ['all', 'article', 'manual', 'others'] as const;
export type BlogPostTag = typeof BlogPostTags[number];

export interface BlogAuthor {
  name: string
  profilePicture: string
}

export interface BlogPost {
  id: string
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
  name: string;
  comment: string;
  postId: string;
  replies: BlogComment[];
  parentId?: string;
  createdAt: datetime;
}

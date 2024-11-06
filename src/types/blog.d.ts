export const BlogPostTags = ['all', 'article', 'manual', 'others'] as const;
export type BlogPostTag = typeof BlogPostTags[number];

export interface BlogPost {
  lang: string;
  slug: string;
  title: string;
  summary: string;
  cover: string;
  content: string;
  author?: string;
  date?: string;
  tag: TPostTag;
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: Date;
}

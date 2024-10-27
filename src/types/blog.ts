export const PostTags = ['all', 'article', 'manual', 'others'] as const;
export type TPostTag = typeof PostTags[number];

export interface IPost {
  lang: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author?: string;
  date?: string;
  tag: TPostTag;
}

export interface IComment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: Date;
}

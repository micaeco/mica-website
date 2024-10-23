export type TPostTag = 'article' | 'manual' | 'others' | 'all';

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

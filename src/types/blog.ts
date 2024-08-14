export type TPostTag = 'Article' | 'Manual' | 'Altres' | 'Tot';

export interface IPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  author?: string;
  date?: Date;
  tag: TPostTag;
}

export interface IComment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: Date;
}

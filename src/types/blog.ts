export const PostTagList = ['Article', 'Manual', 'Altres'] as const;
export type TPostTag = (typeof PostTagList)[number];

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

import { TypedObject } from "@portabletext/types";

import { BlogPostTags } from "@/lib/constants";
import { CommentFormSchema } from "@/schemas/blog";

export type BlogPostTag = (typeof BlogPostTags)[number];

export interface BlogAuthor {
  name: string;
  profilePicture: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  cover: string;
  content: TypedObject | TypedObject[];
  author?: BlogAuthor;
  date?: string;
  tag: BlogPostTag;
}

export interface BlogComment {
  id: string;
  name: string;
  comment: string;
  postId: string;
  replies: BlogComment[];
  parentId?: string;
  createdAt: Date;
}

export type BlogCommentForm = z.infer<typeof CommentFormSchema>;

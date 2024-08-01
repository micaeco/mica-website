import React from 'react';
import Link from 'next/link';
import { IPost } from '@/src/types';

type Props = {
  post: IPost;
};

export default function PostCard ({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
        <div className="grow p-6">
          <span className="mb-2 inline-block text-sm">{post.tag}</span>
          <h4 className="mb-2">{post.title}</h4>
          <p className="text-gray-600">{post.summary}</p>
        </div>
      </div>
    </Link>
  );
};
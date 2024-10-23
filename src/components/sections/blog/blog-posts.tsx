'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

import PostCard from '@/components/ui/post-card';
import { IPost } from '@/types';

type Props = {
  posts: IPost[];
};

export default function BlogPosts({ posts }: Props) {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const common = useTranslations('common');

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, posts.length));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {posts.slice(0, visiblePosts).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="rounded bg-primary px-4 py-2 font-bold text-white hover:bg-primary-700"
          >
            Load More
          </button>
        </div>
      )}
      {posts.length === 0 && (
        <div className="mt-8 text-center">
          <p className="first-letter:capitalize">{common('no-articles-found')}</p>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { IPost } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  posts: IPost[];
};

export default function BlogPosts({ posts }: Props) {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const common = useTranslations('common');
  const tTags = useTranslations('blog.tags');

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, posts.length));
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {posts.slice(0, visiblePosts).map((post) => (
          <Card key={post.slug} className="shadow-sm transition-shadow hover:shadow-lg">
            <Link href={`/blog/${post.slug}`}>
              <CardHeader>
                <CardDescription className="first-letter:capitalize">
                  {tTags(post.tag)}
                </CardDescription>
                <CardTitle className="font-semibold">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>{post.summary}</CardContent>
            </Link>
          </Card>
        ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="hover:bg-brand-primary-700 rounded bg-brand-primary px-4 py-2 font-bold text-white"
          >
            {common('load') + ' ' + common('more')}
          </button>
        </div>
      )}
      {posts.length == 0 && (
        <div className="py-16 text-center">
          <p className="first-letter:capitalize">{common('no-articles-found')}.</p>
        </div>
      )}
    </div>
  );
}

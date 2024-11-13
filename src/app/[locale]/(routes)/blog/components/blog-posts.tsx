'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/types';

type Props = {
  posts: BlogPost[];
};

export default function BlogPosts({ posts }: Props) {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const common = useTranslations('common');
  const tTags = useTranslations('blog.tags');

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 4, posts.length));
  };

  if (!posts.length) {
    return (
      <div className="py-16 text-center">
        <p className="first-letter:capitalize">{common('no-articles-found')}.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.slice(0, visiblePosts).map((post) => (
        <Card key={post.slug} className="shadow-sm transition-shadow hover:shadow-lg">
          <Link href={`/blog/${post.slug}`}>
            {post.cover ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-300 hover:scale-105 hover:opacity-80"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>
            ) : (
              <div className="aspect-video"></div>
            )}
            <CardHeader>
              <CardDescription className="first-letter:capitalize">
                {tTags(post.tag)}
              </CardDescription>
              <CardTitle className="line-clamp-3 font-semibold">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.summary}</p>
            </CardContent>
          </Link>
        </Card>
      ))}
      {visiblePosts < posts.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore}>{common('load') + ' ' + common('more')}</Button>
        </div>
      )}
    </section>
  );
}

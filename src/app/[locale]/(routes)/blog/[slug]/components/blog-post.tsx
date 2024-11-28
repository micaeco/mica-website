'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Clock, Tag, Book } from 'lucide-react';

import Loading from '@/components/loading';
import GoBack from '@/components/ui/go-back';
import { BlogPost } from '@/types';
import { languageMap } from '@/lib/constants';
import { getBlogPost, portableTextComponents } from '@/lib/sanity';
import { PortableText } from 'next-sanity';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Comments from './comments';
import { Separator } from '@/components/ui/separator';

export default function BlogPostPage({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const errors = useTranslations('errors');
  const common = useTranslations('common');
  const tTags = useTranslations('blog.tags');
  const locale = useLocale();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getBlogPost(slug, locale);

        if (!post) {
          setError('NOT_FOUND');
          return;
        }

        setPost(post);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  if (isLoading) return <Loading />;

  if (!post || error) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white">
        {errors('NOT_FOUND')}
        <GoBack />
      </div>
    );
  }

  return (
    <article className="space-y-16 bg-white p-8">
      <div className="mx-auto max-w-3xl">
        <GoBack />

        <h3 className="mb-4 font-bold">{post.title}</h3>
        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-light">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={post.author?.profilePicture}
                alt={post.author?.name || common('unknown-author')}
              />
              <AvatarFallback>
                {post.author?.name.slice(0, 2) || common('unkown-author').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs">{post.author?.name || common('unknown-author')}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={15} />
            {post.date?.toString() || common('unknown-date')}
          </div>
          <div className="flex items-center gap-1 capitalize">
            <Tag size={15} />
            {tTags(post.tag) || common('unknown-tag')}
          </div>
          <div className="flex items-center gap-1 capitalize">
            <Book size={15} />
            {languageMap[locale] || common('unknown-language')}
          </div>
        </div>

        {post.content ? (
          <PortableText value={post.content} components={portableTextComponents} />
        ) : (
          <p className="capitalize">{common('no-content-available')}</p>
        )}
      </div>

      <Separator className="mx-auto max-w-3xl" />

      <Comments postId={post.id} />
    </article>
  );
}

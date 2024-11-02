'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Clock, User, Tag, Book } from 'lucide-react';

import Loading from '@/components/loading';
import MarkdownRenderer from '@/components/ui/markdown';
import GoBack from '@/components/ui/go-back';
import { IPost } from '@/types';
import { languageMap } from '@/lib/constants';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const errors = useTranslations('errors');
  const common = useTranslations('common');
  const tTags = useTranslations('blog.tags');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();

        if (!response.ok) {
          setError(errors(data.error));
        }

        const fetchedPosts = data.posts;
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <div>{errors(error)}</div>;

  const post = posts.find((post) => post.slug === slug);

  if (!post)
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        {errors('POST_NOT_FOUND')}
        <GoBack text={common('go-back')} />
      </div>
    );

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <GoBack text={common('go-back')} />

      <h3 className="font-bold">{post.title}</h3>
      <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-light">
        <div className="flex gap-1">
          <Clock size={15} />
          {post.date?.toString() || common('unknown-date')}
        </div>
        <div className="flex gap-1 capitalize">
          <User size={15} />
          {post.author || common('unknown-author')}
        </div>
        <div className="flex gap-1 capitalize">
          <Tag size={15} />
          {tTags(post.tag) || common('unknown-tag')}
        </div>
        <div className="flex gap-1 capitalize">
          <Book size={15} />
          {languageMap[post.lang]}
        </div>
      </div>

      {post.content ? (
        <MarkdownRenderer content={post.content} />
      ) : (
        <p className="capitalize">{common('no-content-available')}</p>
      )}
    </article>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Loading from '@/components/sections/common/loading';
import BlogPost from '@/components/sections/blog/blog-post';
import { IPost } from '@/types';
import GoBack from '@/components/ui/go-back';

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostContent({ params }: Props) {
  const { slug } = params;
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const errors = useTranslations('errors');
  const common = useTranslations('common');

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
  return <BlogPost post={post} />;
}

'use client';

import { useState, useEffect } from 'react';

import Loading from '@/src/components/sections/common/Loading';
import BlogPost from '@/src/components/sections/blog/BlogPost';
import { IPost } from '@/src/types';

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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
      } catch (e) {
        console.error('Failed to fetch blog posts:', e);
        setError('Failed to fetch blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;

  const post = posts.find((post) => post.slug === slug);

  if (!post) return <div>Post not found</div>;

  return <BlogPost post={post} />;
}

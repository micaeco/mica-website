import { useState, useEffect, useMemo } from 'react';
import { IPost, TPostTag } from '@/src/types';

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<TPostTag>('Tot');

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/blog-posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (e) {
        console.error('Failed to fetch blog posts:', e);
        setError('Failed to fetch blog posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts: IPost[] = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearchTerm = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'Tot' || post.tag === selectedTag;
      return matchesSearchTerm && matchesTag;
    });
  }, [searchTerm, selectedTag, blogPosts]);

  return { blogPosts, filteredPosts, error, isLoading, searchTerm, setSearchTerm, selectedTag, setSelectedTag };
}
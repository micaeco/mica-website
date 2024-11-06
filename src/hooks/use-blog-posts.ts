import { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";

import { BlogPost, BlogPostTag } from '@/types';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<BlogPostTag>('all');

  const locale = useLocale();
  const errors = useTranslations("errors");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();

        if (!response.ok) {
          toast.error(errors(data.error) || errors('DEFAULT'), { autoClose: 5000 });
          return;
        }

        setPosts(data.posts);
      } catch (error) {
        toast.error(errors('DEFAULT'), { autoClose: 5000 });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [errors]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearchTerm =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = selectedTag === 'all' || post.tag === selectedTag;
      const matchesLang = post.lang === locale;

      return matchesSearchTerm && matchesTag && matchesLang;
    });
  }, [searchTerm, selectedTag, posts, locale]);

  return {
    posts,
    filteredPosts,
    isLoading,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag
  };
}
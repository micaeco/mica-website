import { useState, useEffect, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import type { BlogPost, BlogPostTag } from '@/types';
import { getBlogPosts } from '@/services/sanity';

function extractTextFromPortableText(blocks: any[]): string {
  return blocks.reduce((text, block) => {
    if (block._type === 'block') {
      const blockText = block.children
        ?.map((child: any) => child.text || '')
        .join(' ');
      return text + ' ' + blockText;
    }

    if (block._type === 'image' && block.alt) {
      return text + ' ' + block.alt;
    }
    return text;
  }, '').toLowerCase();
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<BlogPostTag | 'all'>('all');

  const locale = useLocale();
  const errors = useTranslations("errors");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogPosts(locale);

        setPosts(posts);
      } catch (error) {
        setError(errors('DEFAULT'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [errors, locale]);

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  };

  const filteredPosts = useMemo(() => {
    const normalizedSearchTerm = normalizeText(searchTerm);

    return posts.filter((post) => {
      const matchesSearchTerm =
        normalizeText(post.title).includes(normalizedSearchTerm) ||
        normalizeText(post.summary).includes(normalizedSearchTerm) ||
        normalizeText(post.author?.name || '').includes(normalizedSearchTerm) ||
        normalizeText(extractTextFromPortableText(post.content)).includes(normalizedSearchTerm);

      const matchesTag = selectedTag === 'all' || post.tag === selectedTag;

      return matchesSearchTerm && matchesTag;
    });
  }, [searchTerm, selectedTag, posts]);

  return {
    posts,
    filteredPosts,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedTag,
    setSelectedTag
  };
}
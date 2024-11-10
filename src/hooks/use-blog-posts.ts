import { useState, useEffect, useMemo } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import type { BlogPost, BlogPostTag } from '@/types';
import { getBlogPost, getBlogPosts } from '@/lib/sanity';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<BlogPostTag | 'all'>('all');

  const locale = useLocale();
  const errors = useTranslations("errors");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getBlogPosts(locale);

        if (!posts) {
          toast.error(errors('NOT_FOUND'), { autoClose: 5000 });
          return;
        }

        setPosts(posts);
      } catch (error) {
        toast.error(errors('DEFAULT'), { autoClose: 5000 });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [errors, locale]);

  const postsContent = useMemo(() => {
    return posts.map(post => ({
      id: post.slug,
      text: extractTextFromPortableText(post.content)
    }));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase();

    return posts.filter((post) => {
      const postContent = postsContent.find(p => p.id === post.slug)?.text || '';

      const matchesSearchTerm =
        post.title.toLowerCase().includes(searchTermLower) ||
        post.summary.toLowerCase().includes(searchTermLower) ||
        postContent.includes(searchTermLower);

      const matchesTag = selectedTag === 'all' || post.tag === selectedTag;

      return matchesSearchTerm && matchesTag;
    });
  }, [searchTerm, selectedTag, posts, postsContent]);

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
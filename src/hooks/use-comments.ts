import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocale, useTranslations } from 'next-intl';

import { getComments, createComment, getBlogPostTitle } from '@/services/sanity';
import { BlogComment } from '@/types';
import { sendBlogPostComment } from '@/services/slack';

export function useComments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const locale = useLocale();
  const errors = useTranslations('errors');

  const fetchComments = async () => {
    try {
      const comments = await getComments(postId);
      setComments(comments);
    } catch (error) {
      setError(errors('DEFAULT'));
    } finally {
      setIsLoading(false);
    }
  };

  const addComment = async (
    postId: string,
    name: string,
    email: string,
    comment: string,
    parentId?: string
  ) => {
    try {
      await createComment(postId, name, email, comment, parentId);
      await fetchComments();
      const postTitle = await getBlogPostTitle(postId, locale);
      await sendBlogPostComment(postTitle, name, email, comment);
    } catch (error) {
      toast.error(errors('DEFAULT'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]);

  return {
    comments,
    isLoading,
    error,
    addComment,
    refreshComments: fetchComments,
  };
}

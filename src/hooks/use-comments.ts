import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';

import { getComments, createComment } from '@/lib/sanity';
import { BlogComment } from '@/types';

export function useComments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

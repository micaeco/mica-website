import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

import { getComments, postComment } from "../actions";
import { BlogComment, BlogCommentForm } from "@/types/blog";
import { ErrorKey } from "@/types/errors";

export function useComments({ postId }: { postId: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCode, setErrorCode] = useState<ErrorKey | null>();

  const tErrors = useTranslations("errors");
  const tSuccess = useTranslations("success");

  const fetchComments = useCallback(async () => {
    const { success, code, comments } = await getComments(postId);

    if (!success) {
      setErrorCode(code as ErrorKey);
    } else {
      setComments(comments);
    }

    setIsLoading(false);
  }, [postId]);

  const addComment = async ({ postId, name, email, comment, parentId }: BlogCommentForm) => {
    console.log("hello here");
    const { success, code } = await postComment(postId, name, email, comment, parentId);

    if (!success) {
      toast.error(tErrors(code as ErrorKey));
    } else {
      toast.success(tSuccess("DEFAULT"));
    }

    fetchComments();
  };

  useEffect(() => {
    fetchComments();
  }, [postId, fetchComments]);

  return {
    comments,
    isLoading,
    errorCode,
    addComment,
    refreshComments: fetchComments,
  };
}

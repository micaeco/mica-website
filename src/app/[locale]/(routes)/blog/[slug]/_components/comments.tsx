import { useTranslations } from "next-intl";
import { ToastContainer } from "react-toastify";

import Loading from "@/components/loading";
import Comment from "./comment";
import CommentForm from "./comment-form";
import { useComments } from "../_hooks/use-comments";
import { getTotalComments } from "@/lib/utils";

interface Props {
  postId: string;
}

export default function Comments({ postId }: Props) {
  const { comments, isLoading, errorCode, addComment } = useComments({ postId });
  const t = useTranslations("blog.comments");
  const tErrors = useTranslations("errors");

  if (isLoading) return <Loading />;

  return (
    <section className="mx-auto max-w-3xl space-y-4">
      <h3 className="font-bold capitalize">
        {t("title")} ({getTotalComments(comments)})
      </h3>

      <CommentForm postId={postId} addComment={addComment} onSuccess={() => {}} isReply={false} />

      {errorCode ? (
        <div className="rounded-md bg-red-50 p-4 text-destructive">{tErrors(errorCode)}</div>
      ) : (
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} addComment={addComment} />
          ))}
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        className="!text-xl"
      />
    </section>
  );
}

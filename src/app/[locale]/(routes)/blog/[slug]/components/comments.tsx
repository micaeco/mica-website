import { useTranslations } from 'next-intl';
import { ToastContainer } from 'react-toastify';

import Comment from './comment';
import CommentForm from './comment-form';
import Loading from '@/components/loading';
import { useComments } from '@/hooks/use-comments';
import { getTotalComments } from '@/lib/utils';

interface Props {
  postId: string;
}

export default function Comments({ postId }: Props) {
  const { comments, isLoading, error, addComment } = useComments({ postId });

  const common = useTranslations('common');
  const t = useTranslations('blog.comments');

  if (isLoading) return <Loading />;

  return (
    <section className="mx-auto max-w-3xl space-y-4">
      <h3 className="font-bold capitalize">
        {t('title')} ({getTotalComments(comments)})
      </h3>

      <CommentForm postId={postId} addComment={addComment} onSuccess={() => {}} isReply={false} />

      {error ? (
        <div className="rounded-md bg-red-50 p-4 text-destructive">{error}</div>
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

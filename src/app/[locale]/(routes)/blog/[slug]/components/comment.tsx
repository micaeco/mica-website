import { useState } from 'react';
import { formatDistance } from 'date-fns';
import { Reply, ChevronUp, ChevronDown, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import CommentForm from './comment-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { BlogComment } from '@/types/blog';
import { cn, DateFnsLocale, getTotalReplies } from '@/lib/utils';
import { maxCommentaryDepth } from '@/lib/constants';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

interface Props {
  comment: BlogComment;
  addComment: (
    postId: string,
    name: string,
    email: string,
    comment: string,
    parentId?: string
  ) => Promise<void>;
  depth?: number;
  parentName?: string;
}

export default function Comment({ comment, addComment, depth = 0, parentName }: Props) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(depth === 0 ? false : true);
  const common = useTranslations('common');
  const locale = useLocale();

  return (
    <div className={cn(depth === 1 && 'ml-4 border-l-2 border-muted pl-4', 'mt-4')}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-semibold">
              <Avatar className="flex h-8 w-8 items-center justify-center border-2 border-muted">
                <AvatarImage src="/logos/logo.webp" />
                <AvatarFallback>{comment.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              {comment.name}
            </div>
            <span className="text-sm text-muted-foreground">
              {formatDistance(new Date(comment.createdAt), new Date(), {
                addSuffix: true,
                locale: DateFnsLocale[locale],
              })}
            </span>
          </div>
        </CardHeader>

        <CardContent>
          <p>
            {parentName && depth > 1 && (
              <span className="text-blue-600 underline">@{parentName}</span>
            )}{' '}
            {comment.comment}
          </p>
        </CardContent>

        <CardFooter className="flex flex-wrap items-center">
          {depth < maxCommentaryDepth && (
            <Button
              variant="ghost"
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="self-start text-sm capitalize text-blue-600 hover:text-blue-800"
            >
              {showReplyForm ? (
                <div className="flex items-center gap-2">
                  <X size={16} /> {common('cancel')}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Reply size={16} /> {common('reply')}
                </div>
              )}
            </Button>
          )}

          {comment.replies && depth === 0 && (
            <Button
              variant="ghost"
              onClick={() => setShowReplies(!showReplies)}
              className="self-start text-sm capitalize"
            >
              <div className="flex items-center gap-2">
                {showReplies ? (
                  <>
                    <ChevronUp size={16} /> {common('hide')}
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} /> {common('show')}
                  </>
                )}{' '}
                <span className="hidden sm:block">{common('replies')}</span> (
                {getTotalReplies(comment)})
              </div>
            </Button>
          )}
        </CardFooter>
      </Card>

      {showReplyForm && (
        <CommentForm
          postId={comment.postId}
          addComment={addComment}
          parentId={comment.id}
          onSuccess={() => setShowReplyForm(false)}
          isReply
        />
      )}

      {showReplies &&
        comment.replies?.map((reply) => (
          <Comment
            key={reply.id}
            comment={reply}
            addComment={addComment}
            depth={depth + 1}
            parentName={comment.name}
          />
        ))}
    </div>
  );
}

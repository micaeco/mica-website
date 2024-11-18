'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Comment = {
  id: number;
  username: string;
  email: string;
  content: string;
  replies: Comment[];
};

export default function Component() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      username: 'Alice',
      email: 'alice@example.com',
      content: 'This is a great article! Thanks for sharing.',
      replies: [
        {
          id: 2,
          username: 'Bob',
          email: 'bob@example.com',
          content: 'I agree, very informative.',
          replies: [],
        },
      ],
    },
    {
      id: 3,
      username: 'Charlie',
      email: 'charlie@example.com',
      content: 'I have a question about the third point. Can you elaborate?',
      replies: [],
    },
  ]);

  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const addComment = (
    username: string,
    email: string,
    content: string,
    parentId: number | null = null
  ) => {
    const newComment: Comment = {
      id: Date.now(),
      username,
      email,
      content,
      replies: [],
    };

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId) {
            return { ...comment, replies: [...comment.replies, newComment] };
          }
          return comment;
        })
      );
    }
    setReplyingTo(null);
  };

  const CommentForm = ({ parentId = null }: { parentId?: number | null }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (username && email && content) {
        addComment(username, email, content, parentId);
        setUsername('');
        setEmail('');
        setContent('');
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit">{parentId ? 'Reply' : 'Post Comment'}</Button>
      </form>
    );
  };

  const CommentComponent = ({ comment }: { comment: Comment }) => (
    <div className="mb-4 rounded-lg border p-4">
      <div className="mb-2 flex items-center">
        <Avatar className="mr-2 h-8 w-8">
          <AvatarImage
            src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.username}`}
            alt={comment.username}
          />
          <AvatarFallback>{comment.username[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{comment.username}</div>
          <div className="text-sm text-gray-500">{comment.email}</div>
        </div>
      </div>
      <p className="mb-2">{comment.content}</p>
      <Button variant="outline" size="sm" onClick={() => setReplyingTo(comment.id)}>
        Reply
      </Button>
      {replyingTo === comment.id && (
        <div className="mt-4">
          <CommentForm parentId={comment.id} />
        </div>
      )}
      {comment.replies.length > 0 && (
        <div className="ml-8 mt-4">
          {comment.replies.map((reply) => (
            <CommentComponent key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-4 font-bold">Comments</h2>
      <div className="mb-8">
        <CommentForm />
      </div>
      <div>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { InfoIcon } from 'lucide-react';

interface Props {
  postId: string;
  addComment: any;
  parentId?: string;
  onSuccess: () => void;
  isReply: boolean;
}

export default function CommentForm({ postId, addComment, parentId, onSuccess, isReply }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const common = useTranslations('common');
  const errors = useTranslations('errors');
  const t = useTranslations('blog.comments');

  useEffect(() => {
    const savedUser = localStorage.getItem('commentUser');
    if (savedUser) {
      const { name: savedName, email: savedEmail } = JSON.parse(savedUser);
      setName(savedName);
      setEmail(savedEmail);
    }
  }, [isSubmitting]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !comment.trim()) return;

    setIsSubmitting(true);
    try {
      await addComment(postId, name.trim(), email.trim(), comment.trim(), parentId);

      localStorage.setItem('commentUser', JSON.stringify({ name, email }));
      setName('');
      setEmail('');
      setComment('');
      onSuccess();
    } catch (error) {
      toast.error(errors('DEFAULT'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1">
            <label htmlFor="name" className="mb-2 block capitalize">
              {common('name')}
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="mb-2 block capitalize">
              {common('email')}
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="mb-2 block capitalize">
            {common('comment')}
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            disabled={isSubmitting}
            rows={4}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="capitalize">
          {isSubmitting ? common('posting') + '...' : isReply ? common('reply') : common('post')}
        </Button>
      </form>

      <Card className="bg-muted text-sm">
        <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
          <InfoIcon className="h-4 w-4 text-muted-foreground" />
          <CardTitle>
            <p className="text-sm font-medium">{t('info.title')}</p>
          </CardTitle>
        </CardHeader>
        <CardContent>{t('info.text')}</CardContent>
      </Card>
    </div>
  );
}

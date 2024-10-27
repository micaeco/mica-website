import { ToastContainer } from 'react-toastify';
import { useTranslations } from 'next-intl';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  message: string;
  setMessage: (message: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
};

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  handleSubmit,
  isSubmitting,
}: Props) {
  const t = useTranslations('contact');
  const common = useTranslations('common');

  return (
    <section className="bg-gray-50 px-8 py-16">
      <div className="container mx-auto max-w-4xl">
        <h3 className="mb-4 font-bold">{t('title')}</h3>
        <ul className="mb-16 space-y-4">
          <li>
            <p>
              -{' '}
              {t.rich('testers', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              -{' '}
              {t.rich('technicians', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
          <li>
            <p>
              -{' '}
              {t.rich('partners', {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </li>
        </ul>
        <h3 className="mb-6 font-bold">{t('cta')}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { id: 'name', label: common('name'), type: 'text', value: name, onChange: setName },
            {
              id: 'email',
              label: common('email'),
              type: 'email',
              value: email,
              onChange: setEmail,
            },
          ].map((field) => (
            <div key={field.id}>
              <Label className="capitalize">{field.label}</Label>
              <Input
                type={field.type}
                id={field.id}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                required
              />
            </div>
          ))}
          <div>
            <Label className="capitalize">{common('message')}</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
            />
          </div>
          <Button
            type="submit"
            className={cn('capitalize', isSubmitting ? 'cursor-not-allowed' : '')}
            disabled={isSubmitting}
          >
            {isSubmitting && <Loader2 className="mr-2 animate-spin" />}
            {isSubmitting ? common('sending') + '...' : common('send')}
          </Button>
        </form>
      </div>
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

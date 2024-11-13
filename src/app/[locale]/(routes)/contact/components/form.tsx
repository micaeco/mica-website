import { ToastContainer } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

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
    <section className="px-8 py-16">
      <div className="mx-auto max-w-4xl space-y-4">
        <h2 className="font-bold">{t('cta')}</h2>
        <Card>
          <CardHeader />
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    id: 'name',
                    label: common('name'),
                    type: 'text',
                    value: name,
                    onChange: setName,
                  },
                  {
                    id: 'email',
                    label: common('email'),
                    type: 'email',
                    value: email,
                    onChange: setEmail,
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <Label className="mb-2 block font-medium capitalize">{field.label}</Label>
                    <Input
                      type={field.type}
                      id={field.id}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <Label className="mb-2 block font-medium capitalize">{common('message')}</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full resize-none"
                />
              </div>
              <Button
                type="submit"
                className={cn(
                  'w-full space-x-1 md:w-auto',
                  isSubmitting ? 'cursor-not-allowed' : ''
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span className="capitalize">
                  {isSubmitting ? common('sending') + '...' : common('send')}
                </span>
              </Button>
            </form>
          </CardContent>
        </Card>
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

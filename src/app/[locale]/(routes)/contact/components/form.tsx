'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Loader2, Send } from 'lucide-react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { submitContactForm } from './actions';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslations('contact');
  const common = useTranslations('common');
  const success = useTranslations('success');
  const errors = useTranslations('errors');

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      await submitContactForm(name, email, message);
      toast.success(success('CONTACT_FORM_SENT'));
      formRef.current?.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'DEFAULT';
      toast.error(errors.has(errorMessage) ? errors(errorMessage) : errors('DEFAULT'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-8 py-16">
      <div className="mx-auto max-w-4xl space-y-4">
        <h2 className="font-bold">{t('cta')}</h2>
        <Card>
          <CardHeader />
          <CardContent>
            <form ref={formRef} action={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block font-medium capitalize">{common('name')}</Label>
                  <Input type={'text'} name="name" required className="w-full" />
                </div>
                <div>
                  <Label className="mb-2 block font-medium capitalize">{common('email')}</Label>
                  <Input type={'email'} name="email" required className="w-full" />
                </div>
              </div>
              <div>
                <Label className="mb-2 block font-medium capitalize">{common('message')}</Label>
                <Textarea
                  id="message"
                  name="message"
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

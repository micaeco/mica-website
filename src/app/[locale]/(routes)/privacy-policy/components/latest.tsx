'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import GoBack from '@/components/ui/go-back';
import Markdown from '@/components/ui/markdown';
import Loading from '@/components/loading';
import { getPrivacyPolicy } from '@/lib/github';

export default function Latest() {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const errors = useTranslations('errors');
  const locale = useLocale();

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const data = await getPrivacyPolicy(locale);

        if (!data) {
          setError(errors('DEFAULT'));
        }

        setContent(data);
      } catch (error) {
        setError(typeof error === 'string' && error in errors ? errors(error) : errors('DEFAULT'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, [locale]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-96 w-full flex-col items-center justify-center space-y-2 bg-white">
        <p className="text-destructive">{error}</p>
        <GoBack />
      </div>
    );
  }

  return (
    <section className="bg-white px-8 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          <Markdown content={content} />
        </div>
        <GoBack />
      </div>
    </section>
  );
}

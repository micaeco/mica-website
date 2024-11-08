'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import GoBack from '@/components/ui/go-back';
import Markdown from '@/components/ui/markdown';
import Loading from '@/components/loading';

export default function Latest() {
  const common = useTranslations('common');
  const errors = useTranslations('errors');
  const locale = useLocale();
  const [content, setContent] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const response = await fetch(`/api/privacy-policy`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            locale,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          setError(errors(data.error) || errors('DEFAULT'));
        }

        setContent(data.content);
      } catch (error) {
        setError(errors(error) || errors('DEFAULT'));
      }
    };

    fetchPrivacyPolicy();
  }, [locale]);

  return (
    <section className="bg-white px-8 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          {error ? (
            <p className="text-destructive">{error}</p>
          ) : content ? (
            <Markdown content={content} />
          ) : (
            <Loading />
          )}
        </div>
        <GoBack />
      </div>
    </section>
  );
}

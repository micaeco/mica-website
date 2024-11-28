'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import GoBack from '@/components/ui/go-back';
import Loading from '@/components/loading';
import { getPrivacyPolicy } from '@/lib/sanity';
import Markdown from '@/components/ui/markdown';

interface PrivacyPolicy {
  content: string;
}

export default function Latest() {
  const [privacyPolicy, setPrivacyPolicy] = useState<PrivacyPolicy>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const common = useTranslations('common');
  const errors = useTranslations('errors');
  const locale = useLocale();

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      try {
        const privacyPolicy = await getPrivacyPolicy(locale);

        if (!privacyPolicy) {
          setError('NOT_FOUND');
          return;
        }

        setPrivacyPolicy(privacyPolicy);
      } catch (error) {
        setError(error as string);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrivacyPolicy();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-96 w-full flex-col items-center justify-center space-y-2 bg-white">
        <p className="text-destructive">{errors(error)}</p>
        <GoBack />
      </div>
    );
  }

  return (
    <section className="bg-white px-8 py-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div>
          {privacyPolicy ? (
            <Markdown content={privacyPolicy.content} />
          ) : (
            <p className="capitalize">{common('no-content-available')}</p>
          )}
        </div>
        <GoBack />
      </div>
    </section>
  );
}

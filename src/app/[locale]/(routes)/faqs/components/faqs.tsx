'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { getFaqs } from '@/lib/sanity';
import { Faq } from '@/types';
import Loading from '@/components/loading';

export default function Faqs() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const t = useTranslations('faqs');
  const errors = useTranslations('errors');
  const locale = useLocale();

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqs = await getFaqs(locale);

        if (!faqs) {
          setError(errors('NOT_FOUND'));
          return;
        }

        setFaqs(faqs);
      } catch (error) {
        setError(errors('DEFAULT'));
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaqs();
  }, [locale]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-4 font-bold">{t('title')}</h3>
        <Accordion type="single" collapsible>
          {error ? (
            <p>{error}</p>
          ) : (
            faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))
          )}
        </Accordion>
      </div>
    </section>
  );
}

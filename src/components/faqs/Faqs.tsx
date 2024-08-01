'use client';

import Question from '@/src/components/ui/QuestionCard';
import { useFaqs } from '@/src/hooks/useFaqs';

export default function Faqs() {
  const { faqs } = useFaqs();

  return (
    <div className="mx-auto max-w-2xl">
      <h4 className="mb-4 font-bold">
        Preguntes freqüents
      </h4>
      <div>
        {faqs.map((faq) => (
          <Question key={faq.slug} question={faq} />
        ))}
      </div>
    </div>
  );
};
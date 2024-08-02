'use client';

import ExpandableQuestion from '@/src/components/ui/ExpandableQuestion';
import { useFaqs } from '@/src/hooks/useFaqs';

export default function Faqs() {
  const { faqs } = useFaqs();

  return (
    <div className="mx-auto px-4 max-w-2xl">
      <h3 className="mb-4 font-bold">Preguntes freqüents</h3>
      <div>
        {faqs.map((faq) => (
          <ExpandableQuestion key={faq.slug} question={faq} />
        ))}
      </div>
    </div>
  );
}

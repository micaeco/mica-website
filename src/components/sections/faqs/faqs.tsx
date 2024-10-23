import { useTranslations } from 'next-intl';
import ExpandableQuestion from '@/components/ui/expandable-question';

export default function Faqs() {
  const t = useTranslations('faqs');

  const faqs = t.raw('questions') as Array<{ question: string; answer: string }>;

  return (
    <div className="px-4">
      <h3 className="mb-4 font-bold">{t('title')}</h3>
      <div>
        {faqs.map((faq) => (
          <ExpandableQuestion question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

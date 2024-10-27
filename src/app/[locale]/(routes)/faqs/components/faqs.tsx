import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faqs() {
  const t = useTranslations('faqs');

  const faqs = t.raw('questions') as Array<{ question: string; answer: string }>;

  return (
    <div className="px-4">
      <h3 className="mb-4 font-bold">{t('title')}</h3>
      <Accordion type="single" collapsible>
        {faqs.map((faq, key) => (
          <AccordionItem value={key.toString()}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

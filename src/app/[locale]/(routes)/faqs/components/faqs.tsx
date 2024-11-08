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
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-2xl">
        <h3 className="mb-4 font-bold">{t('title')}</h3>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

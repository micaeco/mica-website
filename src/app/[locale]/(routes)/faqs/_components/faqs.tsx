"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqs } from "../actions";
import { Faq } from "@/types/faqs";
import Loading from "@/components/loading";
import { ErrorKey } from "@/types/errors";

export default function Faqs() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [errorCode, setErrorCode] = useState<ErrorKey | null>();
  const [isLoading, setIsLoading] = useState(true);

  const t = useTranslations("faqs");
  const tErrors = useTranslations("errors");
  const locale = useLocale();

  useEffect(() => {
    const fetchFaqs = async () => {
      const { success, code, faqs } = await getFaqs(locale);

      if (!success) {
        setErrorCode(code as ErrorKey);
        setIsLoading(false);
        return;
      }

      setFaqs(faqs);
      setIsLoading(false);
    };

    fetchFaqs();
  }, [locale]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 font-bold">{t("title")}</h2>
        <Accordion type="single" collapsible>
          {errorCode ? (
            <p>{tErrors(errorCode)}</p>
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

"use client";

import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("cookies.hero");

  return (
    <section>
      <div className="mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 px-4 py-16 lg:grid-cols-12 lg:px-8">
          <div className="space-y-8 lg:col-span-7">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              {t.rich("title", {
                orange: (chunks) => <span className="text-brand-quaternary">{chunks}</span>,
              })}
            </h1>

            <div className="space-y-4 text-gray-600">
              <h2 className="text-lg font-medium md:text-xl lg:text-2xl">{t("description")}</h2>

              <Accordion type="single" collapsible className="w-full max-w-2xl">
                <AccordionItem value="item-2">
                  <AccordionTrigger>{t("faq1.question")}</AccordionTrigger>
                  <AccordionContent>{t("faq1.answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>{t("faq2.question")}</AccordionTrigger>
                  <AccordionContent>{t("faq2.answer")}</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{t("faq3.question")}</AccordionTrigger>
                  <AccordionContent>{t("faq3.answer")}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Image side - spans 5 columns on desktop */}
          <div className="h-full w-full lg:col-span-5">
            <div className="aspect-video overflow-hidden rounded-xl shadow-xl lg:aspect-square">
              <Image
                src="/images/hero.jpg"
                alt="Galetes artesanals fetes a mà"
                priority
                width={3000}
                height={2250}
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

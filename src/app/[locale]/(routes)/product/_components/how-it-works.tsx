"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ExternalLink, LucideIcon, ChevronsRight, Database, TrendingUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

interface StepIconProps {
  number: number;
  icon: LucideIcon;
}

interface StepContentProps {
  title: string;
  text: string;
}

interface StepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
  isReversed?: boolean;
  containerClass: string;
}

interface CTAProps {
  cta1: string;
  cta2: string;
  locale: string;
}

function StepIcon({ number, icon: Icon }: StepIconProps) {
  return (
    <div className="relative flex items-end">
      <h2 className="absolute -top-6 left-2 flex items-center justify-center font-bold text-primary">
        {number}
      </h2>
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-brand-secondary">
        <Icon className="h-3/5 w-3/5 text-white" />
      </div>
    </div>
  );
}

function StepContent({ title, text }: StepContentProps) {
  return (
    <div className="flex-1">
      <h5 className="mb-2 font-bold">{title}</h5>
      <p className="font-light">{text}</p>
    </div>
  );
}

function Step({ number, icon, title, text, image, isReversed, containerClass }: StepProps) {
  const reversedImage = isReversed && (
    <div className="block sm:col-span-6 xl:hidden">
      <Image src={`/images/${image}`} alt="Step illustration" width={1024} height={1024} />
    </div>
  );

  const regularImage = !isReversed && (
    <div className="block sm:col-span-5 xl:hidden">
      <Image src={`/images/${image}`} alt="Step illustration" width={1024} height={1024} />
    </div>
  );

  return (
    <div
      className={`flex items-center sm:grid sm:grid-cols-10 ${
        isReversed ? "flex-col-reverse text-right" : "flex-col"
      }`}
    >
      {reversedImage}
      <div
        className={`flex flex-col items-${isReversed ? "end" : "start"} gap-4 ${containerClass} ${
          isReversed
            ? "col-span-full sm:col-start-7 sm:col-end-11 xl:flex-row-reverse"
            : "sm:col-span-5 xl:flex-row"
        } xl:items-center`}
      >
        <StepIcon number={number} icon={icon} />
        <StepContent title={title} text={text} />
      </div>
      {regularImage}
    </div>
  );
}

function CTA({ cta1, cta2, locale }: CTAProps) {
  return (
    <div className="relative flex justify-center space-x-4 py-16">
      <Button className="w-fit" variant="outline" size="lg">
        <Link
          href={`https://app.mica.eco/${locale}`}
          className="flex items-center gap-2"
          target="_blank"
        >
          {cta1} <ExternalLink size={16} />
        </Link>
      </Button>
      <Button className="w-fit" size="lg">
        <Link href="/beta">{cta2}</Link>
      </Button>
    </div>
  );
}

export default function HowItWorks() {
  const t = useTranslations("product");
  const steps = useTranslations("product.how-it-works.steps");
  const locale = useLocale();

  return (
    <section className="bg-white px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute inset-0 hidden xl:block">
          <Image
            src="/images/howItWorks-desktop.webp"
            alt="HowItWorks"
            className="w-full"
            width={3000}
            height={3000}
            priority
          />
        </div>

        <div className="relative flex flex-col space-y-16 py-12 sm:space-y-32">
          <Step
            number={1}
            icon={ChevronsRight}
            title={steps("step1.title")}
            text={steps("step1.text")}
            image="howItWorks-sensor.webp"
            containerClass="col-span-full sm:col-span-5 py-8"
          />

          <Step
            number={2}
            icon={Database}
            title={steps("step2.title")}
            text={steps("step2.text")}
            image="howItWorks-cloud.webp"
            containerClass="col-span-full sm:col-start-7 sm:col-end-11"
            isReversed
          />

          <Step
            number={3}
            icon={TrendingUp}
            title={steps("step3.title")}
            text={steps("step3.text")}
            image="howItWorks-app.webp"
            containerClass="col-span-full sm:col-span-5"
          />
        </div>

        <CTA cta1={t("cta.cta1")} cta2={t("cta.cta2")} locale={locale} />
      </div>
    </section>
  );
}

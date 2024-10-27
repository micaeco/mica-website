'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { getHowItWorksSteps } from '@/lib/constants';

const StepIcon = ({ number, icon: Icon }: { number: number; icon: LucideIcon }) => (
  <div className="relative flex items-end">
    <h2 className="text-stroke-2 absolute -top-6 left-2 flex items-center justify-center font-black text-primary">
      {number}
    </h2>
    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-brand-secondary">
      <Icon className="h-3/5 w-3/5 text-white" />
    </div>
  </div>
);

const StepContent = ({ title, text }: { title: string; text: string }) => (
  <div className="flex-1">
    <h5 className="mb-2 font-bold">{title}</h5>
    <p>{text}</p>
  </div>
);

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const tSteps = useTranslations('howItWorks.steps');

  const steps = getHowItWorksSteps(tSteps);

  return (
    <section className="mx-auto flex max-w-6xl flex-col px-8">
      <div className="relative">
        <div className="hidden xl:block">
          <Image
            src="/images/howItWorks-desktop.webp"
            alt="HowItWorks"
            className="w-full"
            width={3000}
            height={3000}
          />
        </div>

        <div className="flex flex-col space-y-16 xl:absolute xl:inset-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid h-1/3 grid-cols-10 items-center ${step.isReversed ? 'text-right' : ''}`}
            >
              {step.isReversed && (
                <div className="col-span-6 hidden sm:block xl:hidden">
                  <Image src={`/images/${step.image}`} alt="AI cloud" width={1024} height={1024} />
                </div>
              )}
              <div
                className={`flex flex-col items-${step.isReversed ? 'end' : 'start'} gap-4 ${step.containerClass} ${step.isReversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:items-center`}
              >
                <StepIcon number={index + 1} icon={step.icon} />
                <StepContent title={steps[index].title} text={steps[index].text} />
              </div>
              {!step.isReversed && (
                <div className="col-span-5 hidden sm:block xl:hidden">
                  <Image src={`/images/${step.image}`} alt="AI cloud" width={1024} height={1024} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-16">
        <Button className="w-fit">
          <Link href="/beta">{t('cta')}</Link>
        </Button>
      </div>
    </section>
  );
}

'use client';

import Button from '@/components/ui/button';
import { ChevronsRight, Database, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { LucideIcon } from 'lucide-react';

const StepIcon = ({ number, icon: Icon }: { number: number; icon: LucideIcon }) => (
  <div className="relative flex items-end">
    <h2 className="text-stroke-2 absolute -top-6 left-2 flex items-center justify-center font-black text-primary">
      {number}
    </h2>
    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-secondary">
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
  const steps = t.raw('steps');

  const stepConfigs = [
    {
      icon: ChevronsRight,
      image: 'howItWorks-sensor.webp',
      containerClass: 'col-span-full sm:col-span-5 py-8',
    },
    {
      icon: Database,
      image: 'howItWorks-cloud.webp',
      containerClass: 'col-span-full sm:col-start-7 sm:col-end-11',
      isReversed: true,
    },
    {
      icon: TrendingUp,
      image: 'howItWorks-app.webp',
      containerClass: 'col-span-full sm:col-span-5',
    },
  ];

  return (
    <section className="mx-auto flex max-w-6xl flex-col px-8">
      <div className="relative">
        <div className="hidden xl:block">
          <Image
            src="/images/howitworks-desktop.webp"
            alt="HowItWorks"
            className="w-full"
            width={3000}
            height={3000}
          />
        </div>

        <div className="flex flex-col space-y-16 xl:absolute xl:inset-0">
          {stepConfigs.map((config, index) => (
            <div
              key={index}
              className={`grid h-1/3 grid-cols-10 items-center ${config.isReversed ? 'text-right' : ''}`}
            >
              {config.isReversed && (
                <div className="col-span-6 hidden sm:block xl:hidden">
                  <Image
                    src={`/images/${config.image}`}
                    alt="AI cloud"
                    width={1024}
                    height={1024}
                  />
                </div>
              )}
              <div
                className={`flex flex-col items-${config.isReversed ? 'end' : 'start'} gap-4 ${config.containerClass} ${config.isReversed ? 'xl:flex-row-reverse' : 'xl:flex-row'} xl:items-center`}
              >
                <StepIcon number={index + 1} icon={config.icon} />
                <StepContent title={steps[index].title} text={steps[index].text} />
              </div>
              {!config.isReversed && (
                <div className="col-span-5 hidden sm:block xl:hidden">
                  <Image
                    src={`/images/${config.image}`}
                    alt="AI cloud"
                    width={1024}
                    height={1024}
                  />
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

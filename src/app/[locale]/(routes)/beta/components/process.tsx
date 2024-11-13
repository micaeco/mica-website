'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { getBetaSteps } from '@/lib/constants';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  isLast?: boolean;
};

function ProcessStep({ icon: Icon, title, description, isLast = false }: Props) {
  const stepRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={stepRef} className="relative flex items-start pb-8">
      <div className="mr-6 flex flex-col items-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-secondary text-white shadow-sm transition-shadow hover:shadow-lg">
          <Icon className="size-7" />
        </div>
        {!isLast && (
          <div
            className="absolute left-7 top-14 w-0.5 -translate-x-1/2 bg-gray-300 transition-all duration-300"
            style={{ height: 'calc(100% - 3.5rem)' }}
          />
        )}
      </div>
      <div className="grow">
        <h5 className="font-medium">{title}</h5>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  const t = useTranslations('beta.process');
  const tSteps = useTranslations('beta.process.steps');
  const steps = getBetaSteps(tSteps);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid justify-center 2xl:grid-cols-10">
          <div className="col-span-6 px-8">
            <h3 className="justify-left mb-10 flex font-bold">{t('title')}</h3>
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} isLast={index === steps.length - 1} />
            ))}
          </div>
          <div className="col-span-4">
            <Image
              className="hidden 2xl:block"
              src="/images/team.webp"
              alt="Team"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

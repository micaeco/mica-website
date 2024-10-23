'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="flex flex-col items-center bg-white px-8 pb-4 pt-20">
      <div className="relative flex w-full max-w-6xl flex-col gap-16 text-left 2xl:h-[650px]">
        <div className="absolute right-5 top-4 hidden items-center 2xl:block">
          <Image
            src="/images/hero-graphic-desktop.png"
            alt="Background"
            width={1050}
            height={720}
          />
        </div>
        <div className="mx-auto justify-center space-y-4 text-left 2xl:mx-0 2xl:justify-start">
          <Image
            src="/images/hero-graphic-mobile.png"
            alt="Logo"
            width={475}
            height={300}
            className="block 2xl:hidden"
          />
          <h1 className="font-bold leading-tight">
            {t('title.line1')} <br />
            {t('title.line2')}
          </h1>
          <p className="font-light">
            {t('text.line1')} <br /> {t('text.line2')} <br /> {t('text.line3')}
          </p>
          <Link href="beta">
            <Button className="mb-6 mt-10">{t('cta')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

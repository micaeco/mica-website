'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="flex flex-col items-center bg-white px-8 py-16">
      <div className="relative flex w-full max-w-6xl flex-col gap-16 text-left 2xl:h-[650px]">
        <div className="pointer-events-none absolute right-5 top-4 hidden 2xl:block">
          <Image
            src="/images/hero-graphic-desktop.webp"
            alt="Background"
            width={1050}
            height={720}
          />
        </div>
        <div className="pointer-events-none absolute right-5 top-24 hidden xl:block 2xl:hidden">
          <Image src="/images/hero-graphic-mobile.webp" alt="Background" width={900} height={600} />
        </div>
        <div className="z-10 mx-auto justify-center space-y-4 text-left xl:mx-0 xl:justify-start">
          <Image
            src="/images/hero-graphic-mobile.webp"
            alt="Logo"
            width={475}
            height={300}
            className="block xl:hidden"
          />
          <div className="relative">
            <h1 className="max-w-[500px] text-pretty font-bold leading-tight">{t('title')}</h1>
            <p className="mt-4 max-w-[350px] text-pretty font-light">{t('text')}</p>
            <Button className="mb-4 mt-10 2xl:mb-24" size="lg">
              <Link href="/beta">{t('cta')}</Link>
            </Button>
            <div className="space-y-2">
              <p className="text-xs font-light">{t('with-the-support')}</p>
              <Image
                src={'/logos/bithabitat.png'}
                alt={'Logo bithabitat'}
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

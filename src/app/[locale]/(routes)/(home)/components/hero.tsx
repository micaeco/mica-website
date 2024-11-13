'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="px-8 py-16 xl:py-32">
      <div className="relative mx-auto max-w-6xl 2xl:h-[650px]">
        {/* Desktop background (2XL) */}
        <div className="pointer-events-none absolute right-5 top-4 hidden 2xl:block">
          <Image
            src="/images/hero-graphic-desktop.webp"
            alt="Background"
            width={1050}
            height={720}
          />
        </div>

        {/* Tablet background (XL) */}
        <div className="pointer-events-none absolute right-5 top-24 hidden xl:block 2xl:hidden">
          <Image src="/images/hero-graphic-mobile.webp" alt="Background" width={900} height={600} />
        </div>

        <div className="flex justify-center xl:justify-start">
          <div className="z-10 space-y-4 text-left">
            {/* Mobile image */}
            <Image
              src="/images/hero-graphic-mobile.webp"
              alt="Logo"
              width={475}
              height={300}
              className="block xl:hidden"
            />
            <div>
              <h1 className="mx-auto max-w-[540px] bg-gradient-to-b from-primary/85 to-primary bg-clip-text font-bold leading-tight text-transparent">
                {t('title')}
              </h1>
              <p className="mt-4 max-w-[350px]">{t('text')}</p>

              <Button className="mb-6 mt-7 2xl:mb-24" size="lg">
                <Link href="/beta">{t('cta')}</Link>
              </Button>

              <div className="space-y-2">
                <p className="text-xs">{t('with-the-support')}</p>
                <Image src="/logos/bithabitat.png" alt="Logo bithabitat" width={160} height={160} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="px-8 py-20">
      <div className="mx-auto max-w-6xl xl:h-[500px] 2xl:h-[600px]">
        <div className="relative items-center justify-center">
          {/* Desktop background (2XL) */}
          <div className="pointer-events-none absolute right-5 top-4 hidden 2xl:block">
            <Image
              src="/images/hero-graphic-desktop.webp"
              alt="Background"
              width={1050}
              height={720}
              priority
            />
          </div>

          {/* Tablet background (XL) */}
          <div className="pointer-events-none absolute right-5 top-24 hidden xl:block 2xl:hidden">
            <Image
              src="/images/hero-graphic-mobile.webp"
              alt="Background"
              width={900}
              height={600}
              priority
            />
          </div>

          <div className="flex justify-center text-center xl:justify-start xl:text-left">
            <div className="z-10 space-y-4">
              {/* Mobile image */}
              <Image
                src="/images/hero-graphic-mobile.webp"
                alt="Background"
                width={475}
                height={300}
                className="mx-auto block xl:hidden"
                priority
              />
              <div>
                <h1 className="max-w-[650px] font-bold leading-tight">{t('title')}</h1>
                <p className="mx-auto mt-4 max-w-[350px] xl:mx-0">{t('text')}</p>

                <Button
                  className="group relative mb-6 mt-7 overflow-hidden bg-brand-quaternary 2xl:mb-24"
                  size="lg"
                >
                  <Link href="/beta" className="relative z-10">
                    {t('cta')}
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-quaternary opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

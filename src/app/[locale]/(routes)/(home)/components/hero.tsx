'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function Hero({ className }: { className?: string }) {
  const t = useTranslations('home.hero');

  return (
    <section className={cn(className, 'relative px-8 py-10 sm:py-20')}>
      <div className="absolute bottom-0 right-0 h-[60%] w-[100%] sm:h-[70%] sm:w-[90%] md:h-[100%] md:w-[55%]">
        <div className="relative h-full w-full before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-transparent before:to-white sm:before:hidden">
          <Image
            src="/images/hero-image.webp"
            alt="Background image"
            fill
            priority
            className="bg-gradient from-opacity-0 to-opacity-100 object-cover object-left-top xl:object-right"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 space-y-4 md:space-y-8">
          <h1 className="max-w-[600px] text-balance text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-4 max-w-[400px] text-lg md:text-xl lg:max-w-[500px] xl:text-2xl">
            {t('text')}
          </p>

          <Button
            className="group relative overflow-hidden bg-brand-quaternary text-lg font-bold text-brand-primary md:px-10 md:py-6 md:text-xl xl:px-12 xl:py-8 xl:text-2xl"
            size="lg"
          >
            <Link href="/beta" className="relative z-10">
              {t('cta')}
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-quaternary opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </Button>
        </div>
      </div>
    </section>
  );
}

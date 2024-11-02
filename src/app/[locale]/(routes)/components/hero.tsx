'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Video from '@/components/ui/video';
import { ArrowRightIcon } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  const subtitles = [
    { src: '/locales/ca/subtitles.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/locales/es/subtitles.vtt', srcLang: 'es', label: 'Español' },
    { src: '/locales/en/subtitles.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <section className="flex flex-col items-center bg-white px-8 pb-4 pt-20">
      <div className="relative flex w-full max-w-6xl flex-col gap-16 text-left 2xl:h-[650px]">
        <div className="pointer-events-none absolute right-5 top-4 hidden 2xl:block">
          <Image
            src="/images/hero-graphic-desktop.webp"
            alt="Background"
            width={1050}
            height={720}
          />
        </div>
        <div className="z-10 mx-auto justify-center space-y-4 text-left 2xl:mx-0 2xl:justify-start">
          <Image
            src="/images/hero-graphic-mobile.webp"
            alt="Logo"
            width={475}
            height={300}
            className="block 2xl:hidden"
          />
          <div className="relative">
            <h1 className="max-w-[500px] text-pretty font-bold leading-tight">{t('title')}</h1>
            <p className="max-w-[400px] text-pretty font-light">{t('text')}</p>
            <Link href="beta">
              <Button
                className="mb-4 mt-10 2xl:mb-24"
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                size="lg"
              >
                {t('cta')}
              </Button>
            </Link>
            <p className="text-sm font-light">{t('with-the-support')}</p>
            <Image src={'/logos/bithabitat.png'} alt={'Logo bithabitat'} width={160} height={160} />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-16">
        <Video
          src="/videos/mica-2.mp4"
          subtitles={subtitles}
          autoPlayWhenVisible
          className="max-w-6xl"
        />
      </div>
    </section>
  );
}

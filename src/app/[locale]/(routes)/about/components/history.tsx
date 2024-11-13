import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HistorySection() {
  const t = useTranslations('about.history');

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-4 xl:grid-cols-10">
        <div className="col-span-6 flex flex-col">
          <h2 className="font-bold">{t('title')}</h2>
          <h4 className="font-bold">{t('subtitle')}</h4>
          <br />
          <p className="font-light">{t('paragraph1')}</p>
          <br />
          <p className="font-light">{t('paragraph2')}</p>
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <Image
            src="/images/journey.webp"
            alt="Journey"
            width={3000}
            height={3000}
            loading="eager"
            className="hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
}

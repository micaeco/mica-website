import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HistorySection() {
  const t = useTranslations('history');

  return (
    <section className="px-8 py-16">
      <div className="mx-auto grid max-w-6xl items-center xl:grid-cols-10">
        <div className="col-span-6 flex flex-col">
          <h2 className="font-bold">{t('title')}</h2>
          <h5 className="mb-3 font-bold">{t('subtitle')}</h5>
          <p className="mb-6 font-light">{t('paragraph1')}</p>
          <p className="mb-6 font-light">{t('paragraph2')}</p>
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

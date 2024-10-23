import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function HistorySection() {
  const t = useTranslations('history');

  return (
    <section className="px-8 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center xl:flex-row">
        <div className="flex flex-col">
          <h2 className="font-bold">{t('title')}</h2>
          <h5 className="mb-3 font-bold">{t('subtitle')}</h5>
          <p className="mb-6 font-light">{t('paragraph1')}</p>
          <p className="mb-6 font-light">{t('paragraph2')}</p>
        </div>
        <Image src="/images/journey.png" alt="Journey" width={500} height={500} loading="eager" />
      </div>
    </section>
  );
}

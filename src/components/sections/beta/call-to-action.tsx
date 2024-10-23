import React from 'react';

import Button from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function CallToAction() {
  const t = useTranslations('beta.cta');

  return (
    <section className="bg-gradient-to-b from-primary-300 to-primary py-20 text-white">
      <div className="container mx-auto px-8 text-center">
        <h6 className="mx-auto mb-8 max-w-2xl">{t('text')}</h6>
        <div className="space-x-3">
          <Link href="https://app.mica.eco" target="_blank">
            <Button variant="transparent" showArrow={false}>
              {t('cta1')}
            </Button>
          </Link>

          <Link href="/register">
            <Button> {t('cta2')} </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm opacity-75">{t('note')}</p>
      </div>
    </section>
  );
}

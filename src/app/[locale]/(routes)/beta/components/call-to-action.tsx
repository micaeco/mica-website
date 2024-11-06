import React from 'react';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function CallToAction() {
  const t = useTranslations('beta.cta');

  return (
    <section className="bg-secondary py-16 text-secondary-foreground">
      <div className="container mx-auto px-8 text-center">
        <h6 className="mx-auto mb-8 max-w-2xl">{t('text')}</h6>
        <div className="space-x-3">
          <Button variant="outline" size="lg">
            <Link href="https://app.mica.eco" target="_blank">
              {t('cta1')}
            </Link>
          </Button>

          <Button size="lg">
            <Link href="/register"> {t('cta2')} </Link>
          </Button>
        </div>
        <p className="mt-6 text-sm text-secondary-foreground/80">{t('note')}</p>
      </div>
    </section>
  );
}

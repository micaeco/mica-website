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
          <Link href="https://app.mica.eco" target="_blank">
            <Button variant="outline" size="lg">
              {t('cta1')}
            </Button>
          </Link>

          <Link href="/register">
            <Button size="lg"> {t('cta2')} </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-secondary-foreground/80">{t('note')}</p>
      </div>
    </section>
  );
}

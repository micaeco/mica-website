'use client';

import { Handshake, Users, Wrench } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function LookingFor() {
  const t = useTranslations('contact');

  const features = [
    { icon: Users, text: 'testers' },
    { icon: Wrench, text: 'technicians' },
    { icon: Handshake, text: 'partners' },
  ];

  return (
    <section className="px-8 py-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <h2 className="font-bold tracking-tight">{t('title')}:</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, text }) => (
            <Card key={text} className="shadow-sm transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-center">
                  <Icon size={40} />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-2">
                <p>
                  {t.rich(text, {
                    strong: (chunks) => <strong className="font-bold">{chunks}</strong>,
                  })}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

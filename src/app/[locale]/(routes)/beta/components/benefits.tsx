'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { getBetaBenefits } from '@/lib/constants';

export default function BetaBenefits() {
  const t = useTranslations('beta.benefits');
  const tBenefits = useTranslations('beta.benefits.benefits');
  const benefits = getBetaBenefits(tBenefits);

  return (
    <section className="bg-muted py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-8"
      >
        <h3 className="mb-10 text-center font-bold">{t('title')}</h3>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <benefit.icon className="text-brand-quaternary" size={50} />
                <CardTitle>
                  <h5 className="font-medium">{benefit.title}</h5>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-light">{benefit.description}</p>
              </CardContent>
              <benefit.icon
                className="text-brand-quaternary absolute -bottom-5 -right-5 opacity-5"
                size={200}
              />
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

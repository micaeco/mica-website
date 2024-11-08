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
    <section className="bg-gray-50 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-8"
      >
        <h3 className="mb-10 text-center font-bold text-brand-primary">{t('title')}</h3>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="relative overflow-hidden shadow-sm transition-shadow hover:shadow-lg"
            >
              <CardHeader className="space-y-4">
                <benefit.icon className="text-brand-accent" size={50} />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
              <benefit.icon
                className="absolute -bottom-5 -right-5 text-brand-accent opacity-5"
                size={200}
              />
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

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
        className="container mx-auto px-8"
      >
        <h3 className="mb-10 text-center font-bold text-brand-primary">{t('title')}</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-sm transition-shadow hover:shadow-lg">
              <CardHeader>
                <benefit.icon className="mb-4 size-12 text-brand-accent" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

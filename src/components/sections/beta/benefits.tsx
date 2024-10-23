'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getBetaBenefits } from '@/lib/constants';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function BenefitCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
      <Icon className="mb-4 size-12 text-accent" />
      <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

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
        <h3 className="mb-10 text-center font-bold text-primary">{t('title')}</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

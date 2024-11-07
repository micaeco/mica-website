'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { getSolutionBenefits } from '@/lib/constants';

export default function Solution() {
  const t = useTranslations('home.solution');
  const tBenefits = useTranslations('home.solution.benefits');
  const benefits = getSolutionBenefits(tBenefits);

  return (
    <div className="bg-gradient-to-b from-brand-secondary to-brand-tertiary px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12">
          <div className="col-span-12 2xl:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 font-bold"
            >
              {t('title')}
            </motion.h2>

            <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {benefits.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div>
                    <card.icon className="mb-4 size-20 rounded-full bg-brand-primary p-4 text-white" />
                    <h4 className="mb-2 font-bold">{card.title}</h4>
                    <p>{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden justify-end 2xl:col-span-5 2xl:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/app-mockup-no-bg.webp"
                alt="Hand holding phone with MICA app"
                width={550}
                height={1100}
                className="px-8"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button size="lg">
            <Link href="/product"> {t('cta')}</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

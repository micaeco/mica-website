'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, CircleAlert, TrendingUp } from 'lucide-react';

import IconCard from '@/src/components/ui/icon-card';
import Button from '@/src/components/ui/button';
import Link from 'next/link';

const benefits = [
  {
    icon: Droplet,
    title: "Descobrir on gastes l'aigua",
    description:
      "Podràs veure el consum d'aigua en temps real i històric, així com identificar quins dispositius consumeixen més.",
  },
  {
    icon: CircleAlert,
    title: 'Detectar fugues',
    description:
      "MICA detecta fàcilment les fugues d'aigua i et notifica amb una alerta per tal d'evitar danys importants.",
  },
  {
    icon: TrendingUp,
    title: 'Rebre recomanacions',
    description: 'Rebràs recomanacions específiques al teu consum per estalviar aigua i diners.',
  },
];

export default function Solution() {
  return (
    <div className="bg-gradient-to-b from-secondary to-secondary-50 px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12">
          <div className="col-span-12 2xl:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 font-bold"
            >
              Què podràs fer amb MICA?
            </motion.h2>

            <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {benefits.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <IconCard icon={card.icon} title={card.title} description={card.description} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="col-span-0 flex justify-end 2xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/app-mockup-no-bg-2.png"
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
          <Link href="/product">
            <Button> Descobreix com funciona </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

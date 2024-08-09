'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, AlertTriangle, TrendingUp } from 'lucide-react';

import CtaButton from '@/src/components/ui/CTAButton';
import IconCard from '@/src/components/ui/IconCard';

const benefits = [
  {
    icon: Droplet,
    title: "Veure on gastes l'aigua",
    description:
      "Podràs veure el consum d'aigua en temps real i històric, així com identificar quins dispositius consumeixen més.",
  },
  {
    icon: AlertTriangle,
    title: 'Detectar fugues',
    description:
      "MICA detecta fàcilment les fugues d'aigua i et notifica amb una alerta per tal d'evitar danys importants.",
  },
  {
    icon: TrendingUp,
    title: 'Rebre recomanacions de consum',
    description: 'Rebràs recomanacions específiques al teu consum per estalviar aigua i diners.',
  },
];

export default function Solution() {
  return (
    <div className="bg-tertiary py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2>Què podràs fer amb MICA...</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((card, index) => (
            <IconCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton text="Descobreix com funciona" href="/product" />
        </div>
      </div>
    </div>
  );
}

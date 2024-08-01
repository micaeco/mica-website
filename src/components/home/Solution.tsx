'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, AlertTriangle, TrendingUp } from 'lucide-react';

import CtaButton from '@/src/components/ui/CTAButton';
import IconCard from '@/src/components/ui/IconCard';

const BenefitCards = [
  {
    icon: Droplet,
    title: "Veure on gastes l'aigua",
    description: "Podràs veure el consum diari, setmanal i mensual, així com saber quins aparells són els que més consumeixen."
  },
  {
    icon: AlertTriangle,
    title: "Detectar fugues",
    description: "MICA detecta fàcilment les fugues d'aigua i t'alerta per evitar danys importants."
  },
  {
    icon: TrendingUp,
    title: "Rebre recomanacions de consum",
    description: "Rebràs recomanacions específiques al teu consum per estalviar aigua i diners."
  },
];

const Solution = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="my-12">
            Què podràs fer amb MICA...
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {BenefitCards.map((card, index) => (
            <IconCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton 
            text="Descobreix com funciona" 
            href="/product" />
        </div>
      </div>
    </div>
  );
};

export default Solution;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, AlertTriangle, TrendingUp } from 'lucide-react';

import CtaButton from '@/components/ui/ctaButton';

type BenefitCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => (
  <motion.div 
    className="flex h-full flex-col items-center justify-between rounded-xl bg-white p-6 text-center shadow-lg transition-all duration-300"
    whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
  >
    <div className="mb-4 rounded-full bg-primary/10 p-4">
      <Icon className="size-10 text-primary" />
    </div>
    <h3 className="mb-3 text-2xl font-bold text-primary">{title}</h3>
    <p className="text-base text-gray-700">{description}</p>
  </motion.div>
);

const Solution = () => {
  return (
    <div className="bg-tertiary py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-extrabold sm:text-5xl">
            Que podràs fer amb Mica...
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <BenefitCard 
            icon={Droplet}
            title="Veure on gasto l'aigua"
            description="La nostra IA identifica l'aigua que es gasta en dutxes, rentavaixelles, rentadores i més."
          />
          <BenefitCard 
            icon={AlertTriangle}
            title="Detectar Fugues"
            description="Mica detecta fàcilment les fugues d'aigua i us alerta per evitar danys importants a la vostra llar."
          />
          <BenefitCard 
            icon={TrendingUp}
            title="Rebre Recomanacions"
            description="Rebre recomanacions personalitzades per estalviar aigua i diners."
          />
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
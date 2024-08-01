'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Users, Gift } from 'lucide-react';

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const BenefitCard = ({ icon: Icon, title, description }: Props) => (
  <div className="rounded-lg bg-white p-6 shadow-lg transition duration-300 hover:scale-105">
    <Icon className="mb-4 size-12 text-accent" />
    <h3 className="mb-2 text-xl font-bold text-primary">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const BetaBenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Tecnologia Pionera",
      description: "Sigues el primer en experimentar la innovació en estalvi d'aigua amb IA."
    },
    {
      icon: TrendingUp,
      title: "Estalvis Immediats",
      description: "Segueix el teu consum d'aigua des del primer dia."
    },
    {
      icon: Users,
      title: "Impacte Col·lectiu",
      description: "Forma part d'una comunitat compromesa amb la sostenibilitat."
    },
    {
      icon: Gift,
      title: "Recompenses Exclusives",
      description: "Accedeix a descomptes i avantatges únics per a Beta Testers."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h3 className="mb-10 text-center font-semibold text-primary">
          Descobreix les avantatges...
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BetaBenefitsSection;
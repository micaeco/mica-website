'use client';

import React, { useState } from 'react';

import ExpandableCard from '@/src/components/ui/expandableCard';
import CtaButton from '../ui/ctaButton';

const benefits = [
  {
    title: "Instal·lació sensor únic",
    description: "Instal·la i calibra un únic sensor en la tuberia d'entrada principal.",
    imageSrc: "/logos/water-meter.webp",
  },
  {
    title: "Consum per dispositiu",
    description: "La intel·ligència artificial s'encarrega d'analitzar les dades i categoritzar el consum en diferents events com dutxes, rentadores o aixetes. Això permet identificar quins dispositius consumeixen més aigua.",
    imageSrc: "/logos/kitchen-tap.webp",
  },
  {
    title: "Visualització de Dades",
    description: "Mitjançant l'app, podràs visualitzar les dades de consum d'aigua en temps real i històriques. A més a més, s'inclouen gràfiques i un anàlisi detallat dels hàbits de consum.",
    imageSrc: "/logos/data-analysis.webp",
  },
  {
    title: "Pla de Consum",
    description: "Basant-nos en l'anàlisi de les teves dades, generem recomanacions personalitzades per optimitzar el teu ús d'aigua. Això et permetrà estalviar aigua i diners.",
    imageSrc: "/logos/eco-friendly.webp",
  },
];

export default function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="mb-10 text-center font-bold md:text-4xl">
          Com funciona?
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative">
              <ExpandableCard
                title={benefit.title}
                description={benefit.description}
                imageSrc={benefit.imageSrc}
                isExpanded={expandedIndex === index}
                onToggle={() => toggleExpand(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
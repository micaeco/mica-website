'use client';

import React, { useState } from 'react';

import ExpandableCard from '@/components/ui/expandableCard';
import CtaButton from '../ui/ctaButton';

const steps = [
  {
    title: "Sensor únic d'entrada d'aigua",
    description: "Instal·la i calibra un únic sensor en la tuberia d'entrada principal.",
    imageSrc: "/images/water-meter.webp",
  },
  {
    title: "Consum per dispositiu",
    description: "La intel·ligència artificial s'encarrega d'analitzar les dades i categoritzar el consum en diferents events com dutxes, rentadores o aixetes. Això permet identificar quins dispositius consumeixen més aigua.",
    imageSrc: "/images/kitchen-tap.webp",
  },
  {
    title: "Visualització de Dades",
    description: "Mitjançant l'app, podràs visualitzar les dades de consum d'aigua en temps real i històriques. A més a més, s'inclueixen gràfiques i un anàlisi detallat dels hàbits de consum.",
    imageSrc: "/images/data-analysis.webp",
  },
  {
    title: "Pla de Consum Sostenible",
    description: "Basant-nos en l'anàlisi de les teves dades, generem recomanacions personalitzades per optimitzar el teu ús d'aigua. Això et permetrà estalviar aigua i diners.",
    imageSrc: "/images/eco-friendly.webp",
  },
];

export default function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index: number) => {
    if (index == expandedIndex) setExpandedIndex(-1);
    else setExpandedIndex(index);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Com funciona?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ExpandableCard
              key={index}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
              isExpanded={expandedIndex === index}
              noneExpanded={expandedIndex === -1}
              onToggle={() => toggleExpand(index)}
            />
          ))}
        </div>
        <div className="mt-20 flex justify-center">
          <CtaButton 
            text="En vull un!" 
            href="/beta" />
        </div>
      </div>
    </section>
  );
}
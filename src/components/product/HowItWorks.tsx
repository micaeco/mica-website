'use client';

import React, { useState } from 'react';

import ExpandableCard from '@/src/components/ui/ExpandableCard';

const benefits = [
  {
    title: 'Instal·lació del sensor',
    description:
      "Instal·la i calibra un únic sensor en la canonada d'entrada principal. Aquest sensor, alimentat per bateries de llarga duració, enviarà la informació detallada a una plataforma al núvol per poder ser analitzada.",
    imageSrc: '/icons/water-meter.webp',
  },
  {
    title: 'Consum per dispositiu',
    description:
      "La intel·ligència artificial s'encarrega d'analitzar les dades i categoritzar el consum en diferents events com dutxes, rentadores o aixetes. Això permet identificar quins dispositius consumeixen més aigua. També és capaç d'identificar fugues i generar recomanacions personalitzades al teu consum.",
    imageSrc: '/icons/kitchen-tap.webp',
  },
  {
    title: 'Visualització de dades',
    description:
      "A través del teu mòbil o des de la web, podràs visualitzar les dades de consum en temps real i històriques. A més a més, s'inclouen gràfiques i un anàlisi detallat dels hàbits de consum i comparatives amb perfils similars al teu.",
    imageSrc: '/icons/data-analysis.webp',
  },
  {
    title: 'Pla de consum',
    description:
      "Basant-nos en l'anàlisi de les teves dades, generem recomanacions personalitzades per optimitzar el teu ús d'aigua. Això et permetrà estalviar aigua i diners.",
    imageSrc: '/icons/eco-friendly.webp',
  },
];

export default function HowItWorks() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto">
        <h3 className="text-center font-bold">Com funciona?</h3>
        <p className="py-8 text-gray-500">
          El sensor MICA et permet seguir el consum d'aigua en temps real. El sensor envia les dades
          de consum a una plataforma al núvol que, impulsada per intel·ligència artificial,
          desglossa l'ús de l'aigua per dispositiu, detecta fugues i proporciona consells
          personalizats per ajudar-te a estalviar.
        </p>
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

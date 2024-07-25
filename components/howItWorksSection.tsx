'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Droplet, Cloud, BarChart3, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Droplet,
      resumedTitle: "Sensor únic",
      resumedDescription: "Instal·lació senzilla",
      title: "Sensor únic d'entrada d'aigua: Simplicitat i Precisió",
      description: "Instal·la i calibra un únic sensor en la tuberia d'entrada principal. D'aquesta manera, s'elimina la necessitat de múltiples sensors, simplificant la seva instal·lació i el posterior manteniment.",
      imageSrc: "/images/water-meter.webp",
    },
    {
      icon: Cloud,
      resumedTitle: "Anàlisi",
      resumedDescription: "Mitjançant IA",
      title: "Consum Individual per Dispositiu amb Intel·ligència Artificial",
      description: "La intel·ligència artificial s'encarrega d'analitzar les dades i categoritzar el consum en diferents events com dutxes, rentadores o aixetes. Això permet identificar quins dispositius consumeixen més aigua.",
      imageSrc: "/images/kitchen-tap.webp",
    },
    {
      icon: BarChart3,
      resumedTitle: "Visualització",
      resumedDescription: "Dades clares",
      title: "Visualització de Dades: Comprensió Clara del Teu Consum",
      description: "Mitjançant l'app, l'usuari pot visualitzar les dades de consum d'aigua en temps real i històriques. A més a més, s'inclueixen gràfiques i un anàlisi detallat dels hàbits de consum.",
      imageSrc: "/images/data-analysis.webp",
    },
    {
      icon: Leaf,
      resumedTitle: "Pla sostenible",
      resumedDescription: "Estalvi personalitzat",
      title: "Pla de Consum Sostenible: Optimització Personalitzada",
      description: "Basant-nos en l'anàlisi de les teves dades, generem recomanacions personalitzades per optimitzar el teu ús d'aigua. Això et permetrà estalviar aigua i diners.",
      imageSrc: "/images/eco-friendly.webp",
    },
  ];

  return (
    <section className="w-full snap-start py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Com funciona</h2>
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
          <div className="lg:w-2/5">
            <motion.div
              className="bg-tertiary-500 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center mb-4 cursor-pointer transition-all duration-300 ${
                    activeStep === index ? 'bg-white rounded-lg p-3 shadow' : 'opacity-80'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`rounded-full p-2 mr-3 ${activeStep === index ? 'bg-tertiary-300' : 'bg-white'}`}>
                    <step.icon size={20} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold">{step.resumedTitle}</h3>
                    <p className="text-xs">{step.resumedDescription}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="lg:w-3/5 mt-8 lg:mt-0">
            <motion.div
              className="bg-white rounded-lg p-8 shadow-xl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative h-64 w-full bg-tertiary-100 rounded-lg overflow-hidden mb-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: activeStep === index ? 1 : 0,
                      scale: activeStep === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={step.imageSrc} 
                      alt={step.title} 
                      layout="fill" 
                      objectFit="contain"
                      className="p-4"
                    />
                  </motion.div>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{steps[activeStep].title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{steps[activeStep].description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
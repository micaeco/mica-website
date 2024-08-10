// components/Hero.tsx
'use client';

import React from 'react';
import Video from '@/src/components/ui/Video';

export default function Hero() {
  const subtitles = [
    { src: '/locales/ca/subtitles.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/locales/es/subtitles.vtt', srcLang: 'es', label: 'Español' },
    { src: '/locales/en/subtitles.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-8 pb-4 pt-20">
      <div className="mb-16 w-full max-w-4xl text-center">
        <h1 className="mb-6 font-bold leading-tight text-primary">
          La nova manera <br />
          d&apos;estalviar aigua.
        </h1>
        <p className="mx-auto max-w-2xl text-gray-500">
          Estem desenvolupant un sensor innovador al que hem anomenat MICA. <br /> Amb MICA pots
          seguir el teu consum d&apos;aigua, detectar fugues i rebre recomanacions personalitzades
          per estalviar aigua.
        </p>
        <br />
        <p className="mb-8 italic text-gray-500">
          Amb el suport de la fundació <span className="font-bold">bit</span>habitat de l'ajuntament
          de Barcelona
        </p>

        <div className="mx-auto max-w-3xl">
          <Video
            src="/videos/mica.mp4"
            subtitles={subtitles}
            defaultSubtitle="ca"
            autoPlayWhenVisible
          />
        </div>
      </div>
    </section>
  );
}

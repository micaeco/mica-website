// components/Hero.tsx
'use client';

import React from 'react';
import Video from '@/src/components/ui/video';

export default function Hero() {
  const subtitles = [
    { src: '/locales/ca/subtitles.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/locales/es/subtitles.vtt', srcLang: 'es', label: 'Español' },
    { src: '/locales/en/subtitles.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-8 pb-4 pt-20">
      <div className="mb-16 grid w-full max-w-7xl items-center gap-16 text-center 2xl:grid-cols-8 2xl:text-left">
        <div className="2xl:col-span-3">
          <h1 className="mb-6 font-bold leading-tight text-primary">
            La nova manera <br />
            d&apos;estalviar aigua.
          </h1>
          <p className="font-light">
            Estem desenvolupant un sensor innovador al que hem anomenat MICA. <br /> Amb MICA pots
            seguir el teu consum d&apos;aigua, detectar fugues i rebre recomanacions personalitzades
            per estalviar aigua.
          </p>
          <br />
          <p className="text-sm font-light italic">
            Amb el suport de la fundació BITHabitat de l'Ajuntament de Barcelona
          </p>
        </div>

        <div className="2xl:col-span-5">
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

'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-8 pt-20 pb-4">
      <div className="mb-16 w-full max-w-4xl text-center">
        <h1 className="mb-6 font-bold leading-tight text-primary">
          La nova manera <br />
          d&apos;estalviar aigua.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          Estem desenvolupant un sensor innovador al que hem anomenat MICA. <br /> Amb MICA pots
          seguir el teu consum d&apos;aigua, detectar fugues i rebre recomanacions personalitzades
          per estalviar aigua.
        </p>

        <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gray-100 rounded-lg">
          <video
            className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-xl"
            controls
            poster="/logos/full-logo.svg"
          >
            <source src="/videos/mica.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

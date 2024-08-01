'use client';

import React from 'react';

import CtaButton from '@/src/components/ui/CTAButton';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-6 py-28">
      <div className="mb-16 w-full max-w-4xl text-center">
        <h1 className="mb-6 font-bold leading-tight text-primary">
          La nova manera <br/>
          d&apos;estalviar aigua.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 sm:text-xl">
          Amb MICA pots seguir el teu consum d&apos;aigua, detectar fugues i rebre recomanacions personalitzades per estalviar aigua.
        </p>
        
        <CtaButton text="Com funciona" href="/product" showArrow={false} variant='transparent'/>  
        <CtaButton text="Compra el sensor" href="/beta" />
      </div>
    </section>
  );
}
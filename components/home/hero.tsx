'use client';

import React from 'react';

import CtaButton from '@/components/ui/ctaButton';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-6 py-44">
      <div className="mb-16 w-full max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Mica és la nova manera <br className="hidden sm:inline" />
          d&apos;estalviar aigua.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary/80 sm:text-xl">
          Rep recomanacions personalitzades per a l&apos;estalvi d&apos;aigua
          a casa i fes un seguiment precís del teu consum.
        </p>
        <CtaButton text="Uneix-te a la beta" href="/beta" />
      </div>
    </section>
  );
}
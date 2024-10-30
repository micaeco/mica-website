import React from 'react';

import Hero from '@/app/[locale]/(routes)/components/hero';
import Problem from '@/app/[locale]/(routes)/components/problem';
import Solution from '@/app/[locale]/(routes)/components/solution';
import WaveSeparator from '@/components/wave-separator';
import Testimonials from '@/app/[locale]/(routes)/components/testimonials';

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-brand-primary">
      <Hero />
      <WaveSeparator topColor="white" bottomColor="#00f2dd " />
      <Solution />
      <WaveSeparator topColor="brand-tertiary" bottomColor="#ffffff" />
      <Problem />
      <Testimonials />
      <div className="bg"></div>
    </main>
  );
}

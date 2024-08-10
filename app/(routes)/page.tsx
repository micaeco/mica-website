import React from 'react';

import Hero from '@/src/components/home/Hero';
import Problem from '@/src/components/home/Problem';
import Solution from '@/src/components/home/Solution';
import WaveSeparator from '@/src/components/common/WaveSeparator';
import Testimonials from '@/src/components/home/Testimonials';

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-primary">
      <Hero />
      <WaveSeparator topColor="white" bottomColor="#f3f4f6" />
      <Problem />
      <WaveSeparator topColor="gray-100" bottomColor="#00f2dd " />
      <Solution />
      <Testimonials />
    </main>
  );
}

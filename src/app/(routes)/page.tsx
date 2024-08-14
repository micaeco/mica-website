import React from 'react';

import Hero from '@/src/components/sections/home/Hero';
import Problem from '@/src/components/sections/home/Problem';
import Solution from '@/src/components/sections/home/Solution';
import WaveSeparator from '@/src/components/sections/common/WaveSeparator';
import Testimonials from '@/src/components/sections/home/Testimonials';

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

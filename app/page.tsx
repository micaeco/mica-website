import React from 'react';

import Hero from '@/src/components/home/Hero';
import Problem from '@/src/components/home/Problem';
import Solution from '@/src/components/home/Solution';
import WaveSeparator from '@/src/components/common/WaveSeparator';

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-primary">
      <Hero />
      <WaveSeparator topColor="white" bottomColor="#d5fff3" />
      <Problem />
      <Solution />
    </main>
  );
}

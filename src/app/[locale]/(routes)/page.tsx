import React from 'react';
import { Metadata } from 'next';
import { getMessages } from 'next-intl/server';

import Hero from './components/hero';
import Problem from './components/problem';
import Solution from './components/solution';
import Testimonials from './components/testimonials';
import WaveSeparator from '@/components/wave-separator';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const home = messages.home as { title: string; description: string };

  return {
    title: home.title,
    description: home.description,
  };
}

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-brand-primary">
      <Hero />
      <WaveSeparator topColor="white" bottomColor="#00f2dd" />
      <Solution />
      <WaveSeparator topColor="brand-tertiary" bottomColor="#ffffff" />
      <Problem />
      <Testimonials />
      <div className="bg"></div>
    </main>
  );
}

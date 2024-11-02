import React from 'react';
import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';

import Hero from './components/hero';
import Benefits from './components/benefits';
import Process from './components/process';
import CallToAction from './components/call-to-action';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const beta = messages.beta as { title: string; description: string };

  return {
    title: beta.title,
    description: beta.description,
  };
}

export default function Beta() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Process />
      <CallToAction />
    </main>
  );
}

import React from 'react';
import Hero from '@/components/sections/beta/hero';
import Benefits from '@/components/sections/beta/benefits';
import Process from '@/components/sections/beta/process';
import CallToAction from '@/components/sections/beta/call-to-action';

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

import React from 'react';

import Hero from '@/components/heroSection';
import HowItWorks from '@/components/howItWorksSection';
import WaveSeparator from '@/components/waveSeparator';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center text-primary">      
      <Hero />
      <WaveSeparator topColor="#f9fafb" bottomColor="tertiary-500" />
      <HowItWorks />
    </main>
  );
};

export default Home;
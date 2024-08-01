import React from 'react';

import Hero from '@/src/components/home/hero';
import Problem from '@/src/components/home/problem';
import Solution from '@/src/components/home/solution';
import TestimonialCarousel from '@/src/components/home/testimonials';
import WaveSeparator from '@/src/components/common/waveSeparator';

const Home = () => {
  return (
    <main className="flex flex-col justify-center text-primary">      
      <Hero />
      <WaveSeparator topColor="white" bottomColor="#d5fff3" />
      <Problem />
      <Solution />
      <WaveSeparator topColor="gray-100" bottomColor="#00f2dd" />
      <TestimonialCarousel />
    </main>
  );
};

export default Home;
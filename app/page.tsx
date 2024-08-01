import React from 'react';

import Hero from '@/components/home/hero';
import Problem from '@/components/home/problem';
import Solution from '@/components/home/solution';
import TestimonialCarousel from '@/components/home/testimonials';
import WaveSeparator from '@/components/common/waveSeparator';

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
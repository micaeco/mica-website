import React from 'react';

import Hero from '@/src/components/home/Hero';
import Problem from '@/src/components/home/Problem';
import Solution from '@/src/components/home/Solution';
import TestimonialCarousel from '@/src/components/home/Testimonials';
import WaveSeparator from '@/src/components/common/WaveSeparator';

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
import React from 'react';

import Hero from '@/components/sections/home/hero';
import Problem from '@/components/sections/home/problem';
import Solution from '@/components/sections/home/solution';
import WaveSeparator from '@/components/sections/common/wave-separator';
import Testimonials from '@/components/sections/home/testimonials';
import Video from '@/components/ui/video';

export default function Home() {
  const subtitles = [
    { src: '/locales/ca/subtitles.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/locales/es/subtitles.vtt', srcLang: 'es', label: 'Español' },
    { src: '/locales/en/subtitles.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <main className="flex flex-col justify-center text-primary">
      <Hero />
      <div className="mt-28 flex justify-center px-8 pb-20">
        <Video
          src="/videos/mica.mp4"
          subtitles={subtitles}
          autoPlayWhenVisible
          className="max-w-5xl"
        />
      </div>
      <WaveSeparator topColor="white" bottomColor="#00f2dd " />
      <Solution />
      <WaveSeparator topColor="tertiary" bottomColor="#ffffff" />
      <Problem />
      <Testimonials />
      <div className="bg"></div>
    </main>
  );
}

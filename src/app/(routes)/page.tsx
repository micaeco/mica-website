import React from 'react';

import Hero from '@/src/components/sections/home/hero';
import Problem from '@/src/components/sections/home/problem';
import Solution from '@/src/components/sections/home/solution';
import WaveSeparator from '@/src/components/sections/common/wave-separator';
import Testimonials from '@/src/components/sections/home/testimonials';
import Video from '@/src/components/ui/video';

export default function Home() {
  const subtitles = [
    { src: '/locales/ca/subtitles.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/locales/es/subtitles.vtt', srcLang: 'es', label: 'Español' },
    { src: '/locales/en/subtitles.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <main className="flex flex-col justify-center text-primary">
      <Hero />
      <WaveSeparator topColor="white" bottomColor="#f3f4f6" />
      <Problem />
      <div className="flex justify-center bg-gray-100 px-8 pb-20">
        <Video
          src="/videos/mica.mp4"
          subtitles={subtitles}
          autoPlayWhenVisible
          className="max-w-5xl"
        />
      </div>
      <WaveSeparator topColor="gray-100" bottomColor="#00f2dd " />
      <Solution />
      <Testimonials />
    </main>
  );
}

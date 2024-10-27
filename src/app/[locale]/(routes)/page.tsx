import React from 'react';

import Hero from '@/app/[locale]/(routes)/components/hero';
import Problem from '@/app/[locale]/(routes)/components/problem';
import Solution from '@/app/[locale]/(routes)/components/solution';
import WaveSeparator from '@/components/wave-separator';
import Testimonials from '@/app/[locale]/(routes)/components/testimonials';
import Video from '@/components/ui/video';

export default function Home() {
  const subtitles = [
    { src: '/locales/ca/subtitles.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/locales/es/subtitles.vtt', srcLang: 'es', label: 'Español' },
    { src: '/locales/en/subtitles.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <main className="text-brand-primary flex flex-col justify-center">
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
      <WaveSeparator topColor="brand-tertiary" bottomColor="#ffffff" />
      <Problem />
      <Testimonials />
      <div className="bg"></div>
    </main>
  );
}

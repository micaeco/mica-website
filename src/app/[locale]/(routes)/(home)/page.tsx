import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Hero from "./_components/hero";
import Partners from "./_components/partners";
import Problem from "./_components/problem";
import Solution from "./_components/solution";
import Testimonials from "./_components/testimonials";
import Video from "./_components/video";
import WaveSeparator from "@/components/wave-separator";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const home = await getTranslations({ locale, namespace: "home" });

  return {
    title: home("title"),
    description: home("description"),
  };
}

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[calc(100vh-64px)] flex-col">
        <Hero className="flex-grow" />
        <Partners />
      </div>
      <Video />
      <WaveSeparator bgColor="bg-white" waveColor="text-brand-secondary" />
      <Solution />
      <WaveSeparator bgColor="bg-brand-tertiary" waveColor="text-white" />
      <Problem />
      <Testimonials />
    </main>
  );
}

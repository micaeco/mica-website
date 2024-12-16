import React from "react";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";

import Hero from "./_components/hero";
import Benefits from "./_components/benefits";
import Process from "./_components/process";
import CallToAction from "./_components/call-to-action";

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

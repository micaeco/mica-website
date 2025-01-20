import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import OurTeam from "./_components/our-team";
import History from "./_components/history";
import Timeline from "./_components/timeline";
import WaveSeparator from "@/components/wave-separator";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const about = await getTranslations({ locale, namespace: "about" });

  return {
    title: about("title"),
    description: about("description"),
  };
}

export default function About() {
  return (
    <main>
      <History />
      <WaveSeparator bgColor="bg-white" waveColor="text-brand-tertiary" />
      <Timeline />
      <WaveSeparator bgColor="bg-brand-tertiary" waveColor="text-white" />
      <OurTeam />
    </main>
  );
}

import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';

import OurTeam from './components/our-team';
import History from './components/history';
import Timeline from './components/timeline';
import WaveSeparator from '@/components/wave-separator';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const navLinks = messages.navLinks as { about: string };

  return {
    title: navLinks.about,
  };
}

export default function About() {
  return (
    <main>
      <History />
      <Timeline />
      <WaveSeparator topColor="white" bottomColor="#d5fff3" />
      <OurTeam />
    </main>
  );
}

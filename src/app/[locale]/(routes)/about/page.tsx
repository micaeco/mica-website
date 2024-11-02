import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';

import OurTeam from './components/our-team';
import History from './components/history';
import Timeline from './components/timeline';
import WaveSeparator from '@/components/wave-separator';

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();
  const about = messages.about as { title: string; description: string };

  return {
    title: about.title,
    description: about.description,
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

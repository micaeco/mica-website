import OurTeam from './components/our-team';
import History from './components/history';
import Timeline from './components/timeline';
import WaveSeparator from '@/components/wave-separator';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center">
      <History />
      <Timeline />
      <WaveSeparator topColor="white" bottomColor="#d5fff3" />
      <OurTeam />
    </main>
  );
}

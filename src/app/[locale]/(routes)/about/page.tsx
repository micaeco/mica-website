import OurTeam from '@/components/sections/about/our-team';
import History from '@/components/sections/about/history';
import WaveSeparator from '@/components/sections/common/wave-separator';
import Timeline from '@/components/sections/about/timeline';

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

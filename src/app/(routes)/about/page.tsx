import OurTeam from '@/src/components/sections/about/our-team';
import History from '@/src/components/sections/about/history';
import WaveSeparator from '@/src/components/sections/common/wave-separator';
import Timeline from '@/src/components/sections/about/timeline';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center text-primary">
      <History />
      <Timeline />
      <WaveSeparator topColor="white" bottomColor="#d5fff3" />
      <OurTeam />
    </main>
  );
}

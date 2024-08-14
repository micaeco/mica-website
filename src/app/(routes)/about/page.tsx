import OurTeam from '@/src/components/sections/about/OurTeam';
import History from '@/src/components/sections/about/History';
import WaveSeparator from '@/src/components/sections/common/WaveSeparator';
import Timeline from '@/src/components/sections/about/Timeline';

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

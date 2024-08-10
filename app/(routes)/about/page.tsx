import OurTeam from '@/src/components/about/OurTeam';
import History from '@/src/components/about/History';
import WaveSeparator from '@/src/components/common/WaveSeparator';

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center text-primary">
      <History />
      <WaveSeparator topColor="white" bottomColor="#d5fff3" />
      <OurTeam />
    </main>
  );
}

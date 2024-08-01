import OurTeam from '@/src/components/about/ourTeam'
import History from '@/src/components/about/history'
import WaveSeparator from '@/src/components/common/waveSeparator'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 text-primary">
      <History />
      <WaveSeparator topColor="tertiary" bottomColor="#f9fafb" />
      <OurTeam />
    </main>
  )
}
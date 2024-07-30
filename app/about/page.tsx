import OurTeam from '@/components/about/ourTeam'
import History from '@/components/about/history'
import WaveSeparator from '@/components/common/waveSeparator'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 text-primary">
      <History />
      <WaveSeparator topColor="tertiary" bottomColor="#f9fafb" />
      <OurTeam />
    </main>
  )
}
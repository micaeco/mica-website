import OurTeam from '@/components/ourTeamSection'
import History from '@/components/historySection'
import WaveSeparator from '@/components/waveSeparator'

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-50 text-primary">
      <History />
      <WaveSeparator topColor="#f9fafb" bottomColor="tertiary-500" />
      <OurTeam />
    </main>
  )
}
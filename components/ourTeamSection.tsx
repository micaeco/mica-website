import TeamMemberCard from '@/components/teamMemberCard'
import { TeamMember } from '@/types/types'

const teamMembers: TeamMember[] = [
  {
    src: "/images/jaime.webp",
    name: "Jaime Escobar",
    description: "Enginyer Industrial",
    socials: [
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/jaime-escobar-8949a71/' },
    ],
  },
  {
    src: "/images/miki.webp",
    name: "Miquel Escobar",
    description: "Enginyer de Dades",
    socials: [
      { platform: 'linkedin', url: 'https://es.linkedin.com/in/miquel-escobar-castells' },
      { platform: 'github', url: 'https://github.com/miquelescobar' },
    ],
  },
  {
    src: "",
    name: "Lucia Chacón",
    description: "Enginyera Electrónica",
    socials: [
    ],
  },
  {
    src: "/images/marta.webp",
    name: "Marta Castells",
    description: "Enginyera de Disseny Industrial",
    socials: [
    ],
  },
];

export default function OurTeam() {
  return (
    <section className="py-16 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">El nostre equip</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
import TeamMemberCard from '@/src/components/ui/TeamMemberCard'
import { ITeamMember } from '@/src/types'

const teamMembers: ITeamMember[] = [
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
      { platform: 'github', url: 'https://github.com/LUciaChHcon' },
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
    <section className="mb-12 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">El nostre equip</h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
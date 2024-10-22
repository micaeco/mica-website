import React from 'react';
import TeamMemberCard from '@/src/components/ui/team-member-card';

import { ITeamMember } from '@/src/types/team';

const teamMembers: ITeamMember[] = [
  {
    src: '/images/jaime.webp',
    name: 'Jaime',
    role: 'Direcció i operacions',
    studies: 'Enginyer industrial, MBA',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/jaime-escobar-8949a71/',
      },
    ],
  },
  {
    src: '/images/miki.webp',
    name: 'Miquel',
    role: 'Responsable de dades i IA',
    studies: 'Enginyer de dades',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://es.linkedin.com/in/miquel-escobar-castells',
      },
      { platform: 'github', url: 'https://github.com/miquelescobar' },
    ],
  },
  {
    src: '/images/lucia.webp',
    name: 'Lucía',
    role: 'Responsable de hardware',
    studies: 'Enginyera electrònica',
    socials: [{ platform: 'github', url: 'https://github.com/LUciaChHcon' }],
  },
  {
    src: '/images/marta.webp',
    name: 'Marta',
    role: 'Disseny del producte',
    studies: 'Enginyera de disseny industrial',
    socials: [],
  },
  {
    src: '/images/irene.webp',
    name: 'Irene',
    role: 'Comunicació i marketing',
    studies: 'Física, formadora en tecnologia',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://uk.linkedin.com/in/irene-escobar-castells',
      },
      {
        platform: 'github',
        url: 'https://github.com/ireescobar',
      },
    ],
  },
  {
    src: '/images/gabi.webp',
    name: 'Gabriel',
    role: 'Desenvolupament de software',
    studies: 'Enginyer informàtic',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/gabriel-escobar-castells-8b4248268/',
      },
      {
        platform: 'github',
        url: 'https://github.com/GabrielEscobar04',
      },
    ],
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-tertiary px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-left font-bold">El nostre equip.</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

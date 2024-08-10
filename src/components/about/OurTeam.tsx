import React from 'react';
import TeamMemberCard from '@/src/components/ui/TeamMemberCard';
import { ITeamMember } from '@/src/types';

const teamMembers: ITeamMember[] = [
  {
    src: '/images/jaime.webp',
    name: 'Jaime Escobar',
    description: 'Enginyer industrial, MBA',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/jaime-escobar-8949a71/',
      },
    ],
  },
  {
    src: '/images/miki.webp',
    name: 'Miquel Escobar',
    description: 'Enginyer de dades',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://es.linkedin.com/in/miquel-escobar-castells',
      },
      { platform: 'github', url: 'https://github.com/miquelescobar' },
    ],
  },
  {
    src: '',
    name: 'Lucía Chacón',
    description: 'Enginyera electrònica',
    socials: [{ platform: 'github', url: 'https://github.com/LUciaChHcon' }],
  },
  {
    src: '/images/marta.webp',
    name: 'Marta Castells',
    description: 'Enginyera de disseny industrial',
    socials: [],
  },
  {
    src: '/images/irene.webp',
    name: 'Irene Escobar',
    description: 'Marketing i comunicació',
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
    src: '',
    name: 'Gabriel Escobar',
    description: 'Enginyer informàtic',
    socials: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/gabriel-escobar-8949a71/',
      },
    ],
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-tertiary py-16">
      <div className="container mx-auto px-4">
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

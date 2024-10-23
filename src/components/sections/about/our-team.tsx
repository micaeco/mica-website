import React from 'react';
import TeamMemberCard from '@/components/ui/team-member-card';

import { useTranslations } from 'next-intl';
import { getTeamMembers } from '@/lib/constants';

export default function OurTeam() {
  const t = useTranslations('our-team');
  const tMembers = useTranslations('our-team.members');

  const teamMembers = getTeamMembers(tMembers);

  return (
    <section className="w-full bg-tertiary px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-left font-bold">{t('title')}</h2>
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

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getTeamMembers } from '@/lib/constants';

export default function OurTeam() {
  const t = useTranslations('about.history');
  const tMembers = useTranslations('about.our-team.members');

  const teamMembers = getTeamMembers(tMembers);

  return (
    <section className="w-full bg-brand-tertiary px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-left font-bold">{t('title')}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <Card className="h-full shadow-sm transition-shadow hover:shadow-lg">
                <Image
                  src={member.src}
                  alt={`${member.name}'s profile picture`}
                  width={1000}
                  height={1000}
                  className="overflow-hidden rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>
                    <span className="italic">{member.studies}</span>
                    <br />
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  {member.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      aria-label={`${member.name}'s ${social.platform}`}
                    >
                      <Image
                        src={`/icons/${social.platform}-icon.svg`}
                        alt={social.platform}
                        width={20}
                        height={20}
                      />
                    </a>
                  ))}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

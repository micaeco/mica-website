import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getTeamMembers } from '@/lib/constants';
import Link from 'next/link';

export default function OurTeam() {
  const t = useTranslations('about.our-team');
  const tMembers = useTranslations('about.our-team.members');

  const teamMembers = getTeamMembers(tMembers);

  return (
    <section className="w-full bg-white px-8 py-16">
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
                <CardFooter className="space-x-2">
                  {member.socials.map(({ platform, url }, index) => (
                    <Link key={index} href={url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={`/icons/${platform}-icon.svg`}
                        alt={`${platform} icon`}
                        width={15}
                        height={15}
                        className="opacity-50 transition-opacity hover:opacity-100"
                      />
                      <span className="sr-only">MICA on {platform}</span>
                    </Link>
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

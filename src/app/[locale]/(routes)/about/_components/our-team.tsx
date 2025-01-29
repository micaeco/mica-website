"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SocialLink {
  platform: "linkedin" | "github";
  url: string;
}

interface MemberProps {
  name: string;
  src: string;
  role: string;
  studies: string;
  socials: SocialLink[];
}

function SocialLinks({ socials }: { socials: SocialLink[] }) {
  if (socials.length === 0) return null;

  return (
    <CardFooter className="space-x-2">
      {socials[0] && (
        <Link href={socials[0].url} target="_blank" rel="noopener noreferrer">
          <Image
            src={`/icons/${socials[0].platform}.webp`}
            alt={`${socials[0].platform} icon`}
            width={15}
            height={15}
            className="opacity-50 transition-opacity hover:opacity-100"
          />
          <span className="sr-only">Profile on {socials[0].platform}</span>
        </Link>
      )}
      {socials[1] && (
        <Link href={socials[1].url} target="_blank" rel="noopener noreferrer">
          <Image
            src={`/icons/${socials[1].platform}.webp`}
            alt={`${socials[1].platform} icon`}
            width={15}
            height={15}
            className="opacity-50 transition-opacity hover:opacity-100"
          />
          <span className="sr-only">Profile on {socials[1].platform}</span>
        </Link>
      )}
    </CardFooter>
  );
}

function TeamMember({ name, src, role, studies, socials }: MemberProps) {
  return (
    <div className="w-full max-w-xs sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
      <Card className="h-full shadow-sm transition-shadow hover:shadow-lg">
        <Image
          src={src}
          alt={`${name}'s profile picture`}
          width={1000}
          height={1000}
          className="overflow-hidden rounded-t-lg"
        />
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            <span className="italic">{studies}</span>
            <br />
            {role}
          </CardDescription>
        </CardHeader>
        <SocialLinks socials={socials} />
      </Card>
    </div>
  );
}

export default function OurTeam() {
  const t = useTranslations("about.our-team");
  const members = useTranslations("about.our-team.members");

  return (
    <section className="w-full bg-white px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-left font-bold">{t("title")}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <TeamMember
            name="Jaime"
            src="/images/jaime.webp"
            role={members("jaime.role")}
            studies={members("jaime.studies")}
            socials={[
              { platform: "linkedin", url: "https://www.linkedin.com/in/jaime-escobar-8949a71/" },
            ]}
          />

          <TeamMember
            name="Miquel"
            src="/images/miquel.webp"
            role={members("miquel.role")}
            studies={members("miquel.studies")}
            socials={[
              { platform: "linkedin", url: "https://es.linkedin.com/in/miquel-escobar-castells" },
              { platform: "github", url: "https://github.com/miquelescobar" },
            ]}
          />

          <TeamMember
            name="Lucía"
            src="/images/lucia.webp"
            role={members("lucia.role")}
            studies={members("lucia.studies")}
            socials={[{ platform: "github", url: "https://github.com/LUciaChHcon" }]}
          />

          <TeamMember
            name="Marta"
            src="/images/marta.webp"
            role={members("marta.role")}
            studies={members("marta.studies")}
            socials={[]}
          />

          <TeamMember
            name="Irene"
            src="/images/irene.webp"
            role={members("irene.role")}
            studies={members("irene.studies")}
            socials={[
              { platform: "linkedin", url: "https://uk.linkedin.com/in/irene-escobar-castells" },
              { platform: "github", url: "https://github.com/ireescobar" },
            ]}
          />

          <TeamMember
            name="Gabriel"
            src="/images/gabi.webp"
            role={members("gabriel.role")}
            studies={members("gabriel.studies")}
            socials={[
              {
                platform: "linkedin",
                url: "https://www.linkedin.com/in/gabriel-escobar-castells-8b4248268/",
              },
              { platform: "github", url: "https://github.com/GabrielEscobar04" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Partners({ className }: { className?: string }) {
  const partners = [
    {
      name: "BitHabitat",
      link: "https://bithabitat.barcelona/",
      logo: "/logos/barcelona-innova.webp",
    },
    {
      name: "Ajuntament de Barcelona",
      link: "https://ajuntament.barcelona.cat/",
      logo: "/logos/ajuntament.webp",
    },
    {
      name: "Fundesplai",
      link: "https://fundesplai.org",
      logo: "/logos/fundesplai.webp",
    },
  ];

  const common = useTranslations("common");

  return (
    <section
      className={cn(
        className,
        "bg-gradient-to-r from-brand-quaternary to-brand-secondary px-4 py-8"
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
          <h5 className="whitespace-nowrap italic">{common("partners")}:</h5>
          <Separator
            orientation="vertical"
            className="mx-8 hidden h-8 bg-muted-foreground lg:block"
          />
          <Separator
            orientation="horizontal"
            className="my-4 block w-20 bg-brand-primary lg:hidden"
          />
          <div className="grid grid-cols-3 gap-2">
            {partners.map((partner, index) => (
              <Link
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={180}
                  height={100}
                  className="px-2 opacity-70 transition-opacity hover:opacity-100 lg:px-4"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

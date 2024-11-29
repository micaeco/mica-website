import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';

export default function Partners() {
  const partners = [
    {
      name: 'BitHabitat',
      link: 'https://bithabitat.barcelona/',
      logo: '/logos/bithabitat.webp',
    },
    {
      name: 'Ajuntament de Barcelona',
      link: 'https://ajuntament.barcelona.cat/',
      logo: '/logos/ajuntament.webp',
    },
    {
      name: 'Universidad de Málaga',
      link: 'https://www.uma.es/',
      logo: '/logos/uma.webp',
    },
    {
      name: 'Fundesplai',
      link: 'https://fundesplai.org',
      logo: '/logos/fundesplai.webp',
    },
  ];

  const common = useTranslations('common');

  return (
    <section className="bg-white px-8 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
          <h5 className="whitespace-nowrap font-light capitalize italic">{common('partners')}</h5>
          <Separator
            orientation="vertical"
            className="mx-8 hidden h-8 text-muted-foreground lg:block"
          />
          <Separator
            orientation="horizontal"
            className="my-4 block w-20 text-muted-foreground lg:hidden"
          />
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
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
                  width={200}
                  height={500}
                  className="opacity-70 transition-opacity hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

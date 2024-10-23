import Image from 'next/image';
import { GiCargoCrane } from 'react-icons/gi';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('beta.hero');

  return (
    <section className="bg-primary py-12 text-white">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:justify-between">
          <div className="max-w-xl text-center 2xl:text-left">
            <GiCargoCrane className="mx-auto mb-6 size-16 text-accent 2xl:mx-0" />
            <h3 className="font-bold">{t('title')}</h3>
            <p className="mb-6 text-gray-300">{t('text')}</p>
          </div>
          <div className="mt-8 2xl:mt-0">
            <Image
              src="/images/design-process.png"
              alt="MICA Sensor Sketch"
              width={850}
              height={850}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

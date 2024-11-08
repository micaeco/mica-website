import Image from 'next/image';
import { GiCargoCrane } from 'react-icons/gi';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('beta.hero');

  return (
    <section className="bg-white py-8 text-primary">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="flex flex-col items-center 2xl:flex-row 2xl:justify-between">
          <div className="max-w-xl space-y-4 text-center 2xl:text-left">
            <GiCargoCrane className="mx-auto size-16 text-brand-accent 2xl:mx-0" />
            <h3 className="font-bold">{t('title')}</h3>
            <p className="font-light">{t('text')}</p>
          </div>
          <Image
            src="/images/design-process.png"
            alt="MICA Sensor Sketch"
            width={850}
            height={850}
          />
        </div>
      </div>
    </section>
  );
}

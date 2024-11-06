import Video from '@/components/ui/video';
import { useTranslations } from 'next-intl';

export default function VideoSection() {
  const t = useTranslations('home.video');

  const subtitles = [
    { src: '/subtitles/ca.vtt', srcLang: 'ca', label: 'Català' },
    { src: '/subtitles/es.vtt', srcLang: 'es', label: 'Español' },
    { src: '/subtitles/en.vtt', srcLang: 'en', label: 'English' },
  ];

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 2xl:max-w-6xl 2xl:grid-cols-12">
        <Video
          src="/videos/mica-2.mp4"
          subtitles={subtitles}
          autoPlayWhenVisible
          className="2xl:col-span-8 2xl:mr-12"
        />
        <div className="text-pretty 2xl:col-span-4 2xl:text-right">
          <h2 className="font-bold">{t('title')}</h2>
          <p>{t('text')}</p>
        </div>
      </div>
    </section>
  );
}

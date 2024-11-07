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
    <section className="bg-white px-8 pb-32">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 xl:max-w-6xl xl:grid-cols-12">
        <Video
          src="/videos/mica-2.mp4"
          subtitles={subtitles}
          autoPlayWhenVisible
          className="xl:col-span-8 xl:mr-12"
        />
        <div className="text-pretty xl:col-span-4 xl:text-right">
          <h2 className="font-bold">{t('title')}</h2>
          <p>{t('text')}</p>
        </div>
      </div>
    </section>
  );
}

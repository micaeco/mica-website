'use client';

import ReactPlayer from 'react-player/lazy';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ReactPlayerProps } from 'react-player';
import { useLocale, useTranslations } from 'next-intl';

export default function VideoSection() {
  const t = useTranslations('home.video');
  const locale = useLocale();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const config = {
    youtube: {
      playerVars: {
        cc_load_policy: 1,
        cc_lang_pref: locale,
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white px-8 pb-32">
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 xl:max-w-6xl xl:grid-cols-12">
        <div ref={containerRef} className="aspect-video overflow-hidden rounded-lg xl:col-span-7">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KMmJsk4eba4"
            playing={isVisible}
            width="100%"
            height="100%"
            controls
            muted
            config={config}
          />
        </div>
        <div className="xl:col-span-5 xl:text-right">
          <h2 className="font-bold">{t('title')}</h2>
          <p>{t('text')}</p>
        </div>
      </div>
    </section>
  );
}

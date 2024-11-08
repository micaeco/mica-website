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
        hd: 1,
      },
    },
  };

  const handleReady = useCallback((player: ReactPlayerProps) => {
    if (player && player.getInternalPlayer()) {
      const internalPlayer = player.getInternalPlayer();
      const availableQualities = internalPlayer.getAvailableQualityLevels();

      if (availableQualities.length > 0) {
        internalPlayer.setPlaybackQuality(availableQualities[0]);
      }
    }
  }, []);

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
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 xl:max-w-6xl xl:grid-cols-12">
        <div
          ref={containerRef}
          className="aspect-video overflow-hidden rounded-lg xl:col-span-8 xl:mr-12"
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=KMmJsk4eba4"
            playing={isVisible}
            width="100%"
            height="100%"
            controls
            muted
            config={config}
            onReady={handleReady}
          />
        </div>
        <div className="text-pretty xl:col-span-4 xl:text-right">
          <h2 className="font-bold">{t('title')}</h2>
          <p>{t('text')}</p>
        </div>
      </div>
    </section>
  );
}

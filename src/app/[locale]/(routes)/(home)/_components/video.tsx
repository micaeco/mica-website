"use client";

import ReactPlayer from "react-player/lazy";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function VideoSection() {
  const t = useTranslations();
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

    const container = containerRef.current;

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <section className="px-8 py-16 lg:py-32">
      <div className="mx-auto grid max-w-3xl grid-cols-1 items-center space-y-6 xl:max-w-6xl xl:grid-cols-12">
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
        <div className="xl:col-span-4 xl:col-start-9 xl:text-right">
          <h2 className="font-bold">{t("home.video.title")}</h2>
          <p>{t("home.video.text")}</p>
        </div>
      </div>
    </section>
  );
}

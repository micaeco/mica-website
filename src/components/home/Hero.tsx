'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 1.0, // 100% of the video must be visible
      }
    );

    observer.observe(video);

    // Check if video is initially fully visible
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else if (isVisible) {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.unobserve(video);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isVisible]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <section className="relative flex flex-col items-center justify-center bg-white px-8 pb-4 pt-20">
      <div className="mb-16 w-full max-w-4xl text-center">
        <h1 className="mb-6 font-bold leading-tight text-primary">
          La nova manera <br />
          d&apos;estalviar aigua.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-gray-500">
          Estem desenvolupant un sensor innovador al que hem anomenat MICA. <br /> Amb MICA pots
          seguir el teu consum d&apos;aigua, detectar fugues i rebre recomanacions personalitzades
          per estalviar aigua.
        </p>

        <div className="relative mx-auto aspect-video w-full max-w-3xl rounded-lg bg-gray-100">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full rounded-lg object-contain shadow-xl"
            playsInline
            loop
            muted
            poster="/logos/full-logo.svg"
            controls
          >
            <source src="/videos/mica.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

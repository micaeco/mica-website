import React, { useRef, useState, useEffect } from 'react';

interface Subtitle {
  src: string;
  srcLang: string;
  label: string;
}

interface Props {
  src: string;
  subtitles: Subtitle[];
  defaultSubtitle?: string;
  autoPlayWhenVisible?: boolean;
}

export default function Video({ src, subtitles, defaultSubtitle, autoPlayWhenVisible }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSubtitle, setCurrentSubtitle] = useState(defaultSubtitle || 'off');
  const [showControls, setShowControls] = useState(false);

  if (autoPlayWhenVisible) {
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch((error) => {
                console.error('Autoplay failed:', error);
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 1.0 }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }, []);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTracks = () => {
      Array.from(video.textTracks).forEach((track) => {
        if (track.language === currentSubtitle) {
          track.mode = 'showing';
        } else {
          track.mode = 'hidden';
        }
      });
    };

    updateTracks();
    video.textTracks.addEventListener('addtrack', updateTracks);

    return () => {
      video.textTracks.removeEventListener('addtrack', updateTracks);
    };
  }, [currentSubtitle]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setShowControls(false), 3000);
    };

    const handleMouseLeave = () => {
      setShowControls(false);
      clearTimeout(timeoutId);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSubtitleChange = (lang: string) => {
    setCurrentSubtitle(lang);
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`absolute right-4 top-4 z-10 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          className={`mr-1 rounded px-2 py-1 text-white ${
            currentSubtitle === 'off' ? 'bg-blue-500' : 'bg-black bg-opacity-50'
          }`}
          onClick={() => handleSubtitleChange('off')}
        >
          Off
        </button>
        {subtitles.map((subtitle, index) => (
          <button
            key={index}
            className={`mr-1 rounded px-2 py-1 text-white ${
              currentSubtitle === subtitle.srcLang ? 'bg-blue-500' : 'bg-black bg-opacity-50'
            }`}
            onClick={() => handleSubtitleChange(subtitle.srcLang)}
          >
            {subtitle.label}
          </button>
        ))}
      </div>
      <video ref={videoRef} src={src} className="w-full rounded-lg" controls muted playsInline>
        {subtitles.map((subtitle, index) => (
          <track
            key={index}
            kind="subtitles"
            src={subtitle.src}
            srcLang={subtitle.srcLang}
            label={subtitle.label}
            default={subtitle.srcLang === defaultSubtitle}
          />
        ))}
      </video>
    </div>
  );
}

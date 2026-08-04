import {useEffect, useRef, useState} from 'react';

const HERO_PLAYBACK_RATE = 0.5;

type HeroVideoProps = {
  className?: string;
  poster: string;
  src: string;
};

export default function HeroVideo({className = '', poster, src}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let isVisible = true;

    const syncPlaybackRate = () => {
      video.defaultPlaybackRate = HERO_PLAYBACK_RATE;
      video.playbackRate = HERO_PLAYBACK_RATE;
    };

    const syncPlayback = () => {
      if (reducedMotion.matches || document.hidden || !isVisible) {
        video.pause();
        if (reducedMotion.matches) video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible if autoplay is unavailable.
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        syncPlayback();
      },
      {threshold: 0.08},
    );

    observer.observe(video);
    video.addEventListener('loadedmetadata', syncPlaybackRate);
    reducedMotion.addEventListener('change', syncPlayback);
    document.addEventListener('visibilitychange', syncPlayback);
    syncPlaybackRate();
    syncPlayback();

    return () => {
      observer.disconnect();
      video.removeEventListener('loadedmetadata', syncPlaybackRate);
      reducedMotion.removeEventListener('change', syncPlayback);
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, []);

  if (failed) {
    return <img src={poster} className={`hero-video ${className}`.trim()} alt="" aria-hidden="true" />;
  }

  return (
    <video
      ref={videoRef}
      className={`hero-video ${className}`.trim()}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

import { useState, useEffect, useRef, useCallback } from 'react';
import { heroData } from '../../lib/data';
import { trackVideoInteraction } from '../../lib/analytics';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

export const useHero = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const isDragging = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isVideoLoaded) {
        setUseFallback(true);
      }
    }, 5000);

    return () => clearTimeout(fallbackTimer);
  }, [isVideoLoaded]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration && !isDragging.current) {
        setProgress((video.currentTime / video.duration) * 100);
      }
      rafId.current = requestAnimationFrame(updateProgress);
    };

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    rafId.current = requestAnimationFrame(updateProgress);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [useFallback]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      trackVideoInteraction({ provider: 'html5', action: 'play', location: 'hero_mobile' });
    } else {
      video.pause();
      setIsPlaying(false);
      trackVideoInteraction({ provider: 'html5', action: 'pause', location: 'hero_mobile' });
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    trackVideoInteraction({
      provider: 'html5',
      action: video.muted ? 'mute' : 'unmute',
      location: 'hero_mobile',
    });
  }, []);

  const seekToPosition = useCallback((clientX: number) => {
    const video = videoRef.current;
    const bar = progressBarRef.current;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    video.currentTime = pos * video.duration;
    setProgress(pos * 100);
  }, []);

  const handleSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    seekToPosition(e.clientX);
  }, [seekToPosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    seekToPosition(e.touches[0].clientX);
  }, [seekToPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    e.preventDefault();
    seekToPosition(e.touches[0].clientX);
  }, [seekToPosition]);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const endDrag = () => { isDragging.current = false; };
    document.addEventListener('touchend', endDrag);
    document.addEventListener('touchcancel', endDrag);
    return () => {
      document.removeEventListener('touchend', endDrag);
      document.removeEventListener('touchcancel', endDrag);
    };
  }, []);

  const cycleSpeed = useCallback(() => {
    const speeds = [1, 1.25, 1.5, 2];
    setPlaybackSpeed(prev => {
      const nextIndex = (speeds.indexOf(prev) + 1) % speeds.length;
      const next = speeds[nextIndex];
      if (videoRef.current) videoRef.current.playbackRate = next;
      trackVideoInteraction({ provider: 'html5', action: 'speed_change', location: 'hero_mobile', extra: next });
      return next;
    });
  }, []);

  // YouTube IFrame API — autoplay muted, user can unmute via button
  const ytPlayerRef = useRef<any>(null);
  const ytContainerRef = useRef<HTMLDivElement>(null);
  const ytWrapperRef = useRef<HTMLDivElement>(null);
  const ytProgressBarRef = useRef<HTMLDivElement>(null);
  const ytRafRef = useRef<number>(0);
  const ytIsDragging = useRef(false);
  const [isYtMuted, setIsYtMuted] = useState(true);
  const [isYtPlaying, setIsYtPlaying] = useState(false);
  const [isYtReady, setIsYtReady] = useState(false);
  const [ytProgress, setYtProgress] = useState(0);
  const [showThumbnail, setShowThumbnail] = useState(true);

  const toggleYtMute = useCallback(() => {
    const player = ytPlayerRef.current;
    if (!player) return;
    if (player.isMuted()) {
      player.unMute();
      player.setVolume(100);
      setIsYtMuted(false);
      trackVideoInteraction({ provider: 'youtube', action: 'unmute', location: 'hero_desktop' });
    } else {
      player.mute();
      setIsYtMuted(true);
      trackVideoInteraction({ provider: 'youtube', action: 'mute', location: 'hero_desktop' });
    }
  }, []);

  const toggleYtPlay = useCallback(() => {
    const player = ytPlayerRef.current;
    if (!player) return;
    const state = player.getPlayerState();
    if (state === window.YT.PlayerState.PLAYING) {
      player.pauseVideo();
      setIsYtPlaying(false);
      trackVideoInteraction({ provider: 'youtube', action: 'pause', location: 'hero_desktop' });
    } else {
      player.playVideo();
      setIsYtPlaying(true);
      setShowThumbnail(false);
      trackVideoInteraction({ provider: 'youtube', action: 'play', location: 'hero_desktop' });
    }
  }, []);

  const seekYtToPosition = useCallback((clientX: number) => {
    const player = ytPlayerRef.current;
    const bar = ytProgressBarRef.current;
    if (!player || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const duration = player.getDuration?.() ?? 0;
    if (duration > 0) {
      player.seekTo(pos * duration, true);
      setYtProgress(pos * 100);
    }
  }, []);

  const handleYtSeek = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    seekYtToPosition(e.clientX);
  }, [seekYtToPosition]);

  const handleYtTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    ytIsDragging.current = true;
    seekYtToPosition(e.touches[0].clientX);
  }, [seekYtToPosition]);

  const handleYtTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!ytIsDragging.current) return;
    e.preventDefault();
    seekYtToPosition(e.touches[0].clientX);
  }, [seekYtToPosition]);

  const handleYtTouchEnd = useCallback(() => {
    ytIsDragging.current = false;
  }, []);

  useEffect(() => {
    // Only run on desktop — defer to avoid blocking initial paint
    const isDesktop = window.matchMedia('(min-width: 64rem)').matches;
    if (!isDesktop) return;

    const scheduleInit = () => {
      const initPlayer = () => {
        if (!ytContainerRef.current || ytPlayerRef.current) return;
        ytPlayerRef.current = new window.YT.Player(ytContainerRef.current, {
        videoId: 'PRpN4_SPfN0',
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: 'PRpN4_SPfN0',
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          mute: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            // Request highest available quality
            event.target.setPlaybackQuality('hd1080');
            setIsYtReady(true);
            setIsYtMuted(true);
            setIsYtPlaying(true);
            // Start RAF progress loop
            const tick = () => {
              const p = ytPlayerRef.current;
              if (!p || ytIsDragging.current) {
                ytRafRef.current = requestAnimationFrame(tick);
                return;
              }
              const duration = p.getDuration?.() ?? 0;
              const current = p.getCurrentTime?.() ?? 0;
              if (duration > 0) {
                setYtProgress((current / duration) * 100);
              }
              ytRafRef.current = requestAnimationFrame(tick);
            };
            ytRafRef.current = requestAnimationFrame(tick);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsYtPlaying(true);
              // Re-assert quality on every PLAYING state (after buffering)
              event.target.setPlaybackQuality('hd1080');
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsYtPlaying(false);
            } else if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
          onPlaybackQualityChange: (event: any) => {
            // If YouTube downgraded below hd720, try to re-request
            const lowQualities = ['small', 'medium', 'large'];
            if (lowQualities.includes(event.data)) {
              event.target.setPlaybackQuality('hd720');
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        initPlayer();
      };
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.async = true;
        document.head.appendChild(tag);
      }
    }
    };

    // Small defer to not block first paint, but fast enough to start loading
    const timerId = setTimeout(scheduleInit, 300);

    return () => {
      clearTimeout(timerId);
      cancelAnimationFrame(ytRafRef.current);
      if (ytPlayerRef.current?.destroy) {
        ytPlayerRef.current.destroy();
        ytPlayerRef.current = null;
      }
    };
  }, []);

  // Desktop YouTube: pause/resume on scroll visibility
  useEffect(() => {
    const wrapper = ytWrapperRef.current;
    if (!wrapper || !isYtReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const player = ytPlayerRef.current;
        if (!player?.playVideo) return;
        if (entry.isIntersecting) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [isYtReady]);

  return {
    highlight: heroData.highlight,
    subtitle: heroData.subtitle,
    cta: heroData.cta,
    videoRef,
    progressBarRef,
    ytContainerRef,
    ytWrapperRef,
    ytProgressBarRef,
    isPlaying,
    isMuted,
    isYtMuted,
    isYtPlaying,
    showThumbnail,
    progress,
    ytProgress,
    isVideoLoaded,
    useFallback,
    playbackSpeed,
    togglePlay,
    toggleMute,
    toggleYtMute,
    toggleYtPlay,
    handleSeek,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleYtSeek,
    handleYtTouchStart,
    handleYtTouchMove,
    handleYtTouchEnd,
    cycleSpeed,
  };
};

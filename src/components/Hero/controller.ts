import { useState, useEffect, useRef, useCallback } from 'react';
import { heroData } from '../../models/data';

export const useHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = (heroData as { greeting?: string }).greeting ?? '';

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const shouldResumeOnVisibleRef = useRef(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          // Pause only when the video was actually playing.
          if (!video.paused) {
            shouldResumeOnVisibleRef.current = true;
            video.pause();
            setIsPlaying(false);
          }
          return;
        }

        // Resume only if we paused it automatically when it left viewport.
        if (shouldResumeOnVisibleRef.current) {
          void video.play()
            .then(() => {
              setIsPlaying(true);
              shouldResumeOnVisibleRef.current = false;
            })
            .catch(() => {
              setIsPlaying(false);
            });
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setProgress(time);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, []);

  return {
    displayText,
    isTypingComplete,
    highlight: heroData.highlight,
    subtitle: heroData.subtitle,
    cta: heroData.cta,
    videoRef,
    isMuted,
    isPlaying,
    progress,
    duration,
    toggleMute,
    togglePlay,
    handleSeek,
  };
};

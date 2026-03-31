import { useState, useEffect, useRef, useCallback } from 'react';
import { heroData } from '../../models/data';

export const useHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = (heroData as { greeting?: string }).greeting ?? '';

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
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

    const placeholder = video.closest('div');
    if (!placeholder) return;

    const isMobile = window.innerWidth < 768;
    const src = isMobile ? '/ks-apresentacao.mp4' : '/ks-apresentacao.MOV';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !video.src) {
          video.src = src;
          video.load();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(placeholder);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      setVideoReady(true);
      void video.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    };

    video.addEventListener('canplaythrough', onReady, { once: true });
    return () => video.removeEventListener('canplaythrough', onReady);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry || !video.src) return;

        if (!entry.isIntersecting) {
          if (!video.paused) {
            shouldResumeOnVisibleRef.current = true;
            video.pause();
            setIsPlaying(false);
          }
          return;
        }

        if (shouldResumeOnVisibleRef.current) {
          void video.play()
            .then(() => {
              setIsPlaying(true);
              shouldResumeOnVisibleRef.current = false;
            })
            .catch(() => setIsPlaying(false));
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => setProgress(video.currentTime);
    const onMeta = () => setDuration(video.duration);

    video.addEventListener('timeupdate', onTime);
    video.addEventListener('loadedmetadata', onMeta);
    return () => {
      video.removeEventListener('timeupdate', onTime);
      video.removeEventListener('loadedmetadata', onMeta);
    };
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
    videoReady,
    toggleMute,
    togglePlay,
    handleSeek,
  };
};

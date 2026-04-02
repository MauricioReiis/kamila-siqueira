import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../lib/data';

export const useTestimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });

  const [isPaused, setIsPaused] = useState(false);
  const virtualScrollRef = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrameId = 0;
    let lastTime = 0;
    const autoScrollSpeed = 28; // px/s

    virtualScrollRef.current = carousel.scrollLeft;

    // Cache scrollWidth to avoid forced reflow every frame
    let cachedHalfWidth = carousel.scrollWidth / 2;
    const resizeObserver = new ResizeObserver(() => {
      cachedHalfWidth = carousel.scrollWidth / 2;
    });
    resizeObserver.observe(carousel);

    const step = (time: number) => {
      if (!lastTime) {
        lastTime = time;
      }

      const deltaTime = time - lastTime;
      lastTime = time;

      if (!isPaused && !dragStateRef.current.isDragging) {
        virtualScrollRef.current += (autoScrollSpeed * deltaTime) / 1000;

        // The list is duplicated in the view; when reaching halfway, loop seamlessly.
        if (virtualScrollRef.current >= cachedHalfWidth) {
          virtualScrollRef.current -= cachedHalfWidth;
        }

        carousel.scrollLeft = virtualScrollRef.current;
      }

      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [isPaused]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    dragStateRef.current = {
      isDragging: true,
      startX: e.clientX,
      startScrollLeft: carousel.scrollLeft,
    };
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel || !dragStateRef.current.isDragging) return;

    const deltaX = e.clientX - dragStateRef.current.startX;
    carousel.scrollLeft = dragStateRef.current.startScrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    dragStateRef.current.isDragging = false;
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    dragStateRef.current.isDragging = false;
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  return {
    ref,
    inView,
    testimonials,
    carouselRef,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    isPaused,
    getInitials,
  };
};

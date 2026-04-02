import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { stats } from '../../lib/data';

export const useStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    stats.forEach((stat, index) => {
      const target = stat.value;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(Math.round(increment * step), target);

        setCounts((prev) => {
          const next = [...prev];
          next[index] = current;
          return next;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }, [hasAnimated]);

  useEffect(() => {
    if (inView) {
      animateCounters();
    }
  }, [inView, animateCounters]);

  const formatValue = (index: number) => {
    const stat = stats[index];
    return `${stat.prefix || ''}${counts[index]}${stat.suffix || ''}`;
  };

  return {
    ref,
    inView,
    stats,
    formatValue,
  };
};

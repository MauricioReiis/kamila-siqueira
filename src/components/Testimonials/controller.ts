import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../models/data';

export const useTestimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    getInitials,
  };
};

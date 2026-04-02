import { useInView } from 'react-intersection-observer';
import { services } from '../../lib/data';

export const useServices = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return {
    ref,
    inView,
    services,
  };
};

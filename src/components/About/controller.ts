import { useInView } from 'react-intersection-observer';
import { aboutData } from '../../models/data';

export const useAbout = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return {
    imageRef,
    imageInView,
    contentRef,
    contentInView,
    ...aboutData,
  };
};

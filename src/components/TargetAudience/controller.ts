import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { targetAudienceData } from '../../lib/data';

export const useTargetAudience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return {
    ref,
    inView,
    label: 'Para você?',
    title: 'Para quem é',
    subtitle: 'Se você se identifica com algum desses cenários, é para você:',
    scenarios: targetAudienceData.scenarios,
    disclaimer: targetAudienceData.disclaimer,
  };
};

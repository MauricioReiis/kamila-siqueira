import { useState, useEffect } from 'react';
import { heroData } from '../../models/data';

export const useHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = heroData.greeting;

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

  return {
    displayText,
    isTypingComplete,
    highlight: heroData.highlight,
    subtitle: heroData.subtitle,
    cta: heroData.cta,
  };
};

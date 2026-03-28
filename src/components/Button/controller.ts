import { useCallback } from 'react';

interface UseButtonProps {
  onClick?: () => void;
  href?: string;
}

export const useButton = ({ onClick, href }: UseButtonProps) => {
  const handleClick = useCallback(() => {
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    onClick?.();
  }, [onClick, href]);

  return { handleClick };
};

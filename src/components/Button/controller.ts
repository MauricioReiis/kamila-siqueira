import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseButtonProps {
  onClick?: () => void;
  href?: string;
}

export const useButton = ({ onClick, href }: UseButtonProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (href) {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      if (href.startsWith('/')) {
        navigate(href);
        return;
      }

      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    onClick?.();
  }, [onClick, href, navigate]);

  return { handleClick };
};

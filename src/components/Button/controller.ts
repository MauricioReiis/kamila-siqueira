import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '../../lib/analytics';

interface UseButtonProps {
  onClick?: () => void;
  href?: string;
  trackingLabel?: string;
  trackingLocation?: string;
  trackingText?: string;
}

export const useButton = ({ onClick, href, trackingLabel, trackingLocation, trackingText }: UseButtonProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    trackButtonClick({
      label: trackingLabel ?? 'button',
      location: trackingLocation,
      text: trackingText,
      href,
    });

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
  }, [onClick, href, navigate, trackingLabel, trackingLocation, trackingText]);

  return { handleClick };
};

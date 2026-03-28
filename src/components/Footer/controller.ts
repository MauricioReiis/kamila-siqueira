import { useCallback } from 'react';
import { navLinks } from '../../models/data';

export const useFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavClick = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return {
    currentYear,
    scrollToTop,
    handleNavClick,
    navLinks,
  };
};

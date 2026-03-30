import styled from 'styled-components';
import { Hero } from '../../components/Hero';
import { About } from '../../components/About';
import { Services } from '../../components/Services';
import { Stats } from '../../components/Stats';
import { Testimonials } from '../../components/Testimonials';
import { ContactCTA } from '../../components/ContactCTA';
import { useThemeContext } from '../../styles/ThemeContext';

const PageWrapper = styled.main<{ $isDark: boolean }>`
  position: relative;
  overflow: hidden;

  /* Dot grid — only visible in dark theme */
  &::before {
    content: '';
    position: fixed;
    inset: -2rem;
    background-image: radial-gradient(
      rgba(196, 139, 159, 0.35) 1px,
      transparent 1px
    );
    background-size: 3rem 3rem;
    pointer-events: none;
    z-index: 0;
    display: ${({ $isDark }) => ($isDark ? 'block' : 'none')};
    animation: bgDrift 30s ease-in-out infinite;
    will-change: transform;
  }

  /* Window light — only visible in dark theme */
  &::after {
    content: '';
    position: fixed;
    inset: -4rem;
    background:
      conic-gradient(
        from 200deg at 100% -10%,
        rgba(212, 165, 116, 0.10) 0deg,
        rgba(196, 139, 159, 0.07) 25deg,
        rgba(196, 139, 159, 0.03) 45deg,
        transparent 70deg
      );
    filter: blur(4rem);
    pointer-events: none;
    z-index: 0;
    display: ${({ $isDark }) => ($isDark ? 'block' : 'none')};
    animation: bgDrift 25s ease-in-out infinite reverse;
    will-change: transform;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

export const HomePage: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <PageWrapper $isDark={isDark}>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <ContactCTA />
    </PageWrapper>
  );
};

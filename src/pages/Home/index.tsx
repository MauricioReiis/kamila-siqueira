import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Hero } from '../../components/Hero';
import { useThemeContext } from '../../styles/ThemeContext';

const About = lazy(() => import('../../components/About').then((m) => ({ default: m.About })));
const Services = lazy(() => import('../../components/Services').then((m) => ({ default: m.Services })));
const Stats = lazy(() => import('../../components/Stats').then((m) => ({ default: m.Stats })));
const Dashboard = lazy(() => import('../../components/Dashboard').then((m) => ({ default: m.Dashboard })));
const Testimonials = lazy(() => import('../../components/Testimonials').then((m) => ({ default: m.Testimonials })));
const ContactCTA = lazy(() => import('../../components/ContactCTA').then((m) => ({ default: m.ContactCTA })));

const PageWrapper = styled.main<{ $isDark: boolean }>`
  position: relative;
  overflow: hidden;

  /* Dot grid — only visible in dark theme */
  &::before {
    content: '';
    position: fixed;
    inset: -2rem;
    background-image: radial-gradient(
      rgba(196, 139, 159, 0.35) 0.0625rem,
      transparent 0.0625rem
    );
    background-size: 3rem 3rem;
    pointer-events: none;
    z-index: 0;
    display: ${({ $isDark }) => ($isDark ? 'block' : 'none')};
    animation: bgDrift 30s ease-in-out infinite;
    will-change: transform;

    @media (max-width: 48rem) {
      display: none;
    }
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

    @media (max-width: 48rem) {
      display: none;
    }
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }
  }
`;

export const HomePage: React.FC = () => {
  const { isDark } = useThemeContext();

  return (
    <PageWrapper $isDark={isDark}>
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Stats />
        <Dashboard />
        <Testimonials />
        <ContactCTA />
      </Suspense>
    </PageWrapper>
  );
};

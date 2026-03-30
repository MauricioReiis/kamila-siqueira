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
    inset: 0;
    background-image: radial-gradient(
      rgba(196, 139, 159, 0.35) 1px,
      transparent 1px
    );
    background-size: 3rem 3rem;
    pointer-events: none;
    z-index: 0;
    display: ${({ $isDark }) => ($isDark ? 'block' : 'none')};
  }

  /* Window light — only visible in dark theme */
  &::after {
    content: '';
    position: fixed;
    inset: 0;
    background:
      conic-gradient(
        from 200deg at 100% -10%,
        rgba(212, 165, 116, 0.12) 0deg,
        rgba(196, 139, 159, 0.09) 30deg,
        transparent 60deg
      );
    pointer-events: none;
    z-index: 0;
    display: ${({ $isDark }) => ($isDark ? 'block' : 'none')};
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

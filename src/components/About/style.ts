import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const AboutContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AboutImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const AboutImagePlaceholder = styled.div`
  width: 21.875rem;
  height: 26.25rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 17.5rem;
    height: 21.25rem;
  }
`;

export const AboutImageText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 6rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.15;
`;

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  image-rendering: auto;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;
  border-radius: inherit;
  z-index: 1;
`;

export const AboutBadge = styled.div`
  position: absolute;
  z-index: 5;
  background: ${({ theme }) =>
    theme.colors.background === '#0A0A0A'
      ? 'rgba(10, 10, 10, 0.72)'
      : 'rgba(250, 250, 250, 0.72)'};
  backdrop-filter: blur(0.75rem);
  -webkit-backdrop-filter: blur(0.75rem);
  border: 0.0625rem solid
    ${({ theme }) =>
      theme.colors.background === '#0A0A0A'
        ? 'rgba(255, 255, 255, 0.12)'
        : theme.colors.border};
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  text-align: center;

  strong {
    display: block;
    font-family: ${({ theme }) => theme.fonts.heading};
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.0625rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: ${({ theme }) =>
      theme.colors.background === '#0A0A0A'
        ? 'rgba(10, 10, 10, 0.92)'
        : 'rgba(250, 250, 250, 0.92)'};
  }
`;

export const ExperienceBadge = styled(AboutBadge)`
  top: 2rem;
  right: -1rem;

  strong {
    font-size: 1.75rem;
  }
`;

export const GraduationBadge = styled(AboutBadge)`
  top: 10rem;
  left: -1rem;
  right: auto;

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  span {
    display: block;
    margin-top: 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: auto;
    left: auto;
    right: auto;
  }
`;

export const PostGraduationBadge = styled(AboutBadge)`
  top: 17rem;
  right: -1rem;

  strong {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }

  span {
    display: block;
    margin-top: 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: auto;
    right: auto;
  }
`;

export const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    text-align: center;
    align-items: center;
  }
`;

export const SectionLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 32.5rem;
`;

export const ValuesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

export const ValueTag = styled(motion.span)`
  padding: 0.5rem 1.25rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 3.125rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

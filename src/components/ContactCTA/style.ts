import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(0.75rem);
  -webkit-backdrop-filter: blur(0.75rem);
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196, 139, 159, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const SectionLabel = styled(motion.span)`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  max-width: 42.5rem;
`;

export const Description = styled(motion.p)`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 32.5rem;
`;

export const InfoRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem 3rem;
  margin-top: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }

  a {
    color: inherit;
    transition: color ${({ theme }) => theme.transition};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 0 0 0.0625rem ${({ theme }) => theme.colors.borderLight} inset;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textMuted};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-0.125rem);
    background: rgba(196, 139, 159, 0.1);
  }
`;

export const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.75rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.5rem 1.75rem rgba(196, 139, 159, 0.35);
  }
`;

export const CTAGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

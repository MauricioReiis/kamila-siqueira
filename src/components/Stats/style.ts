import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StatsSection = styled.section`
  padding: 5rem 2rem;
  background: transparent;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.25rem 1.25rem;
  }
`;

export const StatsContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const StatsHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

export const SectionLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${({ theme }) => theme.colors.primary};
  display: block;
  margin-bottom: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-0.25rem);
  }
`;

export const StatValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 3vw, 2.75rem);
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: lowercase;
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TargetAudienceSection = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const Container = styled(motion.div)`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
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

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.6;
`;

export const ScenariosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ScenarioCard = styled(motion.div)`
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-0.25rem);
  }
`;

export const ScenarioText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 0;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 0.125rem;
  }
`;

export const DisclaimerBox = styled(motion.div)`
  margin-top: 4rem;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => `${theme.colors.primary}08`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const DisclaimerText = styled.p<{ $highlight?: boolean }>`
  font-size: ${({ $highlight }) => ($highlight ? '1.125rem' : '1rem')};
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 500)};
  color: ${({ theme, $highlight }) => ($highlight ? theme.colors.primary : theme.colors.text)};
  line-height: 1.6;
  margin: ${({ $highlight }) => ($highlight ? '1rem 0 0 0' : '0 0 1rem 0')};

  &:last-child {
    margin-bottom: 0;
  }
`;

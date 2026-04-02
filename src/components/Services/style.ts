import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const ServicesContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 1rem;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2.5rem 2rem;
  transition: all ${({ theme }) => theme.transition};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.1875rem;
    background: ${({ theme }) => theme.colors.gradient};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-0.5rem);
    box-shadow: 0 1.25rem 2.5rem rgba(0, 0, 0, 0.3);

    &::before {
      transform: scaleX(1);
    }
  }
`;

export const ServiceIconWrapper = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1rem;
  background: rgba(196, 139, 159, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transition};

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.colors.gradient};
    color: #fff;
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ServiceDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ServiceDetailItem = styled.li`
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textMuted};
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

export const ServiceDetailLabel = styled.strong`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

export const ServiceDetailText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
`;

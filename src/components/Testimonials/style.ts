import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
  overflow: hidden;
`;

export const TestimonialsContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const TestimonialsHeader = styled.div`
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
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    max-width: 37.5rem;
    margin: 0 auto;
  }
`;

export const TestimonialCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  position: relative;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.2);
  }
`;

export const QuoteIcon = styled.div`
  font-size: 3rem;
  line-height: 1;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: Georgia, serif;
  margin-bottom: 1rem;
  opacity: 0.6;
`;

export const TestimonialText = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 1.5rem;
  font-style: italic;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  flex-shrink: 0;
`;

export const AuthorInfo = styled.div`
  strong {
    display: block;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

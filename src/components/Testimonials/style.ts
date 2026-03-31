import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3.5rem 1.25rem;
  }
`;

export const TestimonialsContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const TestimonialsCarousel = styled.div<{ $isPaused: boolean }>`
  overflow-x: auto;
  overflow-y: hidden;
  cursor: ${({ $isPaused }) => ($isPaused ? 'grab' : 'default')};
  user-select: none;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
  --edge-fade: clamp(1.5rem, 5vw, 4rem);
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 var(--edge-fade),
    #000 calc(100% - var(--edge-fade)),
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0,
    #000 var(--edge-fade),
    #000 calc(100% - var(--edge-fade)),
    transparent 100%
  );

  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    --edge-fade: 1rem;
  }
`;

export const TestimonialsTrack = styled.div`
  display: flex;
  gap: 1.25rem;
  width: max-content;
`;

export const TestimonialCard = styled(motion.article)`
  width: clamp(17.5rem, 31vw, 23rem);
  min-height: 16rem;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  position: relative;
  transition: all ${({ theme }) => theme.transition};
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: min(82vw, 20.5rem);
    padding: 1.5rem;
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

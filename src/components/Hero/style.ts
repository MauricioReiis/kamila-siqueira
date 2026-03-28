import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.875rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 6rem 2rem 4rem;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 37.5rem;
    height: 37.5rem;
    background: radial-gradient(
      circle,
      rgba(196, 139, 159, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 25rem;
    height: 25rem;
    background: radial-gradient(
      circle,
      rgba(212, 165, 116, 0.06) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const HeroContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

export const HeroContent = styled.div`
  animation: ${fadeInUp} 0.8s ease forwards;
`;

export const HeroGreeting = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  margin-bottom: 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Cursor = styled.span`
  display: inline-block;
  width: 0.1875rem;
  height: 1em;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 0.25rem;
  vertical-align: text-bottom;
  animation: ${blink} 1s infinite;
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 31.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeInUp} 0.8s ease 0.3s forwards;
  opacity: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: -1;
  }
`;

export const HeroImagePlaceholder = styled.div`
  width: 23.75rem;
  height: 30rem;
  border-radius: 12.5rem 12.5rem 2.5rem 2.5rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 0.125rem solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    inset: -0.125rem;
    border-radius: inherit;
    padding: 0.125rem;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 17.5rem;
    height: 22.5rem;
  }
`;

export const PlaceholderText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 4rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
`;

export const FloatingBadge = styled.div`
  position: absolute;
  bottom: 2rem;
  right: -1rem;
  background: rgba(22, 22, 22, 0.9);
  backdrop-filter: blur(0.625rem);
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    right: 0;
    bottom: 1rem;
  }
`;

export const BadgeIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const BadgeText = styled.div`
  strong {
    display: block;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.textDark};
  font-size: 0.75rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;

  &::after {
    content: '';
    width: 0.0625rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.gradient};
    animation: ${keyframes`
      0% { transform: scaleY(0); transform-origin: top; }
      50% { transform: scaleY(1); transform-origin: top; }
      51% { transform: scaleY(1); transform-origin: bottom; }
      100% { transform: scaleY(0); transform-origin: bottom; }
    `} 2s ease infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

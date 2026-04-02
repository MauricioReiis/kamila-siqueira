import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(1.875rem);
  }
  to {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 5rem 1.25rem 2.5rem;
  }

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
  animation: ${slideUp} 0.6s ease forwards;
  will-change: transform;
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
  animation: ${slideUp} 0.6s ease 0.2s both;
  will-change: transform;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: -1;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const HeroImagePlaceholder = styled.div`
  width: 23.75rem;
  height: 30rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0.25rem -0.25rem 0.75rem rgba(0, 0, 0, 0.08),
    0.5rem -0.5rem 1.5rem rgba(0, 0, 0, 0.04),
    1rem -0.75rem 3rem rgba(0, 0, 0, 0.02);

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

export const YouTubeContainer = styled.div`
  position: absolute;
  inset: 0;
  display: none;
  overflow: hidden;

  /*
   * Container: 23.75rem × 30rem.
   * YouTube player is always 16:9; the 9:16 Short is pillarboxed inside it.
   * To crop the black bars we scale the iframe so the video content (9:16
   * portion = iframe_height × 9/16) equals the container width:
   *   required iframe_height = W × (16/9) = 23.75 × 16/9 ≈ 42.2rem
   *   as % of H (30rem): 42.2 / 30 ≈ 141%
   * Then center it — browser handles horizontal overflow via overflow:hidden.
   */
  iframe {
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
    width: auto !important;
    height: 141% !important;
    min-width: unset !important;
    aspect-ratio: 16 / 9 !important;
    border: none !important;
    pointer-events: none !important;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const KsThumbnailBg = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.backgroundAlt};
`;

export const KsMonogramRow = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`;

export const KsMonogramK = styled.span`
  position: relative;
  z-index: 1;
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
`;

export const KsMonogramS = styled.span`
  position: relative;
  z-index: 1;
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const KsDivider = styled.div`
  position: relative;
  z-index: 1;
  width: 2.75rem;
  height: 0.0625rem;
  background: ${({ theme }) => theme.colors.gradient};
  margin-bottom: 0.875rem;
  opacity: 0.6;
`;

export const KsName = styled.p`
  position: relative;
  z-index: 1;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

export const KsTagline = styled.p`
  position: relative;
  z-index: 1;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-top: 1rem;
`;

export const YtPlayOverlay = styled.div`
  position: relative;
  z-index: 1;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(0.375rem);
  border: 0.125rem solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  will-change: transform;
`;

export const YtThumbnail = styled.div<{ $visible: boolean }>`
  display: none;
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.5s ease;

  &:hover ${YtPlayOverlay} {
    transform: scale(1.12);
    background: rgba(0, 0, 0, 0.6);
    border-color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const DesktopControls = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 0.75rem 0.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.65));

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const DesktopControlButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const MobileVideoContainer = styled.div`
  position: absolute;
  inset: 0;
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const VideoSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 25%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.04) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s ease infinite;
  border-radius: inherit;
  z-index: 1;
`;

export const HeroMobileVideo = styled.video<{ $loaded: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  border: none;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

export const MobileFallbackIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  aspect-ratio: 9 / 16;
  min-height: 100%;
  border: none;
  pointer-events: auto;
`;

export const VideoControls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 0.75rem 0.5rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  z-index: 2;
`;

export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SpeedButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.7rem;
  font-weight: 600;
  opacity: 0.85;
  transition: opacity 0.2s;
  white-space: nowrap;

  &:hover {
    opacity: 1;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 0.25rem 0 0;
  touch-action: none;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 0.25rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.125rem;
  position: relative;
  overflow: visible;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 0.125rem;
`;

export const ProgressThumb = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.3);
  pointer-events: none;
`;

export const FloatingBadge = styled.div`
  position: absolute;
  top: 2rem;
  right: -3rem;
  z-index: 4;
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
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    right: auto;
    top: auto;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: ${({ theme }) =>
      theme.colors.background === '#0A0A0A'
        ? 'rgba(10, 10, 10, 0.92)'
        : 'rgba(250, 250, 250, 0.92)'};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 14.75rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
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

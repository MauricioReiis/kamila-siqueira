import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 3rem 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;

export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const FooterLogo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const FooterTagline = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-style: italic;
  margin-top: -1.9rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textDark};
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.border};
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textDark};
`;

export const BackToTop = styled.button`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textDark};
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  transition: color ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

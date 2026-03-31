import styled from 'styled-components';

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '0.75rem 0' : '1.25rem 0')};
  background: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.backgroundNav : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(1.25rem)' : 'none')};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `0.0625rem solid ${theme.colors.border}` : '0.0625rem solid transparent'};
  transition: all ${({ theme }) => theme.transition};

  @media (max-width: 768px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: ${({ $scrolled, theme }) =>
      $scrolled ? theme.colors.background : 'transparent'};
  }
`;

export const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0;
  }
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: fixed;
    top: 0;
    right: 0;
    width: 17.5rem;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.backgroundNavMenu};
    backdrop-filter: blur(1.25rem);
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  transition: color ${({ theme }) => theme.transition};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 0.125rem;
    background: ${({ theme }) => theme.colors.gradient};
    transition: width ${({ theme }) => theme.transition};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 0.3125rem;
  z-index: 1001;
  padding: 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MenuLine = styled.span<{ $isOpen: boolean; $index: number }>`
  width: 1.5rem;
  height: 0.125rem;
  background: ${({ theme }) => theme.colors.text};
  border-radius: 0.125rem;
  transition: all 0.3s ease;

  ${({ $isOpen, $index }) => {
    if ($isOpen && $index === 0)
      return 'transform: rotate(45deg) translate(0.3125rem, 0.3125rem);';
    if ($isOpen && $index === 1) return 'opacity: 0;';
    if ($isOpen && $index === 2)
      return 'transform: rotate(-45deg) translate(0.3125rem, -0.3125rem);';
    return '';
  }}
`;

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.textMuted};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(196, 139, 159, 0.08);
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
    z-index: 998;
  }
`;

import styled, { css } from 'styled-components';

interface StyledButtonProps {
  $variant?: 'primary' | 'outline' | 'ghost';
  $size?: 'sm' | 'md' | 'lg';
  $fullWidth?: boolean;
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.gradient};
    color: ${({ theme }) => theme.colors.text};
    border: none;

    &:hover {
      opacity: 0.9;
      transform: translateY(-0.125rem);
      box-shadow: 0 0.5rem 1.5625rem rgba(196, 139, 159, 0.3);
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
      transform: translateY(-0.125rem);
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;

    &:hover {
      background: rgba(196, 139, 159, 0.1);
    }
  `,
};

const sizes = {
  sm: css`
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  `,
  md: css`
    padding: 0.75rem 2rem;
    font-size: 1rem;
  `,
  lg: css`
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  border-radius: 3.125rem;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition};
  white-space: nowrap;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant = 'primary' }) => variants[$variant]}
  ${({ $size = 'md' }) => sizes[$size]}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

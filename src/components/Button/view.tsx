import type { ReactNode } from 'react';
import * as S from './style';
import { useButton } from './controller';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  'aria-label'?: string;
}

export const ButtonView: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  href,
  type = 'button',
  disabled = false,
  ...rest
}) => {
  const { handleClick } = useButton({ onClick, href });

  return (
    <S.StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </S.StyledButton>
  );
};

import { cn } from '@lib/utils';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  isDisabled = false,
  children,
  rightIcon,
  className,
  ...props
}) => {
  const baseStyles = cn(
    'font-inter transition-colors text-md rounded-tr-xl duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2',
    className
  );
  const variantStyles = {
    primary:
      'bg-primary text-black font-bold hover:bg-primary focus:ring-primary',
    secondary:
      'bg-black font-bold text-white hover:bg-gray-500 focus:ring-gray-500',
    outline:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-primary',
  };

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-10 py-6 text-base',
  };

  return (
    <button
      {...props}
      disabled={isDisabled || isLoading}
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        (isDisabled || isLoading) && 'opacity-50 cursor-not-allowed',
        isLoading && 'cursor-wait',
        baseStyles
      )}
    >
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;

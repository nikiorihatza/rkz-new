import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-neon border border-primary-600/50 dark:bg-primary-600 dark:hover:bg-primary-500',
    secondary: 'bg-secondary-200 text-dark-800 hover:bg-secondary-300 border border-secondary-300 dark:bg-secondary-600 dark:text-white dark:hover:bg-secondary-500 dark:border-secondary-500',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 hover:shadow-neon-accent border border-accent-600/50',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/30',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      )}
      {children}
    </button>
  );
};
import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-800 text-white hover:bg-primary-900 focus:ring-primary-600',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'border border-gray-300 hover:bg-gray-50 focus:ring-primary-600',
    ghost: 'hover:bg-gray-100 focus:ring-primary-600',
    link: 'text-primary-600 hover:underline focus:ring-0 focus:ring-offset-0',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 rounded',
    md: 'text-sm px-4 py-2 rounded-md',
    lg: 'text-base px-6 py-3 rounded-md',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
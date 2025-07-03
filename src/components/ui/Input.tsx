import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = true, leftIcon, rightIcon, className = '', ...props }, ref) => {
    const inputClasses = `
      block px-3 py-2 rounded-md
      border ${error ? 'border-red-500' : 'border-gray-300'}
      shadow-sm
      placeholder-gray-400
      focus:outline-none
      ${error ? 'focus:ring-red-500 focus:border-red-500' : 'focus:ring-primary-500 focus:border-primary-500'}
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${leftIcon ? 'pl-10' : ''}
      ${rightIcon ? 'pr-10' : ''}
      ${className}
    `;

    return (
      <div className={`${fullWidth ? 'w-full' : 'w-auto'} space-y-1`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">{leftIcon}</span>
            </div>
          )}
          <input ref={ref} className={inputClasses} {...props} />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">{rightIcon}</span>
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={`text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
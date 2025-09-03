import type { InputHTMLAttributes, ReactNode } from 'react';

import { cn } from '@lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

const Input = ({ label, error, icon, className, ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            {icon}
          </span>
        )}
        <input
          {...props}
          className={cn(
            'w-full border border-gray-300 rounded-lg shadow-sm px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            icon ? 'pl-10' : '',
            error
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
              : '',
            className
          )}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;

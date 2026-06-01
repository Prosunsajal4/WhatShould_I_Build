'use client';

import { ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  helpText?: string;
}

export function Input({
  label,
  error,
  icon,
  helpText,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}

      <div className="relative mt-1">
        {icon && <div className="absolute inset-y-0 left-0 flex items-center pl-3">{icon}</div>}

        <input
          {...props}
          className={`
            w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900
            placeholder-gray-500 transition-colors duration-200
            focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20
            dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:ring-red-500/20' : ''}
            ${className}
          `}
        />
      </div>

      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
      {helpText && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helpText}</p>}
    </div>
  );
}

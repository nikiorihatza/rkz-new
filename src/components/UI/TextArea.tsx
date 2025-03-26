import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-dark-700 dark:text-secondary-300">
        {label}
        {props.required && <span className="text-accent-500 ml-1">*</span>}
      </label>
      <textarea
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm 
          bg-white dark:bg-dark-900
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${error ? 'border-accent-500' : 'border-gray-300 dark:border-dark-600'}
          text-dark-800 dark:text-secondary-200
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-accent-600 dark:text-accent-400">{error}</p>
      )}
    </div>
  );
};
import React from 'react';

interface FormWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ title, subtitle, children }) => {
  return (
    <div className="w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-neon dark:border dark:border-primary-900/30">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-2">{title}</h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-gray-600 dark:text-secondary-300">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};
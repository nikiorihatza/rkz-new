import React from 'react';
import { HeroButton } from './HeroButton';

interface HeroContentProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="relative z-20 max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 dark:text-white mb-4 sm:mb-6 drop-shadow-lg">
        <span className="bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-300 dark:to-primary-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-secondary-300 mb-6 sm:mb-8 drop-shadow">
        {subtitle}
      </p>
      <HeroButton to={ctaLink}>
        {ctaText}
      </HeroButton>
    </div>
  );
};
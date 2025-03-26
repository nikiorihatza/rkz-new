import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroButtonProps {
  to: string;
  children: React.ReactNode;
}

export const HeroButton: React.FC<HeroButtonProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-primary-600 dark:bg-primary-500/80 dark:backdrop-blur-sm rounded-md shadow-md hover:bg-primary-700 dark:hover:bg-primary-600/90 dark:hover:shadow-neon transition-all duration-300 group border border-primary-500/50 dark:border-primary-400/50"
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  );
};
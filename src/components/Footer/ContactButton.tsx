import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export const ContactButton: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center px-6 py-3 border border-primary-500 dark:border-primary-700 text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-800/50 dark:hover:bg-primary-700/70 transition-all duration-300 dark:hover:shadow-neon"
    >
      <MessageSquare className="w-5 h-5 mr-2" />
      Kontaktieren Sie uns
    </Link>
  );
};
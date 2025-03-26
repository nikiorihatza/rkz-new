import React from 'react';
import { Link } from 'react-router-dom';
import { FooterSection } from './types';
import { useScrollToTop } from '../../hooks/useScrollToTop';

interface FooterLinksProps {
  sections: FooterSection[];
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ sections }) => {
  const scrollToTop = useScrollToTop();
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-primary-400 uppercase tracking-wider mb-4">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  className="text-base text-gray-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-200"
                  onClick={scrollToTop}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
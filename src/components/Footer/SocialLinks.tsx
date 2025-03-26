import React from 'react';
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import { SocialLink } from './types';

const IconMap = {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
};

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const renderIcon = (iconName: string) => {
    const Icon = IconMap[iconName as keyof typeof IconMap];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-200"
          aria-label={link.label}
        >
          {renderIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};
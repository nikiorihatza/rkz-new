import React from 'react';
import { SocialLinks } from './SocialLinks';
import { FooterLinks } from './FooterLinks';
import { ContactButton } from './ContactButton';
import { FOOTER_CONFIG, SOCIAL_LINKS, FOOTER_SECTIONS } from './config';

export const Footer: React.FC = () => {
  return (
      <footer className="bg-white dark:bg-dark-950 text-dark-800 dark:text-secondary-300 border-t border-primary-100 dark:border-primary-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <img src="/src/img/rkz_logo_transparent.png" className="w-[80%] h-auto"/>
              <ContactButton/>
            </div>

            {/* Footer Links */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <FooterLinks sections={FOOTER_SECTIONS}/>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-100 dark:border-dark-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 dark:text-secondary-500 mb-4 md:mb-0">
                © {FOOTER_CONFIG.currentYear} {FOOTER_CONFIG.companyName}
              </div>
              <SocialLinks links={SOCIAL_LINKS} />
            </div>
          </div>
        </div>
      </footer>
  );
};
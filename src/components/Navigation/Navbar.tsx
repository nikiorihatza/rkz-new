import React from 'react';
import { Logo } from '../Logo/Logo';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { MobileMenuButton } from './MobileMenuButton';
import { ThemeToggle } from '../UI/ThemeToggle';
import { navigationItems } from './navigationItems';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isScrolled = useScrollPosition(50); // Trigger after 50px scroll
  const scrollToTop = useScrollToTop();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    scrollToTop();
  };

  return (
      <>
        <nav
            className={`w-full bg-white dark:bg-dark-950/90 backdrop-blur-md transition-all duration-300 border-b border-primary-100 dark:border-primary-800/30 ${
                isScrolled
                    ? 'fixed top-0 left-0 right-0 shadow-md z-50'
                    : 'relative'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Logo />
              </div>

              <div className="flex items-center">
                <DesktopNav items={navigationItems} />
                <div className="flex items-center space-x-2 ml-4">
                  <ThemeToggle />
                  <MobileMenuButton isOpen={isOpen} onClick={toggleMenu} />
                </div>
              </div>
            </div>
          </div>

          <MobileNav
              items={navigationItems}
              isOpen={isOpen}
              onItemClick={closeMenu}
          />
        </nav>

        {/* Spacer to prevent content jump when navbar becomes fixed */}
        {isScrolled && <div className="h-16" />}
      </>
  );
};
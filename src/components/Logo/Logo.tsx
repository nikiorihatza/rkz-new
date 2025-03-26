import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const Logo: React.FC = () => {
  const { theme } = useTheme();
  const scrollToTop = useScrollToTop();
  
  // Create logo URL based on theme
  const logoUrl = "src/img/rkz_logo_transparent.png";
  
  return (
    <NavLink to="/" className="flex items-center group" onClick={scrollToTop}>
      <div className="h-12 w-auto">
        <img 
          src={logoUrl} 
          alt="RKZ Metall Design GmbH" 
          className="h-full w-auto object-contain"
        />
      </div>
    </NavLink>
  );
};
import React from 'react';

interface HeroOverlayProps {
  opacity?: number;
}

export const HeroOverlay: React.FC<HeroOverlayProps> = ({ opacity = 50 }) => {
  return (
    <div 
      className={`absolute inset-0 bg-black/${opacity}`}
      aria-hidden="true"
    />
  );
};
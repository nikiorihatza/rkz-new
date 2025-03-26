import React from 'react';
import { HeroOverlay } from './HeroOverlay';

interface HeroBackgroundProps {
  imageUrl: string;
  overlayOpacity?: number;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  imageUrl, 
  overlayOpacity = 100
}) => {
  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <HeroOverlay opacity={overlayOpacity} />
    </div>
  );
};
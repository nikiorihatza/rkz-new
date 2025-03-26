import React from 'react';
import { GalleryImage } from './types';
import { GalleryItem } from './GalleryItem';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {images.map((image, index) => (
        <GalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
};
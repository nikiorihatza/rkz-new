import React, { useState } from 'react';
import { GalleryGrid } from './GalleryGrid';
import { Slideshow } from './Slideshow';
import { GALLERY_IMAGES } from './config';
import { motion } from 'framer-motion';

export const GallerySection: React.FC = () => {
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsSlideshowOpen(true);
  };

  const handleClose = () => {
    setIsSlideshowOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-dark-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-dark-800 dark:via-dark-900 dark:to-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
              Unsere Referenzen
            </h2>
            <p className="text-lg text-gray-600 dark:text-secondary-300 max-w-2xl mx-auto">
              Einblicke in unsere erfolgreich realisierten Projekte
            </p>
          </motion.div>

          <GalleryGrid
              images={GALLERY_IMAGES}
              onImageClick={handleImageClick}
          />

          <Slideshow
              images={GALLERY_IMAGES}
              currentIndex={currentImageIndex}
              isOpen={isSlideshowOpen}
              onClose={handleClose}
              onNavigate={handleNavigate}
          />
        </div>
      </section>
  );
};
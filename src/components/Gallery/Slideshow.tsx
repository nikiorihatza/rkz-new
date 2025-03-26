import React, { useEffect, useCallback, useState, TouchEvent } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from './types';
import { useTheme } from '../../context/ThemeContext';

interface SlideshowProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Slideshow: React.FC<SlideshowProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);
  const { theme } = useTheme();

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (event.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
        break;
      case 'ArrowRight':
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
        break;
    }
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && !isNavigating) {
      setIsNavigating(true);
      onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
      setTimeout(() => setIsNavigating(false), 300);
    }

    if (isRightSwipe && !isNavigating) {
      setIsNavigating(true);
      onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      setTimeout(() => setIsNavigating(false), 300);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className={`fixed inset-0 z-50 ${theme === 'dark' ? 'bg-dark-950/95' : 'bg-gray-900/90'} backdrop-blur-md flex items-center justify-center touch-none`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-primary-300 transition-colors z-50 p-2"
        aria-label="Close slideshow"
      >
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Navigation buttons - Hidden on mobile, visible on larger screens */}
      <div className="hidden sm:block">
        <button
          onClick={() => onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)}
          className="absolute left-4 text-white hover:text-primary-300 transition-colors p-2 bg-dark-900/50 rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={() => onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)}
          className="absolute right-4 text-white hover:text-primary-300 transition-colors p-2 bg-dark-900/50 rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Image container */}
      <div className="w-full h-full sm:w-auto sm:h-auto sm:max-w-[90vw] sm:max-h-[90vh] flex flex-col justify-center">
        <img
          src={currentImage.url}
          alt={currentImage.description}
          className="w-full h-auto max-h-[70vh] sm:max-h-[85vh] object-contain"
        />
        <div className="mt-4 px-4 text-center text-white">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-300">{currentImage.title}</h3>
          <p className="text-sm sm:text-base text-secondary-300">{currentImage.description}</p>
        </div>
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary-400 text-sm sm:text-base bg-dark-900/70 px-3 py-1 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Swipe indicator - Only visible on mobile */}
      <div className="sm:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 text-secondary-400 text-sm">
        Wischen Sie zum Navigieren
      </div>
    </div>
  );
};
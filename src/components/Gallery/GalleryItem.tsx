import React from 'react';
import { GalleryImage } from './types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
      <motion.div
          ref={ref}
          className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-dark-800 cursor-pointer border border-gray-200 dark:border-primary-900/30"
          onClick={onClick}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          whileHover={{ scale: 1.05 }}
      >
        <img
            src={image.url}
            alt={image.description}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent dark:from-dark-950 dark:via-dark-900/30 dark:to-transparent opacity-60 dark:opacity-80 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="text-center p-4 backdrop-blur-sm bg-white/30 dark:bg-dark-900/50 rounded-lg border border-white/20 dark:border-primary-800/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-white dark:text-primary-300 mb-2">{image.title}</h3>
              <p className="text-sm text-gray-100 dark:text-secondary-300">{image.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
  );
};
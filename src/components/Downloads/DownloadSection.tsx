import React, { useState } from 'react';
import { CategoryFilter } from './CategoryFilter';
import { DownloadGrid } from './DownloadGrid';
import { DownloadSectionProps } from './types';
import { motion } from 'framer-motion';

export const DownloadSection: React.FC<DownloadSectionProps> = ({
                                                                  title,
                                                                  subtitle,
                                                                  categories,
                                                                  items,
                                                                }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();

  return (
      <section className="min-h-screen flex flex-col justify-start py-12 sm:py-16 lg:py-20 bg-gray-100 dark:bg-dark-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-dark-800 dark:via-dark-900 dark:to-dark-950">
          <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                  className="text-center mb-12"
                  initial={{opacity: 0, y: -50}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.8, ease: 'easeInOut'}}
              >
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
                      {title}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-secondary-300 max-w-2xl mx-auto">
                      {subtitle}
                  </p>
              </motion.div>

              <motion.div
                  initial={{opacity: 0, x: -50}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.8, ease: 'easeInOut'}}
              >
                  <CategoryFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                  />
              </motion.div>

              <DownloadGrid
                  items={items}
                  selectedCategory={selectedCategory}
              />
          </div>
      </section>
  );
};
import React from 'react';
import { DownloadCategory } from './types';

interface CategoryFilterProps {
  categories: DownloadCategory[];
  selectedCategory?: string;
  onCategoryChange: (categoryId: string | undefined) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => onCategoryChange(undefined)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
          ${!selectedCategory 
            ? 'bg-primary-500 text-white dark:shadow-neon' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-800 dark:text-secondary-300 dark:hover:bg-dark-700 dark:border dark:border-primary-900/30'
          }`}
      >
        Alle
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedCategory === category.id
              ? 'bg-primary-500 text-white dark:shadow-neon'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-800 dark:text-secondary-300 dark:hover:bg-dark-700 dark:border dark:border-primary-900/30'
            }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};
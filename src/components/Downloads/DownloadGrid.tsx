import React from 'react';
import { DownloadCard } from './DownloadCard';
import { DownloadItem } from './types';

interface DownloadGridProps {
  items: DownloadItem[];
  selectedCategory?: string;
}

export const DownloadGrid: React.FC<DownloadGridProps> = ({ 
  items, 
  selectedCategory 
}) => {
  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : items;

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
        {filteredItems.map((item) => (
            <DownloadCard key={item.id} item={item}/>
        ))}
      </div>
  );
};
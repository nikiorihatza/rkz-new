import React from 'react';
import { DownloadSection } from '../components/Downloads';
import { DOWNLOADS_CONFIG, DOWNLOAD_CATEGORIES, DOWNLOAD_ITEMS } from '../components/Downloads/config';

export const Downloads: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DownloadSection
        title={DOWNLOADS_CONFIG.title}
        subtitle={DOWNLOADS_CONFIG.subtitle}
        categories={DOWNLOAD_CATEGORIES}
        items={DOWNLOAD_ITEMS}
      />
    </div>
  );
};
import React from 'react';
import { FileText, Download } from 'lucide-react';
import { DownloadItem } from './types';
import { motion } from 'framer-motion';

interface DownloadCardProps {
  item: DownloadItem;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({ item }) => {
  return (
      <motion.div
          className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:border dark:border-dark-800 p-6 hover:shadow-lg dark:hover:shadow-neon transition-all duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-primary-100 dark:bg-primary-900/50 p-2 rounded-lg">
              <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-primary-300 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-secondary-400 mb-4">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-secondary-500">
                {item.fileType} • {item.fileSize}
              </div>
              <a
                  href={item.downloadUrl}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </a>
            </div>
          </div>
        </div>
      </motion.div>
  );
};
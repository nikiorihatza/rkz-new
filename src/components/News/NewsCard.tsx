import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { News } from './types';

interface NewsCardProps {
    article: News;
    onClick?: (article: News) => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, onClick }) => {
    return (
        <motion.div
            className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-none dark:border dark:border-primary-900/30 dark:hover:shadow-neon transition-all duration-300"
            onClick={() => onClick?.(article)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative aspect-[16/9] overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-60 dark:from-dark-950/90 dark:to-transparent"></div>
                <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
            {article.category}
          </span>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-secondary-400 mb-3">
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                    </div>
                    <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-primary-300 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {article.title}
                </h3>

                <p className="text-gray-600 dark:text-secondary-300 mb-4 line-clamp-2">
                    {article.description}
                </p>

                <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-secondary-400">
            {article.date}
          </span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
            Weiterlesen
          </span>
                </div>
            </div>
        </motion.div>
    );
};
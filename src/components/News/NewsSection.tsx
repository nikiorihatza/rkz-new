import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { NewsGrid } from './NewsGrid';
import { NewsSectionProps } from './types';
import { SearchBar } from './SearchBar';

export const NewsSection: React.FC<NewsSectionProps> = ({
                                                            title,
                                                            subtitle,
                                                            articles,
                                                        }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = useMemo(() => {
        if (!searchQuery.trim()) return articles;

        const query = searchQuery.toLowerCase();
        return articles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query) ||
            article.category.toLowerCase().includes(query) ||
            article.author.toLowerCase().includes(query)
        );
    }, [articles, searchQuery]);

    return (
        <section className="py-16 bg-gray-100 dark:bg-dark-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-dark-800 dark:via-dark-900 dark:to-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-secondary-300 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                />

                {filteredArticles.length === 0 ? (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-secondary-300">
                            Keine Artikel gefunden für "{searchQuery}"
                        </p>
                    </motion.div>
                ) : (
                    <NewsGrid articles={filteredArticles} />
                )}
            </div>
        </section>
    );
};
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

export const ArticlePage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const article = location.state?.article;

    if (!article) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Artikel nicht gefunden
                    </h1>
                    <button
                        onClick={() => navigate('/news')}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Zurück zur Übersicht
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-12">
            <motion.div
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button
                    onClick={() => navigate('/news')}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Zurück zur Übersicht
                </button>

                <article className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-primary-900/30 overflow-hidden">
                    <div className="aspect-video relative">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                {article.category}
              </span>
                            <div className="flex items-center text-gray-600 dark:text-secondary-400">
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="text-sm">{article.readTime}</span>
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            {article.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-600 dark:text-secondary-400 mb-8 pb-8 border-b border-gray-200 dark:border-dark-700">
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span>{article.date}</span>
                            </div>
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-700 dark:text-secondary-300 leading-relaxed">
                                {article.description}
                            </p>
                        </div>
                    </div>
                </article>
            </motion.div>
        </div>
    );
};
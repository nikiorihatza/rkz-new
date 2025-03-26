import React from 'react';
import { FeaturedProductsProps } from './types';
import { FeaturedProductCard } from './FeaturedProductCard';
import { motion } from 'framer-motion';

export const FeaturedProductsSection: React.FC<FeaturedProductsProps> = ({
                                                                             title,
                                                                             subtitle,
                                                                             products,
                                                                         }) => {
    return (
        <section className="py-16 bg-gray-100 dark:bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-secondary-300 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <FeaturedProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};
import React from 'react';
import {ProductSectionProps} from './types';
import {ProductGrid} from './ProductGrid';
import {motion} from 'framer-motion';

export const ProductSection: React.FC<ProductSectionProps> = ({
                                                                  title,
                                                                  subtitle,
                                                                  products,
                                                              }) => {
    return (
        <section
            className="py-16 bg-gray-100 dark:bg-dark-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-dark-800 dark:via-dark-900 dark:to-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: -50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, ease: 'easeInOut'}}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-secondary-300 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>
                <ProductGrid products={products}/>
            </div>
        </section>
    );
};
import React from 'react';
import {Product} from './types';
import {motion} from 'framer-motion';

interface ProductCardProps {
    product: Product;
    onClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({product, onClick}) => {
    return (
        <motion.div
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-primary-900/30 overflow-hidden hover:shadow-lg dark:hover:shadow-neon transition-all duration-300 flex flex-col group"
            onClick={() => onClick?.(product)}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="aspect-video relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent dark:from-dark-950 dark:via-transparent dark:to-transparent opacity-70 z-10"></div>
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-4 sm:p-5 lg:p-6 flex-grow dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-900">
                <motion.h3
                    className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-primary-300 mb-2"
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                >
                    {product.title}
                </motion.h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-secondary-300 mb-4">
                    {product.description}
                </p>
                <div className="space-y-2">
                    <h4 className="font-medium text-gray-800 dark:text-secondary-200">Eigenschaften:</h4>
                    <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-secondary-400 space-y-1">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};
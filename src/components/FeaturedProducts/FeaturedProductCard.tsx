import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedProduct } from './types';
import { motion } from 'framer-motion';

interface FeaturedProductCardProps {
    product: FeaturedProduct;
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product }) => {
    return (
        <motion.div
            className="group relative bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-primary-900/30 overflow-hidden hover:shadow-xl dark:hover:shadow-neon transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-60 dark:from-dark-950/90 dark:to-transparent"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    {product.title}
                </h3>
                <p className="text-gray-200 dark:text-secondary-300 mb-4 line-clamp-2">
                    {product.description}
                </p>
                <Link
                    to={product.link}
                    className="inline-flex items-center text-white hover:text-primary-300 transition-colors duration-300 group/link"
                >
                    Mehr erfahren
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
            </div>
        </motion.div>
    );
};
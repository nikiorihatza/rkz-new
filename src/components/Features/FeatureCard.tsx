import React from 'react';
import { Settings, Shield, Clock, Wrench, CheckCircle, Users } from 'lucide-react';
import { Feature } from './types';
import { motion } from 'framer-motion';

const IconMap = {
    Settings,
    Shield,
    Clock,
    Wrench,
    CheckCircle,
    Users,
} as const;

interface FeatureCardProps {
    feature: Feature;
    index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
    const Icon = IconMap[feature.icon as keyof typeof IconMap];

    return (
        <motion.div
            className="bg-white dark:bg-dark-800 rounded-lg p-8 shadow-md dark:shadow-none border border-gray-200 dark:border-primary-900/30 hover:shadow-lg dark:hover:shadow-neon transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-lg w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                {Icon && <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-primary-300 mb-3">
                {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-secondary-300 leading-relaxed">
                {feature.description}
            </p>
        </motion.div>
    );
};
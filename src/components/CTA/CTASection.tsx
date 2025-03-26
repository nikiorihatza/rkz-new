import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CTA_CONFIG } from './config';

export const CTASection: React.FC = () => {
    return (
        <section className="py-16 bg-primary-500 dark:bg-primary-900/90 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgydi00aC0ydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-primary-500/50 dark:from-primary-800/50 dark:to-primary-900/50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <motion.div
                        className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            {CTA_CONFIG.title}
                        </h2>
                        <p className="text-lg sm:text-xl text-primary-50 dark:text-primary-100">
                            {CTA_CONFIG.description}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-primary-600 bg-white rounded-md shadow-lg hover:bg-gray-50 transition-all duration-300 group whitespace-nowrap min-w-[200px] hover:shadow-xl"
                        >
                            {CTA_CONFIG.primaryButtonText}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>

                        <a
                            href={`tel:${CTA_CONFIG.phoneNumber}`}
                            className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white border-2 border-white rounded-md hover:bg-white/10 transition-all duration-300 whitespace-nowrap min-w-[200px] backdrop-blur-sm"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            <span className="hidden sm:inline">{CTA_CONFIG.phoneNumber}</span>
                            <span className="sm:hidden">{CTA_CONFIG.phoneButtonTextMobile}</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
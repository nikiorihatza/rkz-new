import React, { useEffect } from 'react';
import { TestimonialSectionProps } from './types';
import { TestimonialGrid } from './TestimonialGrid';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
                                                                          title,
                                                                          subtitle,
                                                                          testimonials,
                                                                      }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1 });
        }
    }, [controls, inView]);

    return (
        <section className="py-16 bg-gray-100 dark:bg-dark-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-dark-800 dark:via-dark-900 dark:to-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <motion.div
                        ref={ref}
                        className="text-center mb-12"
                        initial={{ y: -100, opacity: 0 }}
                        animate={controls}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        {title && (
                            <h2 className="text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-xl text-gray-600 dark:text-secondary-300 max-w-3xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                )}
                <TestimonialGrid testimonials={testimonials} />
            </div>
        </section>
    );
};
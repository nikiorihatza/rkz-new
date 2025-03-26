import React, { useEffect } from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from './types';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
      <motion.div
          ref={ref}
          className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none border border-gray-200 dark:border-primary-900/30 p-6 relative group"
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
      >
        {/* Quote Icon */}
        <div className="absolute -top-4 left-6">
          <div className="bg-primary-500 rounded-full p-2 transition-all duration-300 group-hover:bg-primary-600">
            <Quote className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="pt-4">
          <blockquote className="text-gray-700 dark:text-secondary-300 mb-6">
            "{testimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center">
            {testimonial.imageUrl && (
                <motion.div
                    className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary-300 dark:border-primary-400 transition-all duration-300 group-hover:border-primary-500 dark:group-hover:border-primary-300 group-hover:shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <img
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                  />
                </motion.div>
            )}
            <div>
              <div className="font-semibold text-gray-900 dark:text-primary-300">
                {testimonial.author}
              </div>
              <div className="text-sm text-gray-600 dark:text-secondary-400">
                {testimonial.role}
                {testimonial.company && ` • ${testimonial.company}`}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );
};
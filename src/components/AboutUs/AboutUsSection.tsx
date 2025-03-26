import React from 'react';
import { ABOUT_US_CONFIG } from './config';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Counter: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  const [count, setCount] = React.useState(0);
  const numberValue = parseInt(value.replace(/\D/g, ''));

  React.useEffect(() => {
    let start = 0;
    const duration = 3; // 2 seconds
    const increment = numberValue / (duration / 1000 * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= numberValue) {
        clearInterval(interval);
        setCount(numberValue);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [numberValue]);

  return (
      <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
      >
        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          {value}
        </div>
        <div className="text-sm text-gray-600 dark:text-secondary-400">{label}</div>
      </motion.div>
  );
};

export const AboutUsSection: React.FC = () => {
  return (
      <section className="py-16 bg-primary-50 dark:bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDlBNUYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAzNGgydi00aC0ydjR6bTAtNnYtNGgtMnY0aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
                className="space-y-6"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent">
                {ABOUT_US_CONFIG.title}
              </h2>

              <div className="space-y-4">
                {ABOUT_US_CONFIG.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-600 dark:text-secondary-300">
                      {paragraph}
                    </p>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/company">
                  <Button variant="primary" size="lg" className="group">
                    Mehr über uns
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
                className="relative"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl dark:shadow-neon">
                <img
                    src={ABOUT_US_CONFIG.imageUrl}
                    alt="RKZ Metall Design Team"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent dark:from-primary-900/60 dark:to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 p-6 rounded-lg shadow-lg dark:shadow-neon dark:border dark:border-primary-900/30 max-w-xs">
                <div className="grid grid-cols-2 gap-4">
                  {ABOUT_US_CONFIG.stats.map((stat, index) => (
                      <Counter key={index} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};
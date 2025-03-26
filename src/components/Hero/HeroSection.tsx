import React from 'react';
import { motion } from 'framer-motion';
import { HeroContent } from './HeroContent';
import { HERO_CONFIG } from './config';
import { HeroBackground } from './HeroBackground';
import { useTheme } from '../../context/ThemeContext';

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
};

export const HeroSection: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* ✅ Use HeroBackground Instead of AnimatedLogo */}
            <HeroBackground
                imageUrl="/src/img/hero_bg_prefa.png"
                overlayOpacity={30}
            />
            <div className={`absolute inset-0 ${
                theme === 'dark'
                    ? 'bg-gradient-to-b from-dark-950 via-dark-900/90 to-dark-950'
                    : 'bg-gradient-to-b from-gray-200 via-gray-300/90 to-gray-200'
            } z-0`} />

            <div className={`absolute inset-0 ${
                theme === 'dark'
                    ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-950/40 to-dark-950/80'
                    : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/40 via-gray-200/30 to-gray-300/70'
            } z-10`} />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="z-20"
            >
                <HeroContent
                    title={HERO_CONFIG.title}
                    subtitle={HERO_CONFIG.subtitle}
                    ctaText={HERO_CONFIG.ctaText}
                    ctaLink={HERO_CONFIG.ctaLink}
                />
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                className="z-20"
            >
            </motion.div>
        </div>
    );
};

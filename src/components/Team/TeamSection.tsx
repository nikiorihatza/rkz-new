import React from 'react';
import { TeamMember } from './types';
import { TeamMemberCard } from './TeamMemberCard';
import { motion } from 'framer-motion';

interface TeamSectionProps {
    title: string;
    subtitle: string;
    members: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({
                                                            title,
                                                            subtitle,
                                                            members
                                                        }) => {
    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-gray-100 dark:bg-dark-900 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-dark-800 dark:via-dark-900 dark:to-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:bg-gradient-to-r dark:from-primary-300 dark:to-primary-500 dark:bg-clip-text dark:text-transparent mb-3 sm:mb-4">
                        {title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-secondary-300 max-w-2xl sm:max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                                delayChildren: 0.2
                            }
                        }
                    }}
                >
                    {members.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.95 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <TeamMemberCard member={member} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
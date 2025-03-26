import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { TeamMember } from './types';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
    member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
    return (
        <motion.div
            className="bg-white dark:bg-dark-800 rounded-lg shadow-md dark:shadow-none dark:border dark:border-primary-900/30 overflow-hidden hover:shadow-lg dark:hover:shadow-neon transition-all duration-300"
            whileHover={{ boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}
        >
            <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent dark:from-dark-950 dark:via-transparent dark:to-transparent opacity-50 dark:opacity-70 z-10"></div>
                <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6 dark:bg-gradient-to-b dark:from-dark-800 dark:to-dark-900">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-primary-300 mb-1">
                    {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-500 font-medium mb-4">
                    {member.role}
                </p>
                <p className="text-gray-600 dark:text-secondary-300 mb-4">
                    {member.bio}
                </p>

                {member.expertise && (
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-secondary-200 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block px-3 py-1 text-sm bg-primary-50 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full dark:border dark:border-primary-800/30"
                                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                )}

                {member.contact && (
                    <div className="flex gap-4">
                        {member.contact.email && (
                            <motion.a
                                href={`mailto:${member.contact.email}`}
                                className="text-gray-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                                aria-label={`Email ${member.name}`}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            >
                                <Mail className="w-5 h-5" />
                            </motion.a>
                        )}
                        {member.contact.linkedin && (
                            <motion.a
                                href={member.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                                aria-label={`LinkedIn profile of ${member.name}`}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
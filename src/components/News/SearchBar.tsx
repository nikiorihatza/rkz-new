import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
                                                        value,
                                                        onChange,
                                                        placeholder = "Artikel suchen..."
                                                    }) => {
    return (
        <motion.div
            className="relative max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 pl-12 bg-white dark:bg-dark-800 border border-gray-200 dark:border-primary-900/30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:placeholder-secondary-400 dark:text-secondary-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-secondary-500" />
            </div>
        </motion.div>
    );
};
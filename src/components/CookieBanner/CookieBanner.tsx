import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCookies } from '../../context/CookieContext';

export const CookieBanner: React.FC = () => {
    const { preferences, showBanner, updatePreferences, acceptAll, rejectAll, saveCookiePreferences } = useCookies();
    const [showDetails, setShowDetails] = useState(false);

    if (!showBanner) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-primary-900/30 shadow-lg dark:shadow-neon"
            >
                <div className="max-w-7xl mx-auto">
                    {!showDetails ? (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="text-sm text-gray-600 dark:text-secondary-300">
                                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                                <Link to="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline ml-1">
                                    Mehr erfahren
                                </Link>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                >
                                    <Settings className="w-4 h-4 mr-2" />
                                    Einstellungen
                                </button>
                                <button
                                    onClick={rejectAll}
                                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-secondary-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    Ablehnen
                                </button>
                                <button
                                    onClick={acceptAll}
                                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                                >
                                    Alle akzeptieren
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-primary-300">
                                    Cookie-Einstellungen
                                </h3>
                                <button
                                    onClick={() => setShowDetails(false)}
                                    className="text-gray-500 hover:text-gray-700 dark:text-secondary-400 dark:hover:text-secondary-200"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-secondary-200">Notwendige Cookies</h4>
                                        <p className="text-xs text-gray-500 dark:text-secondary-400">
                                            Diese Cookies sind für die Grundfunktionen der Website erforderlich
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={preferences.necessary}
                                        disabled
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 disabled:opacity-50"
                                    />
                                </div>

                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-secondary-200">Analyse Cookies</h4>
                                        <p className="text-xs text-gray-500 dark:text-secondary-400">
                                            Helfen uns zu verstehen, wie Besucher mit der Website interagieren
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={preferences.analytics}
                                        onChange={(e) => updatePreferences({ analytics: e.target.checked })}
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                </div>

                                <div className="flex items-center justify-between py-2">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-secondary-200">Marketing Cookies</h4>
                                        <p className="text-xs text-gray-500 dark:text-secondary-400">
                                            Werden verwendet, um Besuchern relevante Werbung anzuzeigen
                                        </p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={preferences.marketing}
                                        onChange={(e) => updatePreferences({ marketing: e.target.checked })}
                                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 dark:border-dark-700">
                                <button
                                    onClick={rejectAll}
                                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-secondary-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    Alle ablehnen
                                </button>
                                <button
                                    onClick={saveCookiePreferences}
                                    className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                                >
                                    Auswahl bestätigen
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
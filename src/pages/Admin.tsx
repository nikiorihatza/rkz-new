import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/UI/Button';
import { TextField } from '../components/UI/TextField';
import { Management } from './Management';

export const Admin: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const success = await login(username, password);
            if (!success) {
                setError('Ungültige Anmeldedaten');
            }
        } catch (err) {
            setError('Ein Fehler ist aufgetreten');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full space-y-8"
                >
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
                            Admin Login
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <TextField
                                label="Benutzername"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <TextField
                                label="Passwort"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <div className="text-accent-600 dark:text-accent-400 text-sm text-center">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full"
                            isLoading={isLoading}
                        >
                            Anmelden
                        </Button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Admin Dashboard
                        </h1>
                        <Button
                            variant="secondary"
                            onClick={logout}
                            className="flex items-center"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Abmelden
                        </Button>
                    </div>
                    <Management />
                </div>
            </div>
        </div>
    );
};
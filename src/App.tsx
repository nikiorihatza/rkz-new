import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { News } from './pages/News';
import { ArticlePage } from './pages/ArticlePage';
import { Contact } from './pages/Contact';
import { Company } from './pages/Company';
import { Gallery } from './pages/Gallery';
import { Downloads } from './pages/Downloads';
import { Terms } from './pages/Terms';
import { Imprint } from './pages/Imprint';
import { PrivacyPolicy as Privacy } from './pages/PrivacyPolicy';
import { Admin } from './pages/Admin';
import { ThemeProvider } from './context/ThemeContext';
import { CookieProvider } from './context/CookieContext';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { CookieBanner } from './components/CookieBanner/CookieBanner';

export const App: React.FC = () => {
    return (
        <ThemeProvider>
            <CookieProvider>
                <AuthProvider>
                    <DataProvider>
                        <BrowserRouter>
                            <div className="min-h-screen bg-gray-100 dark:bg-dark-900 text-dark-900 dark:text-gray-100 transition-colors duration-300">
                                <Navbar />
                                <main className="flex-grow">
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/products" element={<Products />} />
                                        <Route path="/news" element={<News />} />
                                        <Route path="/news/:id" element={<ArticlePage />} />
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/company" element={<Company />} />
                                        <Route path="/gallery" element={<Gallery />} />
                                        <Route path="/downloads" element={<Downloads />} />
                                        <Route path="/terms" element={<Terms />} />
                                        <Route path="/imprint" element={<Imprint />} />
                                        <Route path="/privacy" element={<Privacy />} />
                                        <Route path="/admin" element={<Admin />} />
                                        <Route path="/management" element={<Navigate to="/admin" replace />} />
                                    </Routes>
                                </main>
                                <Footer />
                                <CookieBanner />
                            </div>
                        </BrowserRouter>
                    </DataProvider>
                </AuthProvider>
            </CookieProvider>
        </ThemeProvider>
    );
};
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';
import { Company } from './pages/Company';
import { Gallery } from './pages/Gallery';
import { Downloads } from './pages/Downloads';
import { Terms } from './pages/Terms';
import { Imprint } from './pages/Imprint';
import { ThemeProvider } from './context/ThemeContext';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 dark:bg-dark-900 text-dark-900 dark:text-gray-100 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/company" element={<Company />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/imprint" element={<Imprint />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};
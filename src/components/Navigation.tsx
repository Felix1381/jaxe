'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInDown, staggerContainer, staggerItem } from '@/utils/animations';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'services', label: 'Services' },
    { id: 'method', label: 'Méthode' },
    { id: 'why-choose-us', label: 'Pourquoi nous' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/40 dark:border-gray-700/40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ 
                scale: 1.05,
                backgroundImage: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              JAXE TECH
            </motion.h1>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg group overflow-hidden"
                onClick={() => scrollToSection(item.id)}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.4, 
                      delay: 0.4 + index * 0.1 
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <motion.span 
                  className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              aria-label="Toggle mobile menu"
              whileHover={{ 
                scale: 1.1,
                color: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="px-4 pt-2 pb-6 space-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200/40 dark:border-gray-700/40"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 rounded-lg"
                  onClick={() => scrollToSection(item.id)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        duration: 0.3, 
                        delay: index * 0.1 
                      }
                    }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    color: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;

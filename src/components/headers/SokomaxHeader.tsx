import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const SokomaxHeader = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const company = { id: '3', name: 'Sokomax', slug: 'sokomax', primaryColor: '#991b1b' };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companyMenus = [
    { id: 'about', name: t('nav.about'), path: `/company/${company.slug}/about` },
    { id: 'services', name: t('nav.services'), path: `/company/${company.slug}/services` },
    { id: 'team', name: t('nav.team'), path: `/company/${company.slug}/team` },
    { id: 'contact', name: t('nav.contact'), path: `/company/${company.slug}/contact` },
  ];

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const headerBg = twMerge(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 flex items-center',
    `bg-[${company.primaryColor}]`,
    isScrolled ? 'bg-opacity-90 shadow-lg backdrop-blur' : 'bg-opacity-100'
  );

  return (
    <motion.header
      className={headerBg}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 text-white">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">EG</div>
          <span className="font-bold text-lg">SOKOMAX</span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          {companyMenus.map(menu => (
            <Link
              key={menu.id}
              to={menu.path}
              className={twMerge(
                'text-sm font-medium transition-opacity px-3 py-2 rounded-md',
                location.pathname === menu.path 
                  ? 'font-bold bg-white bg-opacity-20' 
                  : 'opacity-80 hover:opacity-100 hover:bg-white hover:bg-opacity-10'
              )}
            >
              {menu.name}
            </Link>
          ))}

          <div className="flex items-center gap-4 ml-4 border-l border-white border-opacity-20 pl-4">
            <button onClick={toggleLanguage} className="flex items-center gap-1 hover:opacity-80">
              <Globe size={18} />
              <span className="text-sm">{i18n.language.toUpperCase()}</span>
            </button>
            <button onClick={toggleTheme} className="hover:opacity-80">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[7rem] left-4 right-4 z-40 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4"
          >
            <div className="space-y-2">
              {companyMenus.map(menu => (
                <Link
                  key={menu.id}
                  to={menu.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={twMerge(
                    'block px-3 py-2 rounded text-sm',
                    location.pathname === menu.path
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 font-semibold'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  )}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex justify-between border-t pt-3">
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm">
                <Globe size={16} />
                {i18n.language.toUpperCase()}
              </button>
              <button onClick={toggleTheme} className="flex items-center gap-2 text-sm">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? t('theme.light_mode') : t('theme.dark_mode')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default SokomaxHeader;
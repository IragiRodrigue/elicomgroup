import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

// Import company-specific headers
import TicHeader from '../headers/TicHeader';
import ImprimerieHeader from '../headers/ImprimerieHeader';
import CooperativeHeader from '../headers/CooperativeHeader';
import SokomaxHeader from '../headers/SokomaxHeader';

const COMPANIES = [
  { id: '4', name: 'Elicom TIC', slug: 'tic', primaryColor: '#6b21a8' },
  { id: '2', name: 'Elicom Coopérative', slug: 'cooperative', primaryColor: '#166534' },
  { id: '1', name: 'Elicom Imprimerie', slug: 'imprimerie', primaryColor: '#1e3a8a' },
  { id: '3', name: 'Sokomax', slug: 'sokomax', primaryColor: '#991b1b' },
];

const getContrastColor = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#0F172A' : '#FFFFFF';
};

const AddressBar = () => (
  <div className="bg-gray-900 text-white text-xs py-2 px-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <span className="flex items-center gap-1"> </span>
        <span className="flex items-center gap-1"> </span>
      </div>
      <span className="flex items-center gap-1"> </span>
    </div>
  </div>
);

const MainNavbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const slug = location.pathname.split('/')[2];
    const company = COMPANIES.find(c => c.slug === slug);
    setSelectedCompany(company || null);
  }, [location.pathname]);

  // Render company-specific headers
  if (selectedCompany) {
    switch (selectedCompany.slug) {
      case 'tic':
        return (
          <>
            <AddressBar />
            <TicHeader />
          </>
        );
      case 'imprimerie':
        return (
          <>
            <AddressBar />
            <ImprimerieHeader />
          </>
        );
      case 'cooperative':
        return (
          <>
            <AddressBar />
            <CooperativeHeader />
          </>
        );
      case 'sokomax':
        return (
          <>
            <AddressBar />
            <SokomaxHeader />
          </>
        );
      default:
        break;
    }
  }

  // Default header for main group page
  const companyMenus = useMemo(() => {
    if (!selectedCompany) return [];
    return [
      { id: 'about', name: t('nav.about'), path: `/company/${selectedCompany.slug}/about` },
      { id: 'services', name: t('nav.services'), path: `/company/${selectedCompany.slug}/services` },
      { id: 'team', name: t('nav.team'), path: `/company/${selectedCompany.slug}/team` },
      { id: 'contact', name: t('nav.contact'), path: `/company/${selectedCompany.slug}/contact` },
    ];
  }, [selectedCompany, t]);

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const headerBg = useMemo(() => {
    const base = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 flex items-center';
    if (selectedCompany) {
      return twMerge(base, `bg-[${selectedCompany.primaryColor}]`, isScrolled ? 'bg-opacity-90 shadow-lg backdrop-blur' : 'bg-opacity-100');
    }
    return twMerge(base, isScrolled
      ? (theme === 'dark' ? 'bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur' : 'bg-white bg-opacity-90 shadow-lg backdrop-blur')
      : 'bg-transparent');
  }, [isScrolled, selectedCompany, theme]);

  const textColor = useMemo(() => {
    if (selectedCompany) return getContrastColor(selectedCompany.primaryColor);
    return theme === 'dark' ? '#E2E8F0' : '#1A202C';
  }, [selectedCompany, theme]);

  return (
    <>
      <AddressBar />
      <motion.header
        className={headerBg}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-4" style={{ color: textColor }}>
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">EG</div>
            <span className="font-bold text-lg">ELICOM GROUP</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {selectedCompany ? <></>: <> {COMPANIES.map(company => (
              <Link
                key={company.id}
                to={`/company/${company.slug}`}
                className={twMerge(
                  'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                  location.pathname.includes(company.slug)
                    ? 'bg-white bg-opacity-20'
                    : 'hover:bg-white hover:bg-opacity-10'
                )}
              >
                {company.name}
              </Link>
            ))}</> }

            {selectedCompany && (
              <div className="flex items-center gap-5  border-opacity-30">
                {companyMenus.map(menu => (
                  <Link key={menu.id} to={menu.path} className={twMerge(
                    'text-sm font-medium transition-opacity',
                    location.pathname === menu.path ? 'font-bold' : 'opacity-80 hover:opacity-100'
                  )}>{menu.name}</Link>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 ml-4">
              <button onClick={toggleLanguage} className="flex items-center gap-1 hover:opacity-80">
                <Globe size={18} />
                <span className="text-sm">{i18n.language.toUpperCase()}</span>
              </button>
              <button onClick={toggleTheme} className="hover:opacity-80">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
              {selectedCompany ? <></>:
                <div>
                  {COMPANIES.map(company => (
                    <Link
                      key={company.id}
                      to={`/company/${company.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={twMerge(
                        'block py-2 px-3 rounded-md text-sm font-medium',
                        location.pathname.includes(company.slug)
                          ? 'font-bold text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      )}
                      style={location.pathname.includes(company.slug) ? { backgroundColor: company.primaryColor } : {}}
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>}

              {selectedCompany && (
                <div className="mt-4 border-t pt-3 space-y-2">
                  {companyMenus.map(menu => (
                    <Link
                      key={menu.id}
                      to={menu.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={twMerge(
                        'block px-3 py-2 rounded text-sm',
                        location.pathname === menu.path
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-semibold'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      )}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              )}
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
    </>
  );
};

export default MainNavbar;
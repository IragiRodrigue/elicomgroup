import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';

// Import company-specific headers
import TicHeader from '../headers/TicHeader';
import ImprimerieHeader from '../headers/ImprimerieHeader';
import CooperativeHeader from '../headers/CooperativeHeader';
import SokomaxHeader from '../headers/SokomaxHeader';

const COMPANIES = [
  { id: '1', name: 'Elicom TIC', slug: 'tic', primaryColor: '#6b21a8' },
  { id: '2', name: 'Elicom Imprimerie', slug: 'imprimerie', primaryColor: '#1e3a8a' },
  { id: '3', name: 'Elicom Coopérative', slug: 'cooperative', primaryColor: '#166534' },
  { id: '4', name: 'Sokomax', slug: 'sokomax', primaryColor: '#991b1b' },
];

const AddressBar = () => (
  <div className="bg-gray-900 text-white text-xs py-2 px-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <span className="flex items-center gap-1"></span>
        <span className="flex items-center gap-1"></span>
      </div>
      <span className="flex items-center gap-1"></span>
    </div>
  </div>
);

const MainNavbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

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
        return <DefaultNavbar />;
    }
  }

  // Default navbar for main group page
  return <DefaultNavbar />;
};

const DefaultNavbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');

  const headerBg = useMemo(() => {
    const base = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 flex items-center';
    return twMerge(
      base,
      isScrolled
        ? 'bg-white bg-opacity-95 shadow-lg backdrop-blur'
        : 'bg-transparent'
    );
  }, [isScrolled]);

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';

  return (
    <>
      <AddressBar />
      <motion.header
        className={headerBg}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className={`w-full max-w-7xl mx-auto flex justify-between items-center px-4 ${textColor}`}>
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">EG</div>
            <span className="font-bold text-lg">ELICOM GROUP</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {COMPANIES.map(company => (
              <Link
                key={company.id}
                to={`/company/${company.slug}`}
                className={twMerge(
                  'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
                  location.pathname.includes(company.slug)
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-100 hover:text-blue-600'
                )}
              >
                {company.name}
              </Link>
            ))}

            <div className="flex items-center gap-4 ml-4 border-l border-gray-300 pl-4">
              <button onClick={toggleLanguage} className="flex items-center gap-1 hover:opacity-80">
                <Globe size={18} />
                <span className="text-sm">{i18n.language.toUpperCase()}</span>
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
              className="md:hidden fixed top-[7rem] left-4 right-4 z-40 bg-white rounded-xl shadow-xl p-4"
            >
              <div className="space-y-2">
                {COMPANIES.map(company => (
                  <Link
                    key={company.id}
                    to={`/company/${company.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={twMerge(
                      'block py-2 px-3 rounded-md text-sm font-medium',
                      location.pathname.includes(company.slug)
                        ? 'font-bold text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                    style={location.pathname.includes(company.slug) ? { backgroundColor: company.primaryColor } : {}}
                  >
                    {company.name}
                  </Link>
                ))}
              </div>
              
              <div className="mt-4 flex justify-center border-t pt-3">
                <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm">
                  <Globe size={16} />
                  {i18n.language.toUpperCase()}
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
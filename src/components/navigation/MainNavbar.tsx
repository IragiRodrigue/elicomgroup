import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const mockCompanies = [
  { id: '1', name: 'Elicom Imprimerie', slug: 'imprimerie', primaryColor: '#1e3a8a' }, 
  { id: '2', name: 'Elicom Coopérative', slug: 'cooperative', primaryColor: '#166534' }, 
  { id: '3', name: 'Sokomax', slug: 'sokomax', primaryColor: '#991b1b' },
  { id: '4', name: 'Elicom TIC', slug: 'tic', primaryColor: '#6b21a8' },
];

const AddressBar = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-900 text-white text-xs py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-3 w-3" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-3 w-3" />
            <span>contact@elicom-group.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-1 mt-1 md:mt-0">
          <MapPin className="h-3 w-3" />
          <span>123 Business Ave, Tech City</span>
        </div>
      </div>
    </div>
  );
};

const MainNavbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companyMenus, setCompanyMenus] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts.length > 2 && pathParts[1] === 'company') {
      const companySlug = pathParts[2];
      const foundCompany = mockCompanies.find(c => c.slug === companySlug);
      setSelectedCompany(foundCompany || null);
    } else {
      setSelectedCompany(null);
    }
  }, [location]);

  useEffect(() => {
    if (selectedCompany) {
      setCompanyMenus([
        { id: '1', name: t('nav.about'), slug: 'about', path: `/company/${selectedCompany.slug}/about` },
        { id: '2', name: t('nav.services'), slug: 'services', path: `/company/${selectedCompany.slug}/services` },
        { id: '3', name: t('nav.team'), slug: 'team', path: `/company/${selectedCompany.slug}/team` },
        { id: '4', name: t('nav.contact'), slug: 'contact', path: `/company/${selectedCompany.slug}/contact` },
      ]);
    } else {
      setCompanyMenus([]);
    }
  }, [selectedCompany, t]);

  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const navbarStyle = useMemo(() => {
    if (selectedCompany) {
      return {
        backgroundColor: isScrolled ? `${selectedCompany.primaryColor}E6` : selectedCompany.primaryColor,
        color: getContrastColor(selectedCompany.primaryColor),
        backdropFilter: isScrolled ? 'blur(8px)' : 'none'
      };
    }
    return {
      backgroundColor: isScrolled ? (theme === 'dark' ? 'rgba(15, 23, 42, 0.85)' : 'rgba(255, 255, 255, 0.85)') : 'transparent',
      color: theme === 'dark' ? '#FFFFFF' : '#0F172A',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none'
    };
  }, [selectedCompany, isScrolled, theme]);

  return (
    <>
      <AddressBar />
      
      <nav 
        className={`fixed top-8 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-14 py-2 shadow-lg' : 'h-16 py-3'}`}
        style={navbarStyle}
      >
        <div className=" px-16 flex justify-between items-center h-full">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              EG
            </div>
            <span className="ml-2 text-lg font-semibold">ELICOM GROUP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1">
              {mockCompanies.map(company => (
                <Link
                  key={company.id}
                  to={`/company/${company.slug}`}
                  className={`px-4 py-1 rounded-md text-lg font-medium transition-colors ${
                    selectedCompany?.id === company.id 
                      ? 'bg-white/20' 
                      : 'hover:bg-white/10'
                  }`}
                >
                  {company.name}
                </Link>
              ))}
            </div>

            {selectedCompany && (
              <div className="flex space-x-6 border-l pl-6" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                {companyMenus.map(menu => (
                  <Link
                    key={menu.id}
                    to={menu.path}
                    className={`text-md font-medium ${
                      location.pathname === menu.path ? 'font-bold' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            )}

            <div className="flex items-center space-x-4">
              <button onClick={toggleLanguage} className="flex items-center space-x-1">
                <Globe size={16} />
                <span className="text-xs">{i18n.language.toUpperCase()}</span>
              </button>
              <button onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-28 right-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden"
          >
            <div className="py-2">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">NOS SOCIÉTÉS</h3>
              </div>
              {mockCompanies.map(company => (
                <Link
                  key={company.id}
                  to={`/company/${company.slug}`}
                  className={`block px-4 py-3 text-sm ${
                    selectedCompany?.id === company.id
                      ? 'font-bold text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  style={selectedCompany?.id === company.id ? { backgroundColor: company.primaryColor } : {}}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {company.name}
                </Link>
              ))}
            </div>

            {selectedCompany && (
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{selectedCompany.name}</h3>
                <div className="mt-2 space-y-2">
                  {companyMenus.map(menu => (
                    <Link
                      key={menu.id}
                      to={menu.path}
                      className={`block px-4 py-2 text-sm rounded ${
                        location.pathname === menu.path
                          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-sm"
              >
                <Globe size={16} />
                <span>{i18n.language.toUpperCase()}</span>
              </button>
              <button 
                onClick={toggleTheme}
                className="flex items-center space-x-2 text-sm"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function getContrastColor(hexColor) {
  if (!hexColor) return '#FFFFFF';
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#0F172A' : '#FFFFFF';
}

export default MainNavbar;
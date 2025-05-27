import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Sun, Moon, Globe } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

// Mock data - replace with actual data from API
const mockCompanies = [
  { id: '1', name: 'Elicom Imprimerie', slug: 'imprimerie', primaryColor: '#2563eb' },
  { id: '2', name: 'Elicom Coopérative', slug: 'cooperative', primaryColor: '#16a34a' },
  { id: '3', name: 'Sokomax', slug: 'sokomax', primaryColor: '#dc2626' },
  { id: '4', name: 'Elicom TIC', slug: 'tic', primaryColor: '#9333ea' },
];

interface Company {
  id: string;
  name: string;
  slug: string;
  primaryColor: string;
}

interface CompanyMenu {
  id: string;
  name: string;
  slug: string;
  path: string;
}

const MainNavbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [companyMenus, setCompanyMenus] = useState<CompanyMenu[]>([]);
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Find selected company based on URL
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/company/')) {
      const companySlug = path.split('/')[2];
      const company = companies.find(c => c.slug === companySlug) || null;
      setSelectedCompany(company);
      
      // Fetch company menus
      if (company) {
        // Mock data - replace with API call
        setCompanyMenus([
          { id: '1', name: t('nav.about'), slug: 'about', path: `/company/${company.slug}/about` },
          { id: '2', name: t('nav.services'), slug: 'services', path: `/company/${company.slug}/services` },
          { id: '3', name: t('nav.team'), slug: 'team', path: `/company/${company.slug}/team` },
          { id: '4', name: t('nav.contact'), slug: 'contact', path: `/company/${company.slug}/contact` },
        ]);
      }
    } else {
      setSelectedCompany(null);
      setCompanyMenus([]);
    }
  }, [location.pathname, companies, t]);
  
  // Toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };
  
  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  // Dynamic navbar style based on scroll and selected company
  const navbarStyle = {
    backgroundColor: isScrolled 
      ? selectedCompany 
        ? `${selectedCompany.primaryColor}` 
        : 'var(--color-background)' 
      : 'transparent',
    color: isScrolled ? 'white' : selectedCompany ? 'white' : 'var(--color-text)',
  };
  
  return (
    <nav 
      className={twMerge(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-md py-2" : "py-4",
        selectedCompany && !isScrolled ? "text-white" : ""
      )}
      style={navbarStyle}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">
              {t('common.group')} ELICOM
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Companies Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 focus:outline-none">
                <span>{t('home.ourCompanies')}</span>
                <ChevronDown size={16} />
              </button>
              
              {/* Companies Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {companies.map((company) => (
                    <Link
                      key={company.id}
                      to={`/company/${company.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      style={{
                        borderLeft: `4px solid ${company.primaryColor}`
                      }}
                    >
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Company-specific menus */}
            {selectedCompany && companyMenus.length > 0 && (
              <div className="flex items-center space-x-4">
                {companyMenus.map((menu) => (
                  <Link
                    key={menu.id}
                    to={menu.path}
                    className="text-sm font-medium hover:underline"
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            )}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
            </button>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            {/* Login Button */}
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-primary dark:text-white shadow-sm hover:shadow-md transition-all"
            >
              {t('common.login')}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <div className="space-y-2">
                <p className="font-bold text-gray-500 dark:text-gray-400 text-sm">
                  {t('home.ourCompanies')}
                </p>
                {companies.map((company) => (
                  <Link
                    key={company.id}
                    to={`/company/${company.slug}`}
                    className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      borderLeft: `2px solid ${company.primaryColor}`,
                      paddingLeft: '0.5rem'
                    }}
                  >
                    {company.name}
                  </Link>
                ))}
              </div>
              
              {selectedCompany && companyMenus.length > 0 && (
                <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-bold text-gray-500 dark:text-gray-400 text-sm">
                    {selectedCompany.name}
                  </p>
                  {companyMenus.map((menu) => (
                    <Link
                      key={menu.id}
                      to={menu.path}
                      className="block py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              )}
              
              <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                  >
                    <Globe size={18} />
                    <span>{i18n.language === 'fr' ? 'Français' : 'English'}</span>
                  </button>
                  
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={18} />
                        <span>{t('common.lightMode')}</span>
                      </>
                    ) : (
                      <>
                        <Moon size={18} />
                        <span>{t('common.darkMode')}</span>
                      </>
                    )}
                  </button>
                </div>
                
                <Link
                  to="/login"
                  className="block w-full py-2 text-center bg-primary text-white rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('common.login')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MainNavbar;
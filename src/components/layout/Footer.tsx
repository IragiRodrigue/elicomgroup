import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// Import company-specific footers
import TicFooter from '../footers/TicFooter';
import ImprimerieFooter from '../footers/ImprimerieFooter';
import CooperativeFooter from '../footers/CooperativeFooter';
import SokomaxFooter from '../footers/SokomaxFooter';

const COMPANIES = [
  { id: '4', name: 'Elicom TIC', slug: 'tic', primaryColor: '#6b21a8' },
  { id: '2', name: 'Elicom Coopérative', slug: 'cooperative', primaryColor: '#166534' },
  { id: '1', name: 'Elicom Imprimerie', slug: 'imprimerie', primaryColor: '#1e3a8a' },
  { id: '3', name: 'Sokomax', slug: 'sokomax', primaryColor: '#991b1b' },
];

const Footer: React.FC = () => {
  const location = useLocation();
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  useEffect(() => {
    const slug = location.pathname.split('/')[2];
    const company = COMPANIES.find(c => c.slug === slug);
    setSelectedCompany(company || null);
  }, [location.pathname]);

  // Render company-specific footers
  if (selectedCompany) {
    switch (selectedCompany.slug) {
      case 'tic':
        return <TicFooter />;
      case 'imprimerie':
        return <ImprimerieFooter />;
      case 'cooperative':
        return <CooperativeFooter />;
      case 'sokomax':
        return <SokomaxFooter />;
      default:
        return <DefaultFooter />;
    }
  }

  // Default footer for main group page
  return <DefaultFooter />;
};

const DefaultFooter = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('common.group')} ELICOM
            </h3>
            <p className="text-gray-300 mb-4">
              Leader dans divers secteurs d'activité depuis 1995
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('home.ourCompanies')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company/imprimerie" className="text-gray-300 hover:text-white transition-colors">
                  Elicom Imprimerie
                </Link>
              </li>
              <li>
                <Link to="/company/cooperative" className="text-gray-300 hover:text-white transition-colors">
                  Elicom Coopérative
                </Link>
              </li>
              <li>
                <Link to="/company/sokomax" className="text-gray-300 hover:text-white transition-colors">
                  Sokomax
                </Link>
              </li>
              <li>
                <Link to="/company/tic" className="text-gray-300 hover:text-white transition-colors">
                  Elicom TIC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-300">123 Rue du Commerce, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-300">+221 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-gray-400" />
                <span className="text-gray-300">contact@elicom-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} {t('common.group')} ELICOM. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
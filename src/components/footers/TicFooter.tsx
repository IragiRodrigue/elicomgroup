import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Laptop, Code, Database, Shield } from 'lucide-react';

const TicFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">EG</div>
              <h3 className="text-xl font-bold">ELICOM TIC</h3>
            </div>
            <p className="text-purple-200 mb-4">
              Solutions technologiques innovantes et services informatiques de pointe depuis 1995
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services TIC */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code size={20} className="text-purple-400" />
              Nos Services
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Laptop size={16} className="text-purple-400" />
                <span className="text-purple-200">Développement Web</span>
              </li>
              <li className="flex items-center gap-2">
                <Database size={16} className="text-purple-400" />
                <span className="text-purple-200">Solutions Cloud</span>
              </li>
              <li className="flex items-center gap-2">
                <Shield size={16} className="text-purple-400" />
                <span className="text-purple-200">Cybersécurité</span>
              </li>
              <li className="flex items-center gap-2">
                <Code size={16} className="text-purple-400" />
                <span className="text-purple-200">Développement Mobile</span>
              </li>
            </ul>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/company/tic" className="text-purple-200 hover:text-white transition-colors">
                  Accueil TIC
                </Link>
              </li>
              <li>
                <Link to="/company/tic/about" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/company/tic/services" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/company/tic/team" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/company/tic/contact" className="text-purple-200 hover:text-white transition-colors">
                  {t('nav.contact')}
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
                <MapPin size={18} className="text-purple-400" />
                <span className="text-purple-200">Zone B, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-purple-400" />
                <span className="text-purple-200">+221 77 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-purple-400" />
                <span className="text-purple-200">tic@elicom-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm">
            &copy; {currentYear} Elicom TIC - {t('common.group')} ELICOM. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-purple-300 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-purple-300 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TicFooter;
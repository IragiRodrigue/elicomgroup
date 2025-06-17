import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Printer, FileText, Package, Palette } from 'lucide-react';

const ImprimerieFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">EG</div>
              <h3 className="text-xl font-bold">ELICOM IMPRIMERIE</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Services d'impression professionnels et solutions graphiques de qualité supérieure depuis 1995
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services Imprimerie */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Printer size={20} className="text-blue-400" />
              Nos Services
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FileText size={16} className="text-blue-400" />
                <span className="text-blue-200">Impression Offset</span>
              </li>
              <li className="flex items-center gap-2">
                <Package size={16} className="text-blue-400" />
                <span className="text-blue-200">Packaging</span>
              </li>
              <li className="flex items-center gap-2">
                <Palette size={16} className="text-blue-400" />
                <span className="text-blue-200">Design Graphique</span>
              </li>
              <li className="flex items-center gap-2">
                <Printer size={16} className="text-blue-400" />
                <span className="text-blue-200">Impression Numérique</span>
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
                <Link to="/company/imprimerie" className="text-blue-200 hover:text-white transition-colors">
                  Accueil Imprimerie
                </Link>
              </li>
              <li>
                <Link to="/company/imprimerie/about" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/company/imprimerie/services" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/company/imprimerie/team" className="text-blue-200 hover:text-white transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/company/imprimerie/contact" className="text-blue-200 hover:text-white transition-colors">
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
                <MapPin size={18} className="text-blue-400" />
                <span className="text-blue-200">Route de Rufisque, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-blue-400" />
                <span className="text-blue-200">+221 33 834 12 34</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-blue-400" />
                <span className="text-blue-200">imprimerie@elicom-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm">
            &copy; {currentYear} Elicom Imprimerie - {t('common.group')} ELICOM. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-blue-300 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-blue-300 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ImprimerieFooter;
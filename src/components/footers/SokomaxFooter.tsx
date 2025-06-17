import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ShoppingCart, Truck, Award, Zap } from 'lucide-react';

const SokomaxFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-red-900 to-rose-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg">EG</div>
              <h3 className="text-xl font-bold">SOKOMAX</h3>
            </div>
            <p className="text-red-200 mb-4">
              Distribution et commerce de produits de qualité, votre partenaire de confiance depuis 1995
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-red-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-red-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-red-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services Sokomax */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ShoppingCart size={20} className="text-red-400" />
              Nos Services
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ShoppingCart size={16} className="text-red-400" />
                <span className="text-red-200">Commerce de Gros</span>
              </li>
              <li className="flex items-center gap-2">
                <Truck size={16} className="text-red-400" />
                <span className="text-red-200">Distribution</span>
              </li>
              <li className="flex items-center gap-2">
                <Award size={16} className="text-red-400" />
                <span className="text-red-200">Produits Premium</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap size={16} className="text-red-400" />
                <span className="text-red-200">Livraison Rapide</span>
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
                <Link to="/company/sokomax" className="text-red-200 hover:text-white transition-colors">
                  Accueil Sokomax
                </Link>
              </li>
              <li>
                <Link to="/company/sokomax/about" className="text-red-200 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/company/sokomax/services" className="text-red-200 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/company/sokomax/team" className="text-red-200 hover:text-white transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/company/sokomax/contact" className="text-red-200 hover:text-white transition-colors">
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
                <MapPin size={18} className="text-red-400" />
                <span className="text-red-200">Marché Central, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-red-400" />
                <span className="text-red-200">+221 76 987 65 43</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-red-400" />
                <span className="text-red-200">sokomax@elicom-group.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-red-300 text-sm">
            &copy; {currentYear} Sokomax - {t('common.group')} ELICOM. {t('footer.rights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-red-300 hover:text-white text-sm transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-red-300 hover:text-white text-sm transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SokomaxFooter;
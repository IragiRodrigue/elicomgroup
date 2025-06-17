import React from 'react';
import { motion } from 'framer-motion';
import { 
  Printer, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';

const FooterImprimerie: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Réalisations', href: '#realisations' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Flyers & Prospectus',
    'Affiches & Posters',
    'Cartes de Visite',
    'Packaging & Étiquettes',
    'Supports Événementiels',
    'Impression de Luxe'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center space-x-3"
              >
                <div className="p-2 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg">
                  <Printer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Elicom</h3>
                  <p className="text-sm text-gray-300">Imprimerie</p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-300 leading-relaxed"
              >
                Spécialiste de l'impression professionnelle depuis plus de 15 ans. 
                Qualité, rapidité et service client au cœur de nos priorités.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-white/10 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg font-semibold mb-6"
              >
                Navigation
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Services */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg font-semibold mb-6"
              >
                Nos Services
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 text-sm">{service}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg font-semibold mb-6"
              >
                Contact
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <div>123 Rue de l'Impression</div>
                    <div>75010 Paris</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a 
                    href="tel:+33123456789" 
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a 
                    href="mailto:contact@elicom.fr" 
                    className="text-gray-300 text-sm hover:text-primary-400 transition-colors"
                  >
                    contact@elicom.fr
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <div>Lun-Ven: 8h-18h</div>
                    <div>Sam: 9h-12h</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-gray-300 text-sm"
              >
                © 2024 Elicom Imprimerie. Tous droits réservés.
              </motion.p>
              
              <div className="flex items-center space-x-6">
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  href="#"
                  className="text-gray-300 hover:text-primary-400 text-sm transition-colors"
                >
                  Mentions légales
                </motion.a>
                <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  href="#"
                  className="text-gray-300 hover:text-primary-400 text-sm transition-colors"
                >
                  Politique de confidentialité
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors group"
          aria-label="Retour en haut"
        >
          <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </footer>
  );
};

export default FooterImprimerie;
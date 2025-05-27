import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Building2, Briefcase, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data - replace with actual data from API
const mockCompanies = [
  { 
    id: '1', 
    name: 'Elicom Imprimerie', 
    slug: 'imprimerie', 
    primaryColor: '#2563eb',
    description: 'Solutions d\'impression de haute qualité pour tous vos besoins professionnels.',
    image: 'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: '2', 
    name: 'Elicom Coopérative', 
    slug: 'cooperative', 
    primaryColor: '#16a34a',
    description: 'Coopérative agricole offrant des produits locaux de qualité supérieure.',
    image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: '3', 
    name: 'Sokomax', 
    slug: 'sokomax', 
    primaryColor: '#dc2626',
    description: 'Solutions logistiques complètes pour optimiser votre chaîne d\'approvisionnement.',
    image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  { 
    id: '4', 
    name: 'Elicom TIC', 
    slug: 'tic', 
    primaryColor: '#9333ea',
    description: 'Technologies de l\'information et de la communication pour propulser votre entreprise.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [companies, setCompanies] = useState(mockCompanies);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t('home.welcome')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('home.description')}
            </p>
            <Link
              to="#companies"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md shadow-lg hover:bg-primary/90 transition-colors"
            >
              {t('home.discoverCompanies')}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              {t('company.about')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Le Groupe ELICOM, créé en 1995, est un conglomérat diversifié opérant dans plusieurs secteurs clés de l'économie sénégalaise. Notre engagement envers l'excellence, l'innovation et le développement durable nous a permis de devenir un acteur majeur sur le marché national et régional.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} className="text-primary dark:text-primary-light" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">25+</h3>
                <p className="text-gray-600 dark:text-gray-300">Années d'expérience</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">4+</h3>
                <p className="text-gray-600 dark:text-gray-300">Sociétés du groupe</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">150+</h3>
                <p className="text-gray-600 dark:text-gray-300">Employés dévoués</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">20+</h3>
                <p className="text-gray-600 dark:text-gray-300">Prix et certifications</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Companies Section */}
      <section id="companies" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('home.ourCompanies')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Découvrez les différentes entités qui composent le Groupe ELICOM, chacune spécialisée dans son domaine d'expertise.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {companies.map((company) => (
              <motion.div
                key={company.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={company.image} 
                    alt={company.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6 border-t-4" style={{ borderColor: company.primaryColor }}>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {company.description}
                  </p>
                  <Link
                    to={`/company/${company.slug}`}
                    className="inline-flex items-center text-primary dark:text-primary-light hover:underline"
                  >
                    {t('home.learnMore')}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Rejoignez l'aventure ELICOM
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Vous êtes intéressé par nos services ou souhaitez collaborer avec nous ? N'hésitez pas à nous contacter !
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-md shadow-lg hover:bg-gray-100 transition-colors"
          >
            {t('company.contactUs')}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
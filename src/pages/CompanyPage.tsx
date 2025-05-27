import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Mock data - replace with actual data from API
const mockCompanies = [
  { 
    id: '1', 
    name: 'Elicom Imprimerie', 
    slug: 'imprimerie', 
    primaryColor: '#2563eb',
    secondaryColor: '#3b82f6',
    accentColor: '#f97316',
    description: 'Solutions d\'impression de haute qualité pour tous vos besoins professionnels.',
    heroImage: 'https://images.pexels.com/photos/6372358/pexels-photo-6372358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sections: [
      {
        id: '1',
        type: 'about',
        title: 'À propos',
        content: 'Elicom Imprimerie est spécialisée dans l\'impression numérique et offset de haute qualité depuis plus de 15 ans. Nous mettons notre expertise au service de nos clients pour leur offrir des solutions d\'impression adaptées à leurs besoins.',
        image: 'https://images.pexels.com/photos/5696555/pexels-photo-5696555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: '2',
        type: 'services',
        title: 'Nos Services',
        services: [
          {
            title: 'Impression Numérique',
            description: 'Impression de haute qualité pour les petites et moyennes quantités',
            icon: 'Printer'
          },
          {
            title: 'Impression Offset',
            description: 'Impression de grande qualité pour les grands tirages',
            icon: 'FileText'
          },
          {
            title: 'Conception Graphique',
            description: 'Services de design professionnel pour vos projets',
            icon: 'Palette'
          },
          {
            title: 'Finition',
            description: 'Services de reliure, de découpe et de finition',
            icon: 'Scissors'
          }
        ]
      },
      {
        id: '3',
        type: 'team',
        title: 'Notre Équipe',
        team: [
          {
            name: 'Jean Dupont',
            position: 'Directeur',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          },
          {
            name: 'Marie Martin',
            position: 'Responsable de Production',
            image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          },
          {
            name: 'Paul Robert',
            position: 'Designer en Chef',
            image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          },
          {
            name: 'Sophie Dubois',
            position: 'Responsable Commerciale',
            image: 'https://images.pexels.com/photos/4100653/pexels-photo-4100653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
        ]
      },
      {
        id: '4',
        type: 'contact',
        title: 'Contact',
        address: '123 Rue de l\'Imprimerie, Dakar, Sénégal',
        phone: '+221 123 456 789',
        email: 'contact@elicom-imprimerie.com',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123488.40236461!2d-17.544236299999998!3d14.6929855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar%2C%20Senegal!5e0!3m2!1sen!2sus!4v1633364041044!5m2!1sen!2sus'
      }
    ]
  },
  { 
    id: '2', 
    name: 'Elicom Coopérative', 
    slug: 'cooperative', 
    primaryColor: '#16a34a',
    secondaryColor: '#22c55e',
    accentColor: '#f97316',
    description: 'Coopérative agricole offrant des produits locaux de qualité supérieure.',
    heroImage: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sections: [
      {
        id: '1',
        type: 'about',
        title: 'À propos',
        content: 'Elicom Coopérative rassemble des agriculteurs locaux pour produire et distribuer des produits agricoles de haute qualité. Notre mission est de promouvoir l\'agriculture durable et de soutenir les communautés rurales.',
        image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
  }
];

// Dynamically import Lucide icons
const importIcon = async (iconName: string) => {
  try {
    const module = await import('lucide-react');
    return module[iconName as keyof typeof module];
  } catch (error) {
    console.error(`Error importing icon: ${iconName}`, error);
    return null;
  }
};

const CompanyPage: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState<Record<string, any>>({});
  
  // Fetch company data
  useEffect(() => {
    const fetchCompany = async () => {
      // Simulate API call
      const foundCompany = mockCompanies.find(c => c.slug === slug);
      setCompany(foundCompany || null);
      setLoading(false);

      // Load icons if company has services
      if (foundCompany?.sections) {
        const servicesSection = foundCompany.sections.find((s: any) => s.type === 'services');
        if (servicesSection?.services) {
          const iconPromises = servicesSection.services.map(async (service: any) => {
            const IconComponent = await importIcon(service.icon);
            return { [service.icon]: IconComponent };
          });
          
          const loadedIcons = await Promise.all(iconPromises);
          const iconsObject = loadedIcons.reduce((acc, curr) => ({ ...acc, ...curr }), {});
          setIcons(iconsObject);
        }
      }
    };

    fetchCompany();
  }, [slug]);
  
  // Set CSS variables for company colors
  useEffect(() => {
    if (company) {
      document.documentElement.style.setProperty('--color-primary', company.primaryColor);
      document.documentElement.style.setProperty('--color-secondary', company.secondaryColor);
      document.documentElement.style.setProperty('--color-accent', company.accentColor);
      
      // Clean up when component unmounts
      return () => {
        document.documentElement.style.removeProperty('--color-primary');
        document.documentElement.style.removeProperty('--color-secondary');
        document.documentElement.style.removeProperty('--color-accent');
      };
    }
  }, [company]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!company) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Company not found
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          The company you are looking for does not exist.
        </p>
      </div>
    );
  }
  
  const renderSection = (section: any) => {
    // About Section
    if (section.type === 'about') {
      return (
        <section key={section.id} className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {section.content}
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
      );
    }
    
    // Services Section
    if (section.type === 'services') {
      return (
        <section key={section.id} className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {section.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.services.map((service: any, index: number) => {
                const IconComponent = icons[service.icon];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                  >
                    <div 
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${company.primaryColor}20` }}
                    >
                      {IconComponent && (
                        <IconComponent 
                          size={32} 
                          className="text-primary dark:text-primary-light" 
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      );
    }
    
    // Team Section
    if (section.type === 'team') {
      return (
        <section key={section.id} className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {section.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.team.map((member: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {member.position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    // Contact Section
    if (section.type === 'contact') {
      return (
        <section key={section.id} className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {section.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {t('company.contactUs')}
                </h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Votre email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Envoyer
                  </button>
                </form>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Informations de contact
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="mr-3 text-primary dark:text-primary-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      {section.address}
                    </p>
                    
                    <p className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="mr-3 text-primary dark:text-primary-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      {section.phone}
                    </p>
                    
                    <p className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="mr-3 text-primary dark:text-primary-light">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      {section.email}
                    </p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md h-96">
                  <iframe
                    src={section.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Map"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      );
    }
    
    return null;
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${company.heroImage}")`,
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
              {company.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {company.description}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Company Sections */}
      {company.sections.map((section: any) => renderSection(section))}
    </div>
  );
};

export default CompanyPage;
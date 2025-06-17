import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const PortfolioImprimerie: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Campagne Restaurant Le Gourmet',
      category: 'Flyers & Menus',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: '5000 flyers A5 + 200 menus plastifiés',
      tags: ['Flyers', 'Menus', 'Plastification']
    },
    {
      title: 'Identité Visuelle StartUp Tech',
      category: 'Cartes de Visite',
      image: 'https://images.pexels.com/photos/6476587/pexels-photo-6476587.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: '1000 cartes premium avec vernis sélectif',
      tags: ['Cartes', 'Premium', 'Vernis']
    },
    {
      title: 'Salon de l\'Automobile 2024',
      category: 'Grands Formats',
      image: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Kakémonos, banderoles et signalétique',
      tags: ['Kakémonos', 'Banderoles', 'Signalétique']
    },
    {
      title: 'Collection Packaging Bio',
      category: 'Packaging',
      image: 'https://images.pexels.com/photos/5625120/pexels-photo-5625120.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Emballages écologiques personnalisés',
      tags: ['Packaging', 'Écologique', 'Sur-mesure']
    },
    {
      title: 'Festival Jazz & Blues',
      category: 'Affiches',
      image: 'https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: '500 affiches A2 résistantes aux intempéries',
      tags: ['Affiches', 'A2', 'Résistant']
    },
    {
      title: 'Livre d\'Art Prestige',
      category: 'Impression de Luxe',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: '100 exemplaires avec dorure à chaud',
      tags: ['Livre', 'Dorure', 'Luxe']
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="realisations" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Nos Dernières
            <span className="text-primary-600"> Réalisations</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Découvrez quelques-uns de nos projets récents qui illustrent notre expertise 
            et notre engagement envers la qualité d'impression.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white/90 rounded-full text-secondary-800 hover:bg-white transition-colors"
                  >
                    <Eye className="h-5 w-5" />
                  </motion.button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir plus de réalisations
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioImprimerie;
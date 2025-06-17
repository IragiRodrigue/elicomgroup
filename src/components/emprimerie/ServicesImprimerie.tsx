import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FileText, 
  Image, 
  CreditCard, 
  Package, 
  Calendar, 
  Award,
  Clock,
  Shield
} from 'lucide-react';

const ServicesImprimerie: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FileText,
      title: 'Flyers & Prospectus',
      description: 'Impression haute qualité sur tous supports. Formats A6, A5, A4 et formats personnalisés.',
      features: ['Papier 135g à 350g', 'Finition mate ou brillante', 'Livraison 24-48h'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Image,
      title: 'Affiches & Posters',
      description: 'Grande format jusqu\'à A0. Idéal pour vos campagnes publicitaires et événements.',
      features: ['Jusqu\'à A0 (84x119cm)', 'Papier photo ou standard', 'Résistant aux intempéries'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: CreditCard,
      title: 'Cartes de Visite',
      description: 'Impression premium pour votre image professionnelle. Multiples finitions disponibles.',
      features: ['Papier premium', 'Vernis sélectif', 'Découpe personnalisée'],
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Package,
      title: 'Packaging & Étiquettes',
      description: 'Solutions d\'emballage personnalisées pour vos produits. Design et impression inclus.',
      features: ['Design sur mesure', 'Tous formats', 'Finitions spéciales'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Calendar,
      title: 'Supports Événementiels',
      description: 'Banderoles, kakémonos, stands... Tout pour vos événements professionnels.',
      features: ['Installation possible', 'Matériaux durables', 'Formats XXL'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Impression de Luxe',
      description: 'Prestations haut de gamme avec finitions exceptionnelles pour vos projets prestigieux.',
      features: ['Dorure à chaud', 'Gaufrage', 'Papiers d\'exception'],
      color: 'from-rose-500 to-rose-600'
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Livraison Express',
      description: 'Livraison garantie en 24-48h pour tous vos projets urgents'
    },
    {
      icon: Shield,
      title: 'Qualité Garantie',
      description: 'Satisfaction garantie ou remboursement. Plus de 15 ans d\'expérience'
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
    <section id="services" className="py-20 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6">
            Nos Services
            <span className="text-primary-600"> d'Impression</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Une gamme complète de services d'impression professionnelle pour répondre 
            à tous vos besoins, de la carte de visite aux grands formats.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl"
            >
              <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                <advantage.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesImprimerie;
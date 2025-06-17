import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Users, 
  BarChart3,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const ServicesTic: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Solutions Cloud',
      description: 'Infrastructure cloud sécurisée et évolutive pour vos applications critiques.',
      features: ['Migration vers le cloud', 'Sauvegarde automatique', 'Accès 24/7'],
      color: 'from-[#3b82f6] to-[#2563eb]',
    },
    {
      icon: Smartphone,
      title: 'Applications Mobiles',
      description: 'Développement d\'applications mobiles natives pour iOS et Android.',
      features: ['Interface intuitive', 'Performance optimisée', 'Support multiplateforme'],
      color: 'from-[#10b981] to-[#059669]',
    },
    {
      icon: Database,
      title: 'Gestion de Données',
      description: 'Solutions de base de données robustes pour la gestion de vos informations.',
      features: ['Sécurité renforcée', 'Analyse en temps réel', 'Intégration facile'],
      color: 'from-[#8b5cf6] to-[#7c3aed]',
    },
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection complète contre les menaces numériques modernes.',
      features: ['Audit de sécurité', 'Formation du personnel', 'Monitoring 24/7'],
      color: 'from-[#ef4444] to-[#dc2626]',
    },
    {
      icon: Users,
      title: 'Formation TIC',
      description: 'Programmes de formation adaptés à tous les niveaux de compétence.',
      features: ['Formation personnalisée', 'Certification', 'Support continu'],
      color: 'from-[#f97316] to-[#ea580c]',
    },
    {
      icon: BarChart3,
      title: 'Analytique Business',
      description: 'Outils d\'analyse pour optimiser vos performances et décisions.',
      features: ['Tableaux de bord', 'Rapports automatisés', 'Insights actionables'],
      color: 'from-[#14b8a6] to-[#0d9488]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-[#6b21a8]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous offrons une gamme complète de solutions TIC adaptées aux besoins 
            spécifiques des entreprises et administrations africaines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#6b21a8] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-[#6b21a8] hover:text-[#9333ea] font-semibold transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#6b21a8] to-[#9333ea] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à transformer votre entreprise ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation gratuite et découvrez comment 
              nos solutions peuvent accélérer votre croissance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#facc15] text-[#6b21a8] font-semibold px-8 py-4 rounded-full hover:bg-[#facc15]/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>Consultation gratuite</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTic;
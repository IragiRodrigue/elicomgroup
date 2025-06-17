import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users, CheckCircle, Building, Droplets, Truck, GraduationCap, Guitar as Hospital, Landmark } from 'lucide-react';

const PortfolioTic: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Système de Gestion BACOBU',
      client: 'BACOBU (Banque Coopérative du Burundi)',
      category: 'Services Bancaires',
      description: 'Développement d\'un système complet de gestion bancaire avec modules de crédit, épargne et comptabilité.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Landmark,
      year: '2023',
      location: 'Burundi',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      features: [
        'Gestion des comptes clients',
        'Système de crédit automatisé',
        'Reporting financier en temps réel',
        'Interface mobile responsive'
      ],
      results: {
        efficiency: '+65%',
        users: '2,500+',
        transactions: '50K+/mois'
      }
    },
    {
      id: 2,
      title: 'Plateforme Digitale REGIDESO',
      client: 'REGIDESO (Régie de Distribution d\'Eau)',
      category: 'Services Publics',
      description: 'Solution complète de gestion de la distribution d\'eau avec facturation automatisée et suivi en temps réel.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Droplets,
      year: '2023',
      location: 'RD Congo',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'IoT'],
      features: [
        'Gestion des abonnés',
        'Facturation automatique',
        'Suivi de consommation IoT',
        'Paiement mobile intégré'
      ],
      results: {
        efficiency: '+80%',
        users: '15,000+',
        coverage: '12 villes'
      }
    },
    {
      id: 3,
      title: 'ERP Hospitalier CHU Kigali',
      client: 'Centre Hospitalier Universitaire de Kigali',
      category: 'Santé',
      description: 'Système intégré de gestion hospitalière avec dossiers patients électroniques et gestion des stocks.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Hospital,
      year: '2022',
      location: 'Rwanda',
      technologies: ['Angular', 'Spring Boot', 'Oracle', 'HL7'],
      features: [
        'Dossiers patients électroniques',
        'Gestion des rendez-vous',
        'Pharmacie et stocks',
        'Facturation médicale'
      ],
      results: {
        efficiency: '+70%',
        patients: '5,000+/mois',
        departments: '25'
      }
    },
    {
      id: 4,
      title: 'Système Logistique TRANSCO',
      client: 'TRANSCO Logistics',
      category: 'Transport & Logistique',
      description: 'Plateforme de gestion de flotte et optimisation des routes avec tracking GPS en temps réel.',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Truck,
      year: '2022',
      location: 'Côte d\'Ivoire',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'GPS API'],
      features: [
        'Tracking GPS en temps réel',
        'Optimisation des routes',
        'Gestion de maintenance',
        'Reporting automatisé'
      ],
      results: {
        efficiency: '+45%',
        vehicles: '200+',
        routes: '50+ optimisées'
      }
    },
    {
      id: 5,
      title: 'Plateforme E-Learning UNIVAC',
      client: 'Université Virtuelle Africaine du Congo',
      category: 'Éducation',
      description: 'Système complet d\'apprentissage en ligne avec classes virtuelles et évaluations automatisées.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: GraduationCap,
      year: '2021',
      location: 'Congo',
      technologies: ['Moodle', 'PHP', 'MySQL', 'WebRTC'],
      features: [
        'Classes virtuelles interactives',
        'Évaluations automatisées',
        'Suivi de progression',
        'Certificats numériques'
      ],
      results: {
        students: '3,000+',
        courses: '150+',
        completion: '85%'
      }
    },
    {
      id: 6,
      title: 'Solution RH MINIFIN',
      client: 'Ministère des Finances du Gabon',
      category: 'Administration Publique',
      description: 'Système intégré de gestion des ressources humaines avec paie automatisée et gestion des carrières.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Building,
      year: '2021',
      location: 'Gabon',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Redis'],
      features: [
        'Gestion des employés',
        'Paie automatisée',
        'Gestion des congés',
        'Évaluations de performance'
      ],
      results: {
        employees: '5,000+',
        efficiency: '+60%',
        departments: '15'
      }
    }
  ];

  const stats = [
    { number: '50+', label: 'Projets réalisés', icon: CheckCircle },
    { number: '15', label: 'Pays couverts', icon: MapPin },
    { number: '100K+', label: 'Utilisateurs actifs', icon: Users },
    { number: '98%', label: 'Satisfaction client', icon: CheckCircle },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
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
            Nos <span className="text-[#6b21a8]">Réalisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-uns de nos projets phares qui ont transformé 
            le paysage numérique de nos clients à travers l'Afrique.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <Icon className="w-8 h-8 text-[#6b21a8] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#6b21a8] mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.year}</span>
                        <MapPin className="w-4 h-4 ml-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Icon */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#6b21a8] to-[#9333ea] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="inline-block px-3 py-1 bg-[#6b21a8]/10 text-[#6b21a8] text-sm font-medium rounded-full mb-4">
                    {project.category}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-[#6b21a8] font-semibold mb-4">
                    {project.client}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Fonctionnalités clés :</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#6b21a8] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Résultats :</h4>
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(project.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="bg-gray-50 px-4 py-2 rounded-lg">
                          <div className="text-lg font-bold text-[#6b21a8]">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#9333ea]/10 text-[#9333ea] text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-[#6b21a8] hover:text-[#9333ea] font-semibold transition-colors"
                  >
                    <span>Voir les détails</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

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
              Votre projet sera le prochain ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et transformez votre vision 
              en réalité numérique avec nos solutions sur-mesure.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#facc15] text-[#6b21a8] font-semibold px-8 py-4 rounded-full hover:bg-[#facc15]/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>Démarrer mon projet</span>
              <ExternalLink size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioTic;
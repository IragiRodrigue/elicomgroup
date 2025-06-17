import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const AboutImprimerie: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { number: '15+', label: 'Années d\'expérience', icon: Clock },
    { number: '5000+', label: 'Clients satisfaits', icon: Users },
    { number: '50k+', label: 'Projets réalisés', icon: Award },
    { number: '24h', label: 'Délai moyen', icon: Heart }
  ];

  return (
    <section id="apropos" className="py-20 lg:py-32 bg-gradient-to-br from-secondary-50 to-primary-50" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-secondary-900 mb-6">
                À Propos de
                <span className="text-primary-600"> Notre Histoire</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Depuis plus de 15 ans, <strong>Elicom Imprimerie</strong> accompagne les entreprises, 
                  associations et particuliers dans leurs projets d'impression. Notre expertise et notre 
                  passion pour la qualité nous ont permis de devenir une référence dans le domaine.
                </p>
                <p>
                  Nous combinons savoir-faire traditionnel et technologies modernes pour vous offrir 
                  des solutions d'impression innovantes, respectueuses de l'environnement et toujours 
                  à la hauteur de vos attentes.
                </p>
                <p>
                  <em>Notre mission :</em> transformer vos idées en réalisations concrètes avec la plus 
                  haute qualité d'impression, dans les délais les plus courts.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nous contacter
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-600 text-secondary-600 font-semibold rounded-lg hover:bg-secondary-600 hover:text-white transition-all duration-300"
                onClick={() => document.querySelector('#realisations')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir nos réalisations
              </motion.button>
            </div>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="inline-flex p-3 bg-primary-100 rounded-full mb-4">
                    <stat.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-secondary-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quality Promise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-center">
                <div className="inline-flex p-4 bg-accent-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  Notre Engagement Qualité
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Satisfaction garantie à 100% ou remboursement. 
                  Nos équipes s'engagent à respecter vos délais et à vous livrer 
                  des impressions d'une qualité irréprochable.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutImprimerie;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Target, Heart } from 'lucide-react';

const AboutTic: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projets réalisés', icon: Target },
    { number: '50+', label: 'Clients satisfaits', icon: Heart },
    { number: '15', label: 'Pays en Afrique', icon: Globe },
    { number: '10+', label: 'Années d\'expérience', icon: Award },
  ];

  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Nous travaillons main dans la main avec nos clients pour comprendre leurs besoins uniques.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Nous adoptons les dernières technologies pour créer des solutions avant-gardistes.',
    },
    {
      icon: Globe,
      title: 'Impact Local',
      description: 'Nos solutions sont conçues spécifiquement pour le contexte africain.',
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
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
            À propos d'<span className="text-[#6b21a8]">Elicom TIC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis plus d'une décennie, nous sommes les pionniers de la transformation 
            numérique en Afrique, créant des solutions qui font la différence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Notre mission : Démocratiser les TIC en Afrique
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Elicom TIC a été fondée avec une vision claire : rendre les technologies 
                de l'information et de la communication accessibles et adaptées aux réalités 
                africaines. Nous croyons fermement que la technologie peut être un levier 
                puissant pour le développement économique et social du continent.
              </p>
              
              <p>
                Notre équipe multidisciplinaire combine expertise technique internationale 
                et connaissance approfondie des marchés locaux. Cette approche unique nous 
                permet de créer des solutions qui répondent véritablement aux besoins de 
                nos clients tout en respectant leurs contraintes budgétaires et opérationnelles.
              </p>
              
              <p>
                Nous nous engageons à accompagner nos clients dans leur transformation 
                numérique, de la conception à la mise en œuvre, en passant par la formation 
                et le support technique. Notre objectif est de créer des partenariats 
                durables basés sur la confiance et les résultats concrets.
              </p>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#6b21a8]/10 via-[#9333ea]/10 to-[#facc15]/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-4 bg-white rounded-xl shadow-sm"
                    >
                      <Icon className="w-8 h-8 text-[#6b21a8] mx-auto mb-3" />
                      <div className="text-3xl font-bold text-[#6b21a8] mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-20 h-20 border-2 border-[#facc15]/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-[#6b21a8]/30 rounded-full"
            />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos <span className="text-[#6b21a8]">Valeurs</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6b21a8] to-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTic;
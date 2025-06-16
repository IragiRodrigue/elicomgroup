import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Target, Eye, Users, Award } from 'lucide-react';

const ElicomHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Définition des données pour le carrousel de la section Hero
  const slides = [
    {
      title: "Elicom Group",
      subtitle: "Transformation Digitale",
      description: "Infrastructures cloud sécurisées et optimisées pour votre croissance",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      color: "#0066ff",
      overlay: "rgba(0, 102, 255, 0.3)"
    },
    {
      title: "Elicom Coopérative",
      subtitle: "Protection Avancée",
      description: "Sécurité de vos données avec nos solutions sur-mesure",
      image: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      color: "#9d4edd",
      overlay: "rgba(157, 78, 221, 0.3)"
    },
    {
      title: "SokoMax",
      subtitle: "Innovation Technologique",
      description: "Lever le potentiel de l'IA pour votre entreprise",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      color: "#00b4d8",
      overlay: "rgba(0, 180, 216, 0.3)"
    }
  ];

  // Effet pour le changement automatique des diapositives du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Change de diapositive toutes les 8 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Section Hero - Carrousel pleine page */}
      <section id="home" className="relative h-screen w-full overflow-hidden bg-gray-900 text-white font-['Montserrat']">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            {/* Image de fond du carrousel */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
            {/* Calque de couleur superposé à l'image */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(135deg, ${slides[currentSlide].color}20, transparent)`
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Effets visuels animés (formes floues) */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: slides[currentSlide].color }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: slides[currentSlide].color }}
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Contenu principal de la section Hero (titres, description, boutons) */}
        <div className="relative h-full w-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <motion.p
                  className="text-lg md:text-xl font-medium mb-4 text-blue-400 uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  style={{ textShadow: `0 2px 10px rgba(0,0,0,0.3)` }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.button
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 hover:shadow-xl"
                    style={{
                      boxShadow: `0 0 20px ${slides[currentSlide].color}40`,
                      minWidth: '200px'
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      Découvrir
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  <motion.button
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-gray-900"
                    style={{ minWidth: '200px' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Voir la démo
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Contrôles du slider (indicateurs de diapositive) */}
        <div className="absolute bottom-8 left-8 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation du slider (flèches) */}
        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          <motion.button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Section Nos Valeurs */}
      <section id="valeurs" className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-800 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action et définissent notre engagement envers nos clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Objectif",
                description: "La création, la diversification et la promotion de l'emploi en permettant à la société burundaise d'accéder et de bénéficier au grand maximum de ses services et produits à travers ses départements d'intervention.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Eye,
                title: "Vision",
                description: "Contribuer à la lutte contre la pauvreté en promouvant l'emploi et réduire le chômage à travers la diversification de services et des produits désirés par tous les demandeurs locaux et étrangers.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Users,
                title: "Satisfaction Client",
                description: "Nous plaçons nos clients au cœur de tout ce que nous faisons, en nous efforçant de dépasser leurs attentes à chaque interaction.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Award,
                title: "Qualité et Excellence",
                description: "Nous nous engageons à fournir des services et des produits de la plus haute qualité, en visant l'excellence dans tout ce que nous entreprenons.",
                color: "from-orange-500 to-orange-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full group-hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="apropos" className="py-20 bg-white text-gray-800 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Qui nous sommes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'histoire et la mission d'ELICOM, votre partenaire de confiance depuis 2008
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed mb-8 text-gray-600">
                ELICOM est une société commerciale opérant au Burundi depuis 2008 et qui a pour mission l'exécution des travaux divers. Elle effectue ses missions à travers ses départements de Génie-civil, d'Imprimerie, de TIC, et donne des prestations de service à titre de contrat aux particuliers et aux sociétés par son département de Courtage Commercial.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "15+", label: "Années d'expérience" },
                  { number: "500+", label: "Projets réalisés" },
                  { number: "100+", label: "Clients satisfaits" },
                  { number: "4", label: "Départements" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-blue-50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Notre équipe au travail" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section id="equipe" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les professionnels passionnés qui donnent vie à vos projets
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Nom de l'équipier 1",
                role: "Rôle de l'équipier 1",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              },
              {
                name: "Nom de l'équipier 2",
                role: "Rôle de l'équipier 2",
                image: "https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              },
              {
                name: "Nom de l'équipier 3",
                role: "Rôle de l'équipier 3",
                image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group-hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full group-hover:from-blue-600/40 transition-all duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Blogue */}
      <section id="blogue" className="py-20 bg-white text-gray-800 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Blogue</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos derniers articles et insights sur les tendances technologiques
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Titre de l'article 1",
                description: "Une courte description de l'article 1 qui présente le contenu de manière engageante.",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
              },
              {
                title: "Titre de l'article 2",
                description: "Une courte description de l'article 2 qui présente le contenu de manière engageante.",
                image: "https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
              },
              {
                title: "Titre de l'article 3",
                description: "Une courte description de l'article 3 qui présente le contenu de manière engageante.",
                image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <motion.a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      Lire plus
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section id="partenaires" className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-800 font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Partenaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ils nous font confiance et collaborent avec nous pour créer l'excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[1, 2, 3, 4, 5].map((partner, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group-hover:-translate-y-1">
                  <img
                    src={`https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop&text=Logo+${partner}`}
                    alt={`Logo du partenaire ${partner}`}
                    className="max-h-16 mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white font-['Montserrat']">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Prêt à démarrer votre projet ? Notre équipe est là pour vous accompagner
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-blue-300 font-medium">Adresse</p>
                        <p className="text-gray-300">BUJUMBURA-BURUNDI,</p>
                        <p className="text-gray-300">ROHERO II, Avenue de l'Amitié N°6,</p>
                        <p className="text-gray-300">B.P : 3657 Bujumbura.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-blue-300 font-medium">Email</p>
                        <a href="mailto:info@elicom.bi" className="text-gray-300 hover:text-white transition-colors">
                          info@elicom.bi
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-blue-300 font-medium">Téléphone</p>
                        <p className="text-gray-300">Tél. mobile : +257 75 122 222</p>
                        <p className="text-gray-300">Tél. fixe : +257 22 27 86 03</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Formulaire de contact</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Nom *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      className="block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      rows={4}
                      className="block w-full rounded-lg border-gray-300 shadow-sm transition-all duration-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer le message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElicomHero;
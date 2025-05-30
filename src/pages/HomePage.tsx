import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ElicomHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Définition des données pour le carrousel de la section Hero
  const slides = [
    {
      title: "Elicom Group",
      subtitle: "Transformation Digitale",
      description: "Infrastructures cloud sécurisées et optimisées pour votre croissance",
      image: "https://elicom.bi/img/1920x1080/05.jpg",
      color: "#0066ff",
      overlay: "rgba(0, 102, 255, 0.3)"
    },
    {
      title: "Elicom Coopérative",
      subtitle: "Protection Avancée",
      description: "Sécurité de vos données avec nos solutions sur-mesure",
      image: "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg",
      color: "#9d4edd",
      overlay: "rgba(157, 78, 221, 0.3)"
    },
    {
      title: "SokoMax",
      subtitle: "Innovation Technologique",
      description: "Lever le potentiel de l'IA pour votre entreprise",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      color: "#00b4d8",
      overlay: "rgba(0, 180, 216, 0.3)"
    }
  ];

  // Effet pour le changement automatique des diapositives du carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change de diapositive toutes les 10 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [slides.length]);

  return (
    <>
      {/* Section Hero - Carrousel pleine page */}
      <div className="relative h-screen w-full mt-[-80px] overflow-hidden bg-gray-900 text-white font-['Montserrat']">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {/* Image de fond du carrousel */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
                filter: "brightness(0.7)" // Assombrit l'image pour une meilleure lisibilité du texte
              }}
            />
            {/* Calque de couleur superposé à l'image */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, ${slides[currentSlide].overlay}, transparent)`
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
              duration: 15,
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
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>

        {/* Contenu principal de la section Hero (titres, description, boutons) */}
        <div className="relative h-full w-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.h4
                  className="text-lg md:text-xl font-medium mb-4 text-white uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.h4>

                <motion.h1
                  className="text-5xl md:text-7xl font-extrabold mb-5 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ textShadow: `0 2px 10px rgba(0,0,0,0.3)` }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="text-base md:text-xl mb-10 text-gray-100 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <button
                    className="relative px-8 py-4 bg-white text-gray-900 font-semibold uppercase tracking-wider rounded-full overflow-hidden group transition-all duration-500 hover:shadow-xl"
                    style={{
                      boxShadow: `0 0 20px ${slides[currentSlide].color}`,
                      minWidth: '200px'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Découvrir
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1  0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>

                  <button
                    className="relative px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-wider rounded-full overflow-hidden group transition-all duration-500 hover:bg-white hover:bg-opacity-10"
                    style={{ minWidth: '200px' }}
                  >
                    <span className="relative z-10">Contact</span>
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Contrôles du slider (indicateurs de diapositive) */}
        <div className="absolute bottom-10 left-8 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-gray-400'}`}
            />
          ))}
        </div>

        {/* Navigation du slider (flèches) */}
        <div className="absolute right-8 bottom-10 z-20 flex gap-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-3 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Section Nos Valeurs */}
      <section id="valeurs" className="py-20 bg-gray-100 text-gray-800 font-['Montserrat']">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Objectif</h3>
              <p>La création, la diversification et la promotion de l’emploi en permettant à la société burundaise d’accéder et de bénéficier au grand maximum de ses services et produits à travers ses départements d’intervention.</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p>Contribuer à la lutte contre la pauvreté en promouvant l’emploi et réduire le chômage à travers la diversification de services et des produits désirés par tous les demandeurs locaux et étrangers.</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Satisfaction Client</h3>
              <p>Nous plaçons nos clients au cœur de tout ce que nous faisons, en nous efforçant de dépasser leurs attentes à chaque interaction.</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Qualité et Excellence</h3>
              <p>Nous nous engageons à fournir des services et des produits de la plus haute qualité, en visant l'excellence dans tout ce que nous entreprenons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="apropos" className="py-20 bg-gray-200 text-gray-800 font-['Montserrat']">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Qui nous sommes</h2>
          <div className="md:flex md:items-center md:justify-center">
            <div className="md:w-1/2 pr-8">
              <p className="text-lg leading-relaxed mb-6">
                ELICOM est une société commerciale opérant au Burundi depuis 2008 et qui a pour mission l’exécution des travaux divers. Elle effectue ses missions à travers ses départements de Génie-civil, d’Imprimerie, de TIC, et donne des prestations de service à titre de contrat aux particuliers et aux sociétés par son département de Courtage Commercial.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://i.ibb.co/7bMgJVF/business-meeting.jpg" alt="[Image of business meeting]" className="rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Équipe */}
      <section id="equipe" className="py-20 bg-gray-100 text-gray-800 font-['Montserrat']">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <img src="https://i.ibb.co/Wn4P08R/handsome-businessman-suit-standing-office-with-city-skyline-background.jpg" alt="[Image of professional person]" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nom de l'équipier 1</h3>
              <p className="text-gray-600">Rôle de l'équipier 1</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <img src="https://i.ibb.co/v17401C/portrait-smiling-indian-businessman-with-folded-arms.jpg" alt="[Image of professional person]" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nom de l'équipier 2</h3>
              <p className="text-gray-600">Rôle de l'équipier 2</p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <img src="https://i.ibb.co/QMvS71W/confident-young-man-office.jpg" alt="[Image of professional person]" className="w-32 h-32 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nom de l'équipier 3</h3>
              <p className="text-gray-600">Rôle de l'équipier 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blogue */}
      <section id="blogue" className="py-20 bg-gray-200 text-gray-800 font-['Montserrat']">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Blogue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Titre de l'article 1</h3>
              <p className="text-gray-600">Une courte description de l'article 1.</p>
              <a href="#" className="text-blue-500 hover:underline">Lire plus</a>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Titre de l'article 2</h3>
              <p className="text-gray-600">Une courte description de l'article 2.</p>
              <a href="#" className="text-blue-500 hover:underline">Lire plus</a>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Titre de l'article 3</h3>
              <p className="text-gray-600">Une courte description de l'article 3.</p>
              <a href="#" className="text-blue-500 hover:underline">Lire plus</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section id="partenaires" className="py-20 bg-gray-100 text-gray-800 font-['Montserrat']">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-center">
            {/* Remplacez les URL_DU_LOGO_X par les URL réelles de vos logos */}
            <div className="p-4 bg-white rounded-md shadow-md text-center">
              <img src="https://placehold.co/150x80/cccccc/333333?text=Logo+1" alt="Logo du partenaire 1" className="max-h-20 mx-auto" />
            </div>
            <div className="p-4 bg-white rounded-md shadow-md text-center">
              <img src="https://placehold.co/150x80/cccccc/333333?text=Logo+2" alt="Logo du partenaire 2" className="max-h-20 mx-auto" />
            </div>
            <div className="p-4 bg-white rounded-md shadow-md text-center">
              <img src="https://placehold.co/150x80/cccccc/333333?text=Logo+3" alt="Logo du partenaire 3" className="max-h-20 mx-auto" />
            </div>
            <div className="p-4 bg-white rounded-md shadow-md text-center">
              <img src="https://placehold.co/150x80/cccccc/333333?text=Logo+4" alt="Logo du partenaire 4" className="max-h-20 mx-auto" />
            </div>
            <div className="p-4 bg-white rounded-md shadow-md text-center">
              <img src="https://placehold.co/150x80/cccccc/333333?text=Logo+5" alt="Logo du partenaire 5" className="max-h-20 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gray-200 text-gray-800 font-['Montserrat']">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
              <p className="mb-2">BUJUMBURA-BURUNDI,</p>
              <p className="mb-2">ROHERO II, Avenue de l'Amitié N°6,</p>
              <p className="mb-2">B.P : 3657 Bujumbura.</p>
              <p className="mb-2">Email: <a href="mailto:info@elicom.bi" className="text-blue-500">info@elicom.bi</a></p>
              <p className="mb-2">Tél. mobil : +257 75 122 222</p>
              <p>Tél. fixe : +257 22 27 86 03</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Formulaire de contact</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElicomHero; // Exportez le composant principal sous le nom ElicomHero

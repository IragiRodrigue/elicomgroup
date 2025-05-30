import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ElicomHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full  mt-[-80px] overflow-hidden bg-gray-900 text-white font-['Montserrat']">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              filter: "brightness(0.7)"
            }}
          />
          <div 
            className="absolute inset-0"
            style={{ 
              background: `linear-gradient(to right, ${slides[currentSlide].overlay}, transparent)`
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Effets visuels */}
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

      {/* Contenu principal */}
      <div className="relative h-full w-full flex items-center z-10">
        <div className="max-w-7xl px-8 w-full">
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
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
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

      {/* Contrôles du slider */}
      <div className="absolute bottom-10 left-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-6' : 'bg-gray-400'}`}
          />
        ))}
      </div>

      {/* Navigation */}
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
  );
};

export default ElicomHero;
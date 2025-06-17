
// 📁 components/company/pages/ElicomCooperativeHomePage.tsx
import { motion } from 'framer-motion';

export const ElicomCooperativeHomePage = ({ company }: { company: any }) => {
  const sections = company.sections;

  return (
    <div>
      <section
        className="relative h-[70vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${company.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <h1 className="text-5xl font-bold mb-4">{company.name}</h1>
          <p className="text-xl">{company.description}</p>
        </motion.div>
      </section>

      
    </div>
  );
};

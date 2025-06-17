
import { motion } from 'framer-motion';
import HeroTic from '../../components/tic/HeroTic';
import ServicesTic from '../../components/tic/ServicesTic';
import PortfolioTic from '../../components/tic/PortfolioTic';
import AboutTic from '../../components/tic/AboutTic';
import ContactTic from '../../components/tic/ContactTic';

export const TICHomePage = ({ company }: { company: any }) => {
  const sections = company.sections;
  const icons = company._icons;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <main>
        <HeroTic />
        <ServicesTic />
        <PortfolioTic />
        <AboutTic />
        <ContactTic />
      </main>
    </motion.div>
  );
};
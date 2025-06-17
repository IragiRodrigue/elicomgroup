
import { motion } from 'framer-motion';
import HeroImprimerie from '../../components/emprimerie/HeroImprimerie';
import AboutImprimerie from '../../components/emprimerie/AboutImprimerie';
import ServicesImprimerie from '../../components/emprimerie/ServicesImprimerie';
import ContactImprimerie from '../../components/emprimerie/ContactImprimerie';
import PortfolioImprimerie from '../../components/emprimerie/PortfolioImprimerie';

export const ElicomImprimerieHomePage = ({ company }: { company: any }) => {
  const sections = company.sections;
  const icons = company._icons;

  return (
     <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <main>
        <HeroImprimerie />
        <ServicesImprimerie />
        <AboutImprimerie />
        <PortfolioImprimerie />
        <ContactImprimerie />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
import { ElicomCooperativeHomePage } from "../../pages/einvest/EinvestHomePage";
import { ElicomImprimerieHomePage } from "../../pages/imprimerie/ElicomImprimerieHomePage";
import { SokomaxHomePage } from "../../pages/sokomax/SokomaxHomePage";
import { TICHomePage } from "../../pages/tic/TicHomePage";


export const renderCompany = (slug: string, company: any) => {
  const companyWithIcons = { ...company, _icons: company._icons || {} };

  switch (slug) {
    case 'imprimerie':
      return <ElicomImprimerieHomePage company={companyWithIcons} />;
    case 'cooperative':
      return <ElicomCooperativeHomePage company={companyWithIcons} />;
    case 'sokomax':
      return <SokomaxHomePage company={companyWithIcons} />;
    case 'tic':
      return <TICHomePage company={companyWithIcons} />;
    default:
      return (
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Page non disponible
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Aucune page personnalisée pour cette entreprise.
          </p>
        </div>
      );
  }
};

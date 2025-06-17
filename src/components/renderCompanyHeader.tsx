// 📁 components/company/renderCompanyHeader.tsx

import TICHeader from './tic/HeaderTic';
import { useState } from 'react';
import QuotePage from './tic/QuotePageTic';


export const renderCompanyHeader = (slug: string) => {

    const [showQuotePage, setShowQuotePage] = useState(false);

  if (showQuotePage) {
    return <QuotePage onBack={() => setShowQuotePage(false)} />;
  }

  switch (slug) {
    case 'imprimerie':
      return <></>;
    case 'cooperative':
      return <></>;
    case 'sokomax':
      return <></>;
    case 'tic':
      return <TICHeader onQuoteClick={() => setShowQuotePage(true)}/>;
    default:
      return null;
  }
};

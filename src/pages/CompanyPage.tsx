import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Company, mockCompanies } from '../data/mockCompanies';
import { applyCompanyColors, resetToDefaultColors } from '../components/utils/colorUtils';
import { renderCompany } from '../components/utils/company';

// Dynamically import Lucide icons
const importIcon = async (iconName: string) => {
  try {
    const module = await import('lucide-react');
    return module[iconName as keyof typeof module];
  } catch (error) {
    console.error(`Error importing icon: ${iconName}`, error);
    return null;
  }
};

const CompanyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [icons, setIcons] = useState<Record<string, any>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch company data and apply colors
  useEffect(() => {
    const fetchCompany = async () => {
      setLoading(true);
      setIsTransitioning(true);

      // Find company by slug
      const foundCompany = mockCompanies.find(c => c.slug === slug);

      if (foundCompany) {
        setCompany(foundCompany);

        // Apply company colors
        setTimeout(() => {
          applyCompanyColors({
            primary: foundCompany.primaryColor,
            secondary: foundCompany.secondaryColor,
            accent: foundCompany.accentColor,
          });
          setIsTransitioning(false);
        }, 150);

        // Load icons if company has services
        if (foundCompany.sections) {
          const servicesSection = foundCompany.sections.find(s => s.type === 'services');
          if (servicesSection?.services) {
            const iconPromises = servicesSection.services.map(async (service) => {
              const IconComponent = await importIcon(service.icon);
              return { [service.icon]: IconComponent };
            });

            const loadedIcons = await Promise.all(iconPromises);
            const iconsObject = loadedIcons.reduce((acc, curr) => ({ ...acc, ...curr }), {});
            setIcons(iconsObject);
          }
        }
      } else {
        setIsTransitioning(false);
      }

      setLoading(false);
    };

    if (slug) {
      fetchCompany();
    }

    // Cleanup: reset colors when component unmounts
    return () => {
      resetToDefaultColors();
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-16 text-center min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Company Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            The company you are looking for does not exist or may have been moved.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderCompany(company.slug, { ...company, _icons: icons })}
    </div>

  );
};

export default CompanyPage;
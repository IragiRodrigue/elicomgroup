import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Building, 
  User, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  FileText,
  Smartphone
} from 'lucide-react';

interface QuotePageProps {
  onBack: () => void;
}

const QuotePageTic: React.FC<QuotePageProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Company Info
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    location: '',
    industry: '',
    companySize: '',
    
    // Step 2: Project Details
    projectType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    priority: '',
    
    // Step 3: Technical Specifications
    platforms: [] as string[],
    features: [] as string[],
    integrations: [] as string[],
    hosting: '',
    
    // Step 4: Additional Info
    hasExistingSystem: '',
    dataVolume: '',
    users: '',
    support: '',
    additionalNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    const currentArray = formData[field as keyof typeof formData] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    handleInputChange(field, newArray);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitted(true);
  };

  const calculateEstimate = () => {
    let basePrice = 5000;
    let timeEstimate = 4;

    // Project type multiplier
    const typeMultipliers: { [key: string]: number } = {
      'web-app': 1.0,
      'mobile-app': 1.2,
      'desktop-app': 1.1,
      'erp-system': 2.0,
      'ecommerce': 1.3,
      'cms': 0.8,
      'api': 0.6,
      'integration': 0.7,
    };

    if (formData.projectType && typeMultipliers[formData.projectType]) {
      basePrice *= typeMultipliers[formData.projectType];
      timeEstimate *= typeMultipliers[formData.projectType];
    }

    // Features multiplier
    basePrice += formData.features.length * 500;
    timeEstimate += formData.features.length * 0.5;

    // Platform multiplier
    if (formData.platforms.length > 1) {
      basePrice *= 1.3;
      timeEstimate *= 1.2;
    }

    // Budget adjustment
    if (formData.budget === 'premium') {
      basePrice *= 1.5;
    } else if (formData.budget === 'basic') {
      basePrice *= 0.8;
    }

    return {
      price: Math.round(basePrice),
      time: Math.round(timeEstimate),
    };
  };

  const estimate = calculateEstimate();

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#6b21a8] to-[#9333ea] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl w-full text-center"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Demande de devis envoyée !
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Merci pour votre demande détaillée. Notre équipe va analyser vos besoins 
            et vous contacter dans les 24 heures avec une proposition personnalisée.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Estimation préliminaire :</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 text-[#6b21a8]" />
                <span className="text-gray-700">Budget estimé : <strong>{estimate.price.toLocaleString()} €</strong></span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#6b21a8]" />
                <span className="text-gray-700">Délai estimé : <strong>{estimate.time} semaines</strong></span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Prochaines étapes :
            </p>
            <div className="text-left space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#6b21a8] rounded-full"></div>
                <span>Analyse détaillée de vos besoins (24h)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#6b21a8] rounded-full"></div>
                <span>Appel de découverte avec notre expert (48h)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#6b21a8] rounded-full"></div>
                <span>Proposition détaillée et planning (72h)</span>
              </div>
            </div>
          </div>

          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-[#6b21a8] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#6b21a8]/90 transition-colors"
          >
            Retour à l'accueil
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={onBack}
                whileHover={{ x: -2 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#6b21a8] transition-colors"
              >
                <ArrowLeft size={20} />
                <span>Retour</span>
              </motion.button>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#6b21a8] to-[#9333ea] rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">
                  <span className="text-[#6b21a8]">Elicom</span>
                  <span className="text-[#facc15]"> TIC</span>
                </span>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              Étape {currentStep} sur {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <div className="flex-1 flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep 
                      ? 'bg-[#6b21a8] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step < currentStep ? <CheckCircle size={16} /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-[#6b21a8]' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-gray-700">
              {Math.round((currentStep / totalSteps) * 100)}% complété
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Informations sur votre entreprise
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Parlez-nous de votre entreprise pour mieux comprendre vos besoins.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Nom de l'entreprise *
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nom du contact *
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        placeholder="Votre nom complet"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        placeholder="votre@entreprise.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        placeholder="+225 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Localisation
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                      >
                        <option value="">Sélectionner un pays</option>
                        <option value="ci">Côte d'Ivoire</option>
                        <option value="sn">Sénégal</option>
                        <option value="ml">Mali</option>
                        <option value="bf">Burkina Faso</option>
                        <option value="gh">Ghana</option>
                        <option value="ng">Nigeria</option>
                        <option value="cm">Cameroun</option>
                        <option value="ga">Gabon</option>
                        <option value="cd">RD Congo</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Secteur d'activité
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                      >
                        <option value="">Sélectionner un secteur</option>
                        <option value="banking">Banque & Finance</option>
                        <option value="healthcare">Santé</option>
                        <option value="education">Éducation</option>
                        <option value="government">Administration publique</option>
                        <option value="retail">Commerce & Retail</option>
                        <option value="manufacturing">Industrie</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="transport">Transport & Logistique</option>
                        <option value="telecom">Télécommunications</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Taille de l'entreprise
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { value: 'startup', label: '1-10 employés' },
                          { value: 'small', label: '11-50 employés' },
                          { value: 'medium', label: '51-200 employés' },
                          { value: 'large', label: '200+ employés' },
                        ].map((size) => (
                          <button
                            key={size.value}
                            type="button"
                            onClick={() => handleInputChange('companySize', size.value)}
                            className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                              formData.companySize === size.value
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Détails du projet
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Décrivez votre projet et vos objectifs.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de projet *
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'web-app', label: 'Application Web' },
                          { value: 'mobile-app', label: 'Application Mobile' },
                          { value: 'desktop-app', label: 'Application Desktop' },
                          { value: 'erp-system', label: 'Système ERP' },
                          { value: 'ecommerce', label: 'Site E-commerce' },
                          { value: 'cms', label: 'Site Web / CMS' },
                          { value: 'api', label: 'API / Services Web' },
                          { value: 'integration', label: 'Intégration Système' },
                        ].map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => handleInputChange('projectType', type.value)}
                            className={`p-4 text-left rounded-lg border-2 transition-colors ${
                              formData.projectType === type.value
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description du projet *
                      </label>
                      <textarea
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8] resize-none"
                        placeholder="Décrivez votre projet, vos objectifs et vos besoins spécifiques..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Calendar className="w-4 h-4 inline mr-2" />
                          Délai souhaité
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        >
                          <option value="">Sélectionner un délai</option>
                          <option value="urgent">Urgent ( 1 mois)</option>
                          <option value="fast">Rapide (1-3 mois)</option>
                          <option value="normal">Normal (3-6 mois)</option>
                          <option value="flexible">Flexible (6 mois)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <DollarSign className="w-4 h-4 inline mr-2" />
                          Budget approximatif
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        >
                          <option value="">Sélectionner un budget</option>
                          <option value="basic">10 000 €</option>
                          <option value="standard">10 000 - 25 000 €</option>
                          <option value="premium">25 000 - 50 000 €</option>
                          <option value="enterprise">50 000+ €</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priorité du projet
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'low', label: 'Faible', color: 'text-green-600 border-green-200' },
                          { value: 'medium', label: 'Moyenne', color: 'text-yellow-600 border-yellow-200' },
                          { value: 'high', label: 'Élevée', color: 'text-red-600 border-red-200' },
                        ].map((priority) => (
                          <button
                            key={priority.value}
                            type="button"
                            onClick={() => handleInputChange('priority', priority.value)}
                            className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                              formData.priority === priority.value
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : `border-gray-200 hover:border-gray-300 ${priority.color}`
                            }`}
                          >
                            {priority.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Technical Specifications */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Spécifications techniques
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Précisez vos besoins techniques et fonctionnels.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Plateformes cibles (sélection multiple)
                      </label>
                      <div className="grid md:grid-cols-3 gap-3">
                        {[
                          'Web (navigateur)',
                          'iOS (iPhone/iPad)',
                          'Android',
                          'Windows',
                          'macOS',
                          'Linux',
                        ].map((platform) => (
                          <button
                            key={platform}
                            type="button"
                            onClick={() => handleArrayToggle('platforms', platform)}
                            className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                              formData.platforms.includes(platform)
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {platform}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Fonctionnalités souhaitées (sélection multiple)
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Authentification utilisateur',
                          'Gestion des rôles',
                          'Base de données',
                          'API REST',
                          'Notifications push',
                          'Paiement en ligne',
                          'Chat/Messagerie',
                          'Géolocalisation',
                          'Upload de fichiers',
                          'Rapports/Analytics',
                          'Multi-langue',
                          'Mode hors-ligne',
                        ].map((feature) => (
                          <button
                            key={feature}
                            type="button"
                            onClick={() => handleArrayToggle('features', feature)}
                            className={`p-3 text-sm text-left rounded-lg border-2 transition-colors ${
                              formData.features.includes(feature)
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {feature}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Intégrations nécessaires (sélection multiple)
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          'Système existant',
                          'CRM (Salesforce, HubSpot)',
                          'ERP (SAP, Oracle)',
                          'Comptabilité (QuickBooks)',
                          'Email (Outlook, Gmail)',
                          'Réseaux sociaux',
                          'Services de paiement',
                          'Services cloud (AWS, Azure)',
                        ].map((integration) => (
                          <button
                            key={integration}
                            type="button"
                            onClick={() => handleArrayToggle('integrations', integration)}
                            className={`p-3 text-sm text-left rounded-lg border-2 transition-colors ${
                              formData.integrations.includes(integration)
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {integration}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Préférence d'hébergement
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'cloud', label: 'Cloud (AWS, Azure, Google Cloud)' },
                          { value: 'local', label: 'Serveur local/On-premise' },
                          { value: 'hybrid', label: 'Solution hybride' },
                          { value: 'managed', label: 'Géré par Elicom TIC' },
                        ].map((hosting) => (
                          <button
                            key={hosting.value}
                            type="button"
                            onClick={() => handleInputChange('hosting', hosting.value)}
                            className={`p-3 text-sm text-left rounded-lg border-2 transition-colors ${
                              formData.hosting === hosting.value
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {hosting.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Additional Information */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Informations complémentaires
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Derniers détails pour finaliser votre demande de devis.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Avez-vous un système existant ?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: 'yes', label: 'Oui, nous avons un système existant' },
                          { value: 'no', label: 'Non, c\'est un nouveau projet' },
                        ].map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleInputChange('hasExistingSystem', option.value)}
                            className={`p-3 text-sm text-left rounded-lg border-2 transition-colors ${
                              formData.hasExistingSystem === option.value
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Volume de données estimé
                        </label>
                        <select
                          value={formData.dataVolume}
                          onChange={(e) => handleInputChange('dataVolume', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        >
                          <option value="">Sélectionner un volume</option>
                          <option value="small">Petit (1 GB)</option>
                          <option value="medium">Moyen (1-10 GB)</option>
                          <option value="large">Important (10-100 GB)</option>
                          <option value="enterprise">Très important (100 GB)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nombre d'utilisateurs prévus
                        </label>
                        <select
                          value={formData.users}
                          onChange={(e) => handleInputChange('users', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8]"
                        >
                          <option value="">Sélectionner un nombre</option>
                          <option value="small">1-50 utilisateurs</option>
                          <option value="medium">51-200 utilisateurs</option>
                          <option value="large">201-1000 utilisateurs</option>
                          <option value="enterprise">1000+ utilisateurs</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type de support souhaité
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { value: 'basic', label: 'Support de base (email)' },
                          { value: 'standard', label: 'Support standard (email + téléphone)' },
                          { value: 'premium', label: 'Support premium (24/7)' },
                          { value: 'managed', label: 'Service géré complet' },
                        ].map((support) => (
                          <button
                            key={support.value}
                            type="button"
                            onClick={() => handleInputChange('support', support.value)}
                            className={`p-3 text-sm text-left rounded-lg border-2 transition-colors ${
                              formData.support === support.value
                                ? 'border-[#6b21a8] bg-[#6b21a8]/10 text-[#6b21a8]'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {support.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Notes additionnelles
                      </label>
                      <textarea
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b21a8]/20 focus:border-[#6b21a8] resize-none"
                        placeholder="Ajoutez toute information supplémentaire qui pourrait nous aider à mieux comprendre votre projet..."
                      />
                    </div>

                    {/* Estimate Preview */}
                    <div className="bg-gradient-to-r from-[#6b21a8]/10 to-[#9333ea]/10 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Estimation préliminaire :</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-[#6b21a8]" />
                          <span className="text-gray-700">Budget estimé : <strong>{estimate.price.toLocaleString()} €</strong></span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-[#6b21a8]" />
                          <span className="text-gray-700">Délai estimé : <strong>{estimate.time} semaines</strong></span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-3">
                        * Cette estimation est indicative et sera affinée lors de notre échange.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  whileHover={{ x: currentStep === 1 ? 0 : -2 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                    currentStep === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-600 hover:text-[#6b21a8] hover:bg-gray-50'
                  }`}
                >
                  <ArrowLeft size={20} />
                  <span>Précédent</span>
                </motion.button>

                {currentStep < totalSteps ? (
                  <motion.button
                    onClick={nextStep}
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 bg-[#6b21a8] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6b21a8]/90 transition-colors"
                  >
                    <span>Suivant</span>
                    <ArrowRight size={20} />
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={handleSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center space-x-2 bg-[#facc15] text-[#6b21a8] px-8 py-3 rounded-lg font-semibold hover:bg-[#facc15]/90 transition-colors"
                  >
                    <CheckCircle size={20} />
                    <span>Envoyer la demande</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuotePageTic;
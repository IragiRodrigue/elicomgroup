// Mock companies data with color schemes
export interface Company {
  id: string;
  name: string;
  slug: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  description: string;
  heroImage: string;
  sections: Section[];
}

export interface Section {
  id: string;
  type: 'about' | 'services' | 'team' | 'contact';
  title: string;
  content?: string;
  image?: string;
  services?: Service[];
  team?: TeamMember[];
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Elicom Imprimerie',
    slug: 'imprimerie',
    primaryColor: '#dc2626', // red-600
    secondaryColor: '#1e3a8a', // blue-800
    accentColor: '#fbbf24', // amber-400
    description: "Solutions d'impression de haute qualité pour tous vos besoins professionnels.",
    heroImage: 'https://images.pexels.com/photos/6372358/pexels-photo-6372358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    sections: [
      {
        id: '1',
        type: 'about',
        title: 'À propos',
        content: "Elicom Imprimerie est spécialisée dans l'impression numérique et offset de haute qualité depuis plus de 15 ans. Nous mettons notre expertise au service de nos clients pour leur offrir des solutions d'impression adaptées à leurs besoins.",
        image: 'https://images.pexels.com/photos/5696555/pexels-photo-5696555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        id: '2',
        type: 'services',
        title: 'Nos Services',
        services: [
          { title: 'Impression Numérique', description: 'Haute qualité pour petites quantités', icon: 'Printer' },
          { title: 'Impression Offset', description: 'Qualité pro pour grands volumes', icon: 'FileText' },
          { title: 'Conception Graphique', description: 'Design professionnel', icon: 'Palette' },
          { title: 'Finition', description: 'Reliure, découpe, vernis', icon: 'Scissors' }
        ]
      },
      {
        id: '3',
        type: 'team',
        title: 'Notre Équipe',
        team: [
          { name: 'Jean Dupont', position: 'Directeur', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' },
          { name: 'Marie Martin', position: 'Responsable Production', image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg' },
          { name: 'Paul Robert', position: 'Designer en Chef', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' },
          { name: 'Sophie Dubois', position: 'Commerciale', image: 'https://images.pexels.com/photos/4100653/pexels-photo-4100653.jpeg' }
        ]
      },
      {
        id: '4',
        type: 'contact',
        title: 'Contact',
        address: "123 Rue de l'Imprimerie, Dakar, Sénégal",
        phone: '+221 123 456 789',
        email: 'contact@elicom-imprimerie.com',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.4711!2d-17.4677!3d14.6937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
      }
    ]
  },
  {
    id: '2',
    name: 'Elicom Coopérative',
    slug: 'cooperative',
    primaryColor: '#16a34a', // green-600
    secondaryColor: '#22c55e', // green-500
    accentColor: '#f97316', // orange-500
    description: 'Coopérative agricole offrant des produits locaux de qualité supérieure.',
    heroImage: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg',
    sections: [
      {
        id: '1',
        type: 'about',
        title: 'À propos',
        content: "Elicom Coopérative rassemble des agriculteurs locaux pour produire et distribuer des produits agricoles de haute qualité.",
        image: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg'
      },
      {
        id: '2',
        type: 'services',
        title: 'Nos Produits',
        services: [
          { title: 'Fruits Frais', description: 'Produits locaux de saison', icon: 'Apple' },
          { title: 'Légumes Bio', description: 'Agriculture biologique', icon: 'Carrot' },
          { title: 'Céréales', description: 'Riz, mil, sorgho', icon: 'Wheat' },
          { title: 'Distribution', description: 'Livraison directe', icon: 'Truck' }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Sokomax',
    slug: 'sokomax',
    primaryColor: '#991b1b', // red-800
    secondaryColor: '#dc2626', // red-600
    accentColor: '#f59e0b', // amber-500
    description: 'Distributeur spécialisé dans les matériaux de construction.',
    heroImage: 'https://images.pexels.com/photos/209230/pexels-photo-209230.jpeg',
    sections: [
      {
        id: '1',
        type: 'about',
        title: 'À propos',
        content: 'Sokomax fournit depuis 20 ans des matériaux de construction de qualité pour le BTP.',
        image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg'
      },
      {
        id: '2',
        type: 'services',
        title: 'Nos Produits',
        services: [
          { title: 'Ciment & Béton', description: 'Fondations solides', icon: 'Building' },
          { title: 'Outils & Équipements', description: 'Matériel de chantier', icon: 'Hammer' },
          { title: 'Transport & Livraison', description: 'Livraison rapide', icon: 'Truck' },
          { title: 'Assistance Technique', description: 'Conseils personnalisés', icon: 'Wrench' }
        ]
      },
      {
        id: '3',
        type: 'team',
        title: 'Notre Équipe',
        team: [
          { name: 'Arnaud Kayembe', position: 'PDG', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
          { name: 'Chantal Mbala', position: 'Logistique', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' }
        ]
      },
      {
        id: '4',
        type: 'contact',
        title: 'Contact',
        address: 'Boulevard Industriel, Kinshasa, RDC',
        phone: '+243 820 123 456',
        email: 'info@sokomax.com',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.4711!2d15.3098!3d-4.3317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
      }
    ]
  },
  {
    id: '4',
    name: 'Elicom TIC',
    slug: 'tic',
    primaryColor: '#6b21a8', // purple-700
    secondaryColor: '#9333ea', // purple-600
    accentColor: '#facc15', // yellow-400
    description: 'Solutions TIC pour les entreprises africaines.',
    heroImage: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    sections: [
      {
        id: '1',
        type: 'about',
        title: 'À propos',
        content: 'Elicom TIC développe des plateformes numériques innovantes pour les PME et institutions.',
        image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg'
      },
      {
        id: '2',
        type: 'services',
        title: 'Nos Services',
        services: [
          { title: 'Développement Web', description: 'Sites performants et modernes', icon: 'Globe' },
          { title: 'Applications Mobiles', description: 'Apps iOS & Android', icon: 'Smartphone' },
          { title: 'Hébergement Cloud', description: 'Serveurs sécurisés', icon: 'Server' },
          { title: 'Cybersécurité', description: 'Protection et audits', icon: 'ShieldCheck' }
        ]
      },
      {
        id: '3',
        type: 'contact',
        title: 'Contact',
        address: '456 Avenue de l\'Innovation, Bujumbura, Burundi',
        phone: '+257 222 111 000',
        email: 'contact@elicom-tic.com',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.4711!2d29.3644!3d-3.3792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1'
      }
    ]
  }
];
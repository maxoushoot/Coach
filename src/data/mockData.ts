import { faker } from '@faker-js/faker/locale/fr';

// Set seed for consistent data generation
faker.seed(123);

// Generate coach data
export const coaches = Array.from({ length: 12 }, (_, i) => ({
  id: `coach-${i + 1}`,
  name: faker.person.fullName(),
  specialties: [
    faker.helpers.arrayElement(['Musculation', 'Perte de poids', 'HIIT', 'Yoga', 'Pilates', 'Running']),
    faker.helpers.arrayElement(['Nutrition', 'Récupération', 'Mobilité', 'Cardio', 'Stretching']),
  ],
  rating: faker.number.float({ min: 3.5, max: 5, precision: 0.1 }),
  reviewCount: faker.number.int({ min: 5, max: 120 }),
  location: faker.location.city(),
  image: `https://randomuser.me/api/portraits/${faker.number.int({ min: 0, max: 1 }) === 0 ? 'women' : 'men'}/${faker.number.int({ min: 1, max: 99 })}.jpg`,
  bio: faker.lorem.paragraph(3),
  experience: faker.number.int({ min: 1, max: 15 }),
  certifications: [
    faker.helpers.arrayElement(['BPJEPS', 'CQP ALS', 'DEJEPS', 'DEUST AGAPSC']),
    faker.helpers.arrayElement(['Certification Pilates', 'Coach Nutrition', 'CrossFit Level 1', 'TRX']),
  ],
}));

// Generate testimonials
export const testimonials = Array.from({ length: 6 }, () => ({
  name: faker.person.fullName(),
  role: faker.helpers.arrayElement([
    'Client depuis 3 mois', 
    'Client depuis 6 mois', 
    'Client depuis 1 an', 
    'Coach fitness'
  ]),
  text: faker.lorem.paragraph(),
  image: `https://randomuser.me/api/portraits/${faker.number.int({ min: 0, max: 1 }) === 0 ? 'women' : 'men'}/${faker.number.int({ min: 1, max: 99 })}.jpg`,
}));

// Generate pricing plans
export const pricingPlans = [
  {
    title: 'Découverte',
    price: '29€',
    period: 'par séance',
    description: 'Idéal pour ceux qui veulent essayer avant de s\'engager',
    features: [
      'Séances individuelles à la demande',
      'Accès au suivi de base',
      'Pas d\'engagement',
      'Premier bilan offert',
    ],
    isPopular: false,
  },
  {
    title: 'Mensuel',
    price: '89€',
    period: 'par mois',
    description: 'Notre formule la plus populaire pour un suivi régulier',
    features: [
      '4 séances individuelles par mois',
      'Suivi nutritionnel personnalisé',
      'Accès illimité aux séances de groupe',
      'Programme d\'entraînement personnalisé',
      'Messagerie directe avec votre coach',
    ],
    isPopular: true,
  },
  {
    title: 'Premium',
    price: '149€',
    period: 'par mois',
    description: 'Pour une transformation complète et un suivi intensif',
    features: [
      '8 séances individuelles par mois',
      'Suivi nutritionnel avancé',
      'Accès illimité aux séances de groupe',
      'Programme d\'entraînement personnalisé',
      'Messagerie prioritaire avec votre coach',
      'Bilan mensuel complet',
      'Accès prioritaire aux créneaux',
    ],
    isPopular: false,
  },
];

// Generate sessions
export const sessions = Array.from({ length: 20 }, (_, i) => {
  const startDate = faker.date.soon({ days: 14 });
  const types = ['Individuel', 'Groupe'];
  const type = faker.helpers.arrayElement(types);
  const titles = [
    'Renforcement musculaire',
    'Cardio HIIT',
    'Yoga flow',
    'Pilates',
    'Circuit training',
    'Stretching & mobilité',
    'Running & préparation physique',
    'Boxe fitness',
  ];

  return {
    id: `session-${i + 1}`,
    title: faker.helpers.arrayElement(titles),
    type,
    date: startDate,
    duration: faker.helpers.arrayElement([30, 45, 60, 90]),
    location: faker.helpers.arrayElement([
      'Salle Fitness Club',
      'Parc des Sports',
      'Studio Bien-être',
      'En ligne (Zoom)',
      'Domicile client',
    ]),
    capacity: type === 'Groupe' ? faker.number.int({ min: 5, max: 15 }) : 1,
    enrolled: type === 'Groupe' ? faker.number.int({ min: 0, max: 10 }) : 1,
    coachId: faker.helpers.arrayElement(coaches).id,
  };
});

// Generate progress data
export const progressData = {
  weight: {
    data: [78, 77.5, 76.8, 76.2, 75.7, 75.1, 74.8, 74.5, 74.2, 73.8, 73.5, 73.2],
    labels: ['1 Jan', '15 Jan', '1 Fév', '15 Fév', '1 Mar', '15 Mar', '1 Avr', '15 Avr', '1 Mai', '15 Mai', '1 Juin', '15 Juin'],
  },
  performance: {
    data: [12, 14, 13, 15, 18, 17, 20, 22, 21, 24, 25, 27],
    labels: ['1 Jan', '15 Jan', '1 Fév', '15 Fév', '1 Mar', '15 Mar', '1 Avr', '15 Avr', '1 Mai', '15 Mai', '1 Juin', '15 Juin'],
  },
  measurements: {
    waist: [92, 91, 90, 89, 88, 87, 86.5, 86, 85.5, 85, 84.5, 84],
    chest: [100, 99.5, 99, 98.5, 98, 97.5, 97, 96.5, 96, 95.5, 95, 94.5],
    arms: [33, 33.2, 33.5, 33.8, 34, 34.2, 34.5, 34.8, 35, 35.2, 35.5, 35.8],
    labels: ['1 Jan', '15 Jan', '1 Fév', '15 Fév', '1 Mar', '15 Mar', '1 Avr', '15 Avr', '1 Mai', '15 Mai', '1 Juin', '15 Juin'],
  },
};

// Generate blog posts
export const blogPosts = Array.from({ length: 6 }, (_, i) => ({
  id: `post-${i + 1}`,
  title: faker.lorem.sentence().slice(0, -1),
  excerpt: faker.lorem.paragraph(),
  content: faker.lorem.paragraphs(5),
  author: faker.helpers.arrayElement(coaches).name,
  date: faker.date.recent({ days: 60 }),
  image: `https://images.pexels.com/photos/${faker.helpers.arrayElement([
    '2247179', '4498482', '2294361', '3837757', '2827392', '2294353'
  ])}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
  category: faker.helpers.arrayElement([
    'Nutrition', 'Entraînement', 'Bien-être', 'Récupération', 'Motivation'
  ]),
}));
import React from 'react';
import { 
  Calendar, Users, BarChart2, MessageSquare, 
  Smartphone, Shield, CreditCard, Award,
  Activity, BookOpen, Bell, Settings
} from 'lucide-react';
import FeatureCard from '../components/common/FeatureCard';

const FeaturesPage = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Réservation simplifiée',
      description: 'Réservez vos séances en quelques clics et gérez votre emploi du temps facilement.',
    },
    {
      icon: Users,
      title: 'Coaching personnalisé',
      description: "Bénéficiez d'un suivi sur mesure adapté à vos objectifs et votre progression.",
    },
    {
      icon: BarChart2,
      title: 'Suivi des progrès',
      description: 'Visualisez votre évolution grâce à des graphiques et statistiques détaillés.',
    },
    {
      icon: MessageSquare,
      title: 'Communication directe',
      description: 'Échangez avec votre coach en temps réel via notre messagerie intégrée.',
    },
    {
      icon: Smartphone,
      title: 'Application mobile',
      description: 'Accédez à votre espace depuis votre smartphone pour plus de flexibilité.',
    },
    {
      icon: Shield,
      title: 'Sécurité des données',
      description: 'Vos informations personnelles sont protégées selon les normes les plus strictes.',
    },
    {
      icon: CreditCard,
      title: 'Paiement sécurisé',
      description: 'Effectuez vos paiements en toute sécurité via notre plateforme intégrée.',
    },
    {
      icon: Award,
      title: 'Coachs certifiés',
      description: 'Tous nos coachs sont diplômés et régulièrement évalués.',
    },
    {
      icon: Activity,
      title: 'Programmes adaptés',
      description: 'Des programmes d\'entraînement personnalisés selon vos objectifs.',
    },
    {
      icon: BookOpen,
      title: 'Ressources pédagogiques',
      description: 'Accédez à une bibliothèque d\'exercices et de conseils nutritionnels.',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Recevez des rappels pour vos séances et suivez vos objectifs.',
    },
    {
      icon: Settings,
      title: 'Personnalisation',
      description: 'Adaptez l\'application selon vos préférences et besoins.',
    },
  ];

  return (
    <div className="animate-enter py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Fonctionnalités</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les outils mis à votre disposition pour optimiser votre expérience de coaching sportif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
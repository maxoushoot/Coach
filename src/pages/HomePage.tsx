import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Users, BarChart, MessageSquare, 
  ChevronRight, ArrowRight, ChevronLeft, ChevronDown
} from 'lucide-react';
import FeatureCard from '../components/common/FeatureCard';
import TestimonialCard from '../components/common/TestimonialCard';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Cliente depuis 6 mois',
      text: "Grâce à FitCoach Pro, j'ai trouvé un coach qui comprend réellement mes objectifs. Le suivi est impeccable et les résultats sont là !",
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Thomas Martin',
      role: 'Client depuis 1 an',
      text: "La plateforme est intuitive et me permet de suivre mes progrès facilement. Mon coach peut ajuster mon programme à distance en temps réel.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Sophie Leroux',
      role: 'Coach fitness',
      text: "En tant que coach, FitCoach Pro me permet de gérer efficacement mes clients et d'offrir un service de qualité supérieure. Un outil indispensable !",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

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
      icon: BarChart,
      title: 'Suivi des progrès',
      description: 'Visualisez votre évolution grâce à des graphiques et statistiques détaillés.',
    },
    {
      icon: MessageSquare,
      title: 'Communication directe',
      description: 'Échangez avec votre coach en temps réel via notre messagerie intégrée.',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Coach et client"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pilotez vos progrès, atteignez vos objectifs
            </h1>
            <p className="text-lg md:text-xl text-primary-100 mb-8">
              La plateforme professionnelle qui connecte coachs et clients pour un suivi fitness personnalisé et efficace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/inscription" className="btn-accent">
                Créer mon compte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/coachs" className="btn bg-white text-primary-900 hover:bg-gray-100">
                Découvrir les coachs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Une plateforme complète pour votre fitness</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tout ce dont vous avez besoin pour atteindre vos objectifs de remise en forme, dans une seule application intuitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/fonctionnalites" className="btn-outline inline-flex items-center">
              Toutes les fonctionnalités
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Une expérience mobile fluide et intuitive</h2>
              <p className="text-lg text-gray-600 mb-6">
                Accédez à toutes les fonctionnalités depuis votre smartphone. Réservez des séances, suivez votre progression et communiquez avec votre coach où que vous soyez.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-secondary-100 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-secondary-600"></div>
                    </div>
                  </div>
                  <span className="ml-3">Interface optimisée pour mobile</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-secondary-100 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-secondary-600"></div>
                    </div>
                  </div>
                  <span className="ml-3">Notifications et rappels de séances</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-5 w-5 rounded-full bg-secondary-100 flex items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-secondary-600"></div>
                    </div>
                  </div>
                  <span className="ml-3">Synchronisation avec votre calendrier</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-[9/16] rounded-3xl overflow-hidden shadow-elevated mx-auto max-w-[250px]">
                <img
                  src="https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Application mobile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce qu'en disent nos utilisateurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de coachs et clients qui utilisent FitCoach Pro au quotidien.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="transition-all duration-300 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
            
            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 hidden md:flex"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 hidden md:flex"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre approche du fitness ?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
            Rejoignez la communauté FitCoach Pro dès aujourd'hui et commencez votre parcours vers une meilleure forme physique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/inscription" className="btn-accent">
              Créer mon compte
            </Link>
            <Link to="/tarifs" className="btn bg-primary-800 text-white hover:bg-primary-700">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir pour bien démarrer avec FitCoach Pro.
            </p>
          </div>

          <div className="space-y-6">
            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-medium">Comment trouver le coach idéal pour moi ?</span>
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Vous pouvez parcourir nos profils de coachs, filtrer par spécialité, lire les avis et même prendre un premier rendez-vous d'évaluation gratuit pour trouver celui qui correspond le mieux à vos besoins.
              </p>
            </details>

            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-medium">Comment fonctionnent les abonnements ?</span>
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Nous proposons différentes formules d'abonnement, du coaching à la séance aux forfaits mensuels. Vous pouvez choisir la formule qui correspond le mieux à vos besoins et à votre budget.
              </p>
            </details>

            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-medium">Puis-je annuler une séance réservée ?</span>
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Oui, vous pouvez annuler une séance jusqu'à 24h avant l'heure prévue sans frais. En cas d'annulation tardive, la séance pourra être décomptée de votre forfait selon les conditions de votre coach.
              </p>
            </details>

            <details className="group border-b pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-medium">Comment suivre mes progrès ?</span>
                <ChevronDown className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-600">
                Votre espace client propose des outils de suivi complets : courbes de progression, historique des séances, notes et évaluations. Votre coach peut également ajouter des mesures et objectifs personnalisés.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
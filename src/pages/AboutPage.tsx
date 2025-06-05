import React from 'react';
import { Users, Award, Heart, Target } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: 'Communauté',
      description: 'Nous créons une communauté soudée de coachs et clients passionnés par le fitness et le bien-être.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous sélectionnons rigoureusement nos coachs et maintenons les plus hauts standards de qualité.',
    },
    {
      icon: Heart,
      title: 'Bien-être',
      description: 'Notre approche holistique combine santé physique et mentale pour un équilibre optimal.',
    },
    {
      icon: Target,
      title: 'Résultats',
      description: 'Nous nous engageons à vous aider à atteindre vos objectifs grâce à un suivi personnalisé.',
    },
  ];

  const team = [
    {
      name: 'Thomas Laurent',
      role: 'Fondateur & CEO',
      bio: 'Ancien athlète de haut niveau et coach certifié, Thomas a créé FitCoach Pro pour révolutionner le coaching sportif.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sophie Martin',
      role: 'Directrice des Opérations',
      bio: 'Experte en gestion sportive avec 10 ans d'expérience dans le développement de programmes fitness innovants.',
      image: 'https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Marc Dubois',
      role: 'Responsable Formation',
      bio: 'Spécialiste en sciences du sport, Marc supervise la formation continue de nos coachs et le développement des programmes.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="animate-enter">
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Équipe FitCoach Pro"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Notre mission : votre transformation</h1>
            <p className="text-xl text-primary-100">
              FitCoach Pro révolutionne le coaching sportif en connectant les meilleurs coachs professionnels avec des clients motivés, grâce à une technologie innovante et un suivi personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos valeurs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et décisions pour vous offrir la meilleure expérience possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Fondée en 2023, FitCoach Pro est née d'une vision simple mais ambitieuse : rendre le coaching sportif de qualité accessible à tous, partout et à tout moment.
                </p>
                <p>
                  Notre plateforme combine l'expertise de coachs professionnels certifiés avec une technologie de pointe pour offrir un suivi personnalisé et des résultats mesurables.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers de compter plus de 200 coachs certifiés et 5000 clients satisfaits qui transforment leur vie grâce à FitCoach Pro.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="L'équipe FitCoach Pro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre équipe</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés qui travaillent chaque jour pour améliorer votre expérience fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card overflow-hidden">
                <div className="aspect-[4/3]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-primary-100">Coachs certifiés</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-primary-100">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-primary-100">Séances réalisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-primary-100">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
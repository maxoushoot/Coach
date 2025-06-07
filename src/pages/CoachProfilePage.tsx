import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Star, MapPin, Award, Clock, Calendar, Users } from 'lucide-react';
import { coaches } from '../data/mockData';
import SessionCard from '../components/common/SessionCard';

const CoachProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const coach = coaches.find(c => c.id === id);

  if (!coach) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Coach non trouvé</h2>
        <p className="text-gray-600">Le coach que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  // Mock upcoming sessions for this coach
  const upcomingSessions = [
    {
      title: "Séance HIIT",
      type: "Groupe",
      date: new Date(2025, 3, 20, 18, 30),
      duration: 45,
      location: "Salle Fitness Club",
      capacity: 12,
      enrolled: 8,
    },
    {
      title: "Coaching personnalisé",
      type: "Individuel",
      date: new Date(2025, 3, 21, 14, 0),
      duration: 60,
      location: "Studio Bien-être",
      capacity: 1,
      enrolled: 0,
    },
  ];

  return (
    <div className="animate-enter py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="mb-6 md:mb-0">
              <div className="relative h-48 w-48 rounded-xl overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{coach.name}</h1>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {coach.specialties.map((specialty, index) => (
                  <span key={index} className="badge-primary">{specialty}</span>
                ))}
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{coach.rating}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">{coach.reviewCount} avis</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{coach.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">À propos</h2>
              <p className="text-gray-600 mb-6">{coach.bio}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium">Expérience</p>
                    <p className="text-gray-600">{coach.experience} ans</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="font-medium">Clients accompagnés</p>
                    <p className="text-gray-600">100+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              <div className="space-y-4">
                {coach.certifications.map((certification, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-primary-600 mr-3" />
                    <span>{certification}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Prochaines séances disponibles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingSessions.map((session, index) => (
                  <SessionCard
                    key={index}
                    title={session.title}
                    type={session.type}
                    date={session.date}
                    duration={session.duration}
                    location={session.location}
                    capacity={session.capacity}
                    enrolled={session.enrolled}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card p-6">
              <button
                className="btn-primary w-full mb-3"
                onClick={() => navigate('/inscription')}
              >
                Réserver une séance
              </button>
              <button
                className="btn-outline w-full"
                onClick={() => navigate('/contact')}
              >
                Contacter
              </button>
            </div>

            {/* Availability */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Disponibilités</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Lundi - Vendredi: 8h - 20h</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Samedi: 9h - 18h</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Premier RDV sous 48h</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Lieu d'intervention</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Salle Fitness Club</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>À domicile (5km)</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span>En ligne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfilePage;
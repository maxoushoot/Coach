import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import CoachCard from '../components/common/CoachCard';
import { coaches } from '../data/mockData';

const CoachesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const specialties = ['Musculation', 'Perte de poids', 'HIIT', 'Yoga', 'Pilates', 'Running', 'Nutrition', 'Récupération', 'Mobilité', 'Cardio', 'Stretching'];
  
  // Create a list of unique locations from coaches data
  const locations = [...new Set(coaches.map(coach => coach.location))];

  const filteredCoaches = coaches.filter(coach => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      coach.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by specialty
    const matchesSpecialty = selectedSpecialty === '' || 
      coach.specialties.includes(selectedSpecialty);
    
    // Filter by location
    const matchesLocation = selectedLocation === '' || 
      coach.location === selectedLocation;
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="animate-enter py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Nos coachs professionnels</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos coachs certifiés, spécialisés dans différents domaines du fitness. 
            Trouvez celui qui correspond à vos objectifs et commencez votre transformation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10"
                placeholder="Rechercher un coach..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="input pl-10 appearance-none"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                  <option value="">Toutes les spécialités</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="input pl-10 appearance-none"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Toutes les villes</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.length > 0 ? (
            filteredCoaches.map((coach) => (
              <CoachCard
                key={coach.id}
                id={coach.id}
                name={coach.name}
                specialties={coach.specialties}
                rating={coach.rating}
                reviewCount={coach.reviewCount}
                location={coach.location}
                image={coach.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">
                Aucun coach ne correspond à votre recherche. Veuillez modifier vos critères.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoachesPage;
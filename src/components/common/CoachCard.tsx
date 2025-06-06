import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CoachCardProps {
  id: string;
  name: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
}

const CoachCard: React.FC<CoachCardProps> = ({
  id,
  name,
  specialties,
  rating,
  reviewCount,
  location,
  image,
}) => {
  return (
    <Link to={`/coachs/${id}`} className="block group">
      <div className="card overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg sm:flex">
        <div className="relative h-48 sm:h-auto sm:w-40 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5 sm:flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">{name}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {specialties.map((specialty, index) => (
              <span key={index} className="badge-primary">{specialty}</span>
            ))}
          </div>
          
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-medium">{rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600 text-sm">{reviewCount} avis</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoachCard;
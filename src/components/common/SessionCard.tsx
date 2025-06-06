import React from 'react';
import { Clock, Users, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface SessionCardProps {
  title: string;
  type: string;
  date: Date;
  duration: number; // in minutes
  location: string;
  capacity: number;
  enrolled: number;
  onBook?: () => void;
  booked?: boolean;
}

const SessionCard: React.FC<SessionCardProps> = ({
  title,
  type,
  date,
  duration,
  location,
  capacity,
  enrolled,
  onBook,
  booked = false,
}) => {
  const formattedDate = format(date, 'EEEE d MMMM', { locale: fr });
  const formattedTime = format(date, 'HH:mm');

  return (
    <div className="card overflow-hidden sm:flex">
      <div
        className={`px-4 py-2 text-white ${
          type === 'Groupe' ? 'bg-secondary-600' : 'bg-primary-600'
        } sm:w-40 sm:flex-shrink-0 sm:flex sm:items-center sm:justify-center`}
      >
        <span className="font-medium">{type}</span>
      </div>
      <div className="p-5 sm:p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <div className="w-5 mr-2 flex justify-center">
              <Calendar className="h-4 w-4" />
            </div>
            <span className="capitalize">{formattedDate} à {formattedTime}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-5 mr-2 flex justify-center">
              <Clock className="h-4 w-4" />
            </div>
            <span>{duration} min</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-5 mr-2 flex justify-center">
              <MapPin className="h-4 w-4" />
            </div>
            <span>{location}</span>
          </div>
          
          {type === 'Groupe' && (
            <div className="flex items-center text-gray-700">
              <div className="w-5 mr-2 flex justify-center">
                <Users className="h-4 w-4" />
              </div>
              <span>
                {enrolled}/{capacity} places
              </span>
            </div>
          )}
        </div>
        
        <button
          onClick={onBook}
          disabled={booked}
          className={`w-full ${
            booked
              ? 'bg-gray-300 cursor-not-allowed'
              : 'btn-primary'
          }`}
        >
          {booked ? 'Réservé' : 'Réserver'}
        </button>
      </div>
    </div>
  );
};

// Import Calendar icon since it wasn't imported at the top
const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export default SessionCard;
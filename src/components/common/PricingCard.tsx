import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  onSubscribe?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText = "S'abonner",
  onSubscribe,
}) => {
  return (
    <div className={`card relative h-full flex flex-col ${isPopular ? 'border-2 border-primary-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Populaire
          </span>
        </div>
      )}
      
      <div className="p-5 sm:p-6 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600 ml-2">{period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <Check className="h-5 w-5 text-primary-500" />
              </div>
              <span className="ml-3 text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-5 pt-0 sm:p-6 sm:pt-0 mt-auto">
        <button
          onClick={onSubscribe}
          className={`w-full ${isPopular ? 'btn-primary' : 'btn-outline'}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
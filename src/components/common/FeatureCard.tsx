import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className = '',
}) => {
  return (
    <div className={`card p-6 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
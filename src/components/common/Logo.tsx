import React from 'react';
import { Dumbbell } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Dumbbell className="w-8 h-8 text-primary-500" strokeWidth={2.5} />
      <span className="ml-2 text-xl font-bold">FitCoach<span className="text-primary-500">Pro</span></span>
    </div>
  );
};

export default Logo;
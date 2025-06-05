import React from 'react';
import PricingCard from '../components/common/PricingCard';
import { pricingPlans } from '../data/mockData';

const PricingPage: React.FC = () => {
  return (
    <div className="animate-enter py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-10">Nos Tarifs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

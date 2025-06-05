import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  text,
  image,
}) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={image}
            alt={name}
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <p className="text-gray-600 italic">"{text}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
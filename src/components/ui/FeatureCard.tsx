import React, { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
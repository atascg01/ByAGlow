import React, { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-4 bg-pink-light rounded-lg inline-block mb-4 text-pink-dark group-hover:bg-pink-dark group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
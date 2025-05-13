import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  client: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, category, image, client }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryLabel = (category: string): string => {
    switch (category) {
      case 'marketing':
        return 'Marketing';
      case 'eventos':
        return 'Eventos';
      case 'diseño':
        return 'Diseño';
      default:
        return category;
    }
  };

  return (
    <div 
      className="relative overflow-hidden rounded-xl shadow-md group animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70 transition-opacity duration-300 ${isHovered ? 'opacity-90' : ''}`}></div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-dark text-white rounded-full mb-2">
          {getCategoryLabel(category)}
        </span>
        <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-neutral-200 mb-4">Cliente: {client}</p>
        
        <button className={`btn btn-primary py-2 px-4 text-sm transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Ver Detalles
          <ExternalLink size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
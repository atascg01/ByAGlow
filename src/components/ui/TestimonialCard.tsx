import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  image: string;
  rating: number;
  text: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  position, 
  image, 
  rating, 
  text,
  delay = 0
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md relative animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-pink-light"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-sm text-neutral-600">{position}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-300'} mr-1`} 
          />
        ))}
      </div>
      
      <p className="text-neutral-600 italic">"{text}"</p>
      
      {/* Decorative quote mark */}
      <div className="absolute top-4 right-4 text-6xl text-pink-light opacity-30 font-serif">
        "
      </div>
    </div>
  );
};

export default TestimonialCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' 
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
          Transformamos ideas en <span className="text-pink-medium">experiencias</span> inolvidables
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Somos expertos en marketing y organización de eventos que harán
          brillar tu marca y conectarán con tu audiencia de forma única.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link to="/contacto" className="btn btn-primary shadow-lg">
            Contáctanos
            <ChevronRight className="ml-1" size={20} />
          </Link>
          <a href="#servicios" className="btn btn-outline">
            Nuestros Servicios
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#servicios" className="p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm transition-all hover:bg-opacity-30">
          <ChevronRight className="text-white transform rotate-90" size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState } from 'react';
import PortfolioItem from '../ui/PortfolioItem';

type FilterCategory = 'all' | 'marketing' | 'eventos' | 'diseño';

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Campaña de Lanzamiento',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'TechStart',
    },
    {
      id: 2,
      title: 'Evento Corporativo',
      category: 'eventos',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Global Inc',
    },
    {
      id: 3,
      title: 'Rediseño de Marca',
      category: 'diseño',
      image: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Fashion Brand',
    },
    {
      id: 4,
      title: 'Estrategia de Redes Sociales',
      category: 'marketing',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Foodie Corp',
    },
    {
      id: 5,
      title: 'Conferencia Anual',
      category: 'eventos',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Tech Summit',
    },
    {
      id: 6,
      title: 'Identidad Visual',
      category: 'diseño',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      client: 'Eco Solutions',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const filters: { value: FilterCategory; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'eventos', label: 'Eventos' },
    { value: 'diseño', label: 'Diseño' },
  ];

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nuestro Portafolio</h2>
          <div className="w-24 h-1 bg-pink-dark mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-neutral-600 mb-8">
            Conoce nuestros proyectos más destacados y descubre cómo hemos ayudado a 
            nuestros clientes a alcanzar sus objetivos.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-pink-dark text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioItem 
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              client={item.client}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
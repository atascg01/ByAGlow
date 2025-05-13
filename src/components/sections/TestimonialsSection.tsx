import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María López',
      position: 'CEO, TechStart',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      text: 'Trabajar con B&AGlow fue una experiencia excepcional. Su equipo entendió perfectamente nuestras necesidades y superó todas nuestras expectativas. El lanzamiento de nuestro producto fue un éxito rotundo gracias a su estrategia de marketing.',
    },
    {
      id: 2,
      name: 'Carlos Fernández',
      position: 'Director de Marketing, Global Inc',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      text: 'B&AGlow organizó nuestro evento corporativo anual y fue simplemente perfecto. Cada detalle estaba cuidadosamente planificado, y nuestros clientes quedaron impresionados. Definitivamente seguiremos contando con sus servicios.',
    },
    {
      id: 3,
      name: 'Laura Martínez',
      position: 'Fundadora, Eco Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
      text: 'El rediseño de nuestra marca por parte de B&AGlow transformó completamente nuestra imagen. Su enfoque creativo y profesional nos permitió conectar mejor con nuestro público objetivo y aumentar nuestras ventas significativamente.',
    },
  ];

  return (
    <section className="py-20 bg-pink-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-medium rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-medium rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <div className="w-24 h-1 bg-pink-dark mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-neutral-600">
            La satisfacción de nuestros clientes es nuestro mayor logro.
            Estas son algunas de las experiencias que han compartido con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              position={testimonial.position}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
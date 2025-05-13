import React from 'react';
import { Megaphone, Calendar, Users, BarChart, Lightbulb, Camera } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Megaphone size={40} />,
      title: 'Marketing Digital',
      description: 'Estrategias de marketing online personalizadas para aumentar la visibilidad de tu marca y generar oportunidades de negocio.',
    },
    {
      icon: <Calendar size={40} />,
      title: 'Organización de Eventos',
      description: 'Planificación y ejecución de eventos corporativos y sociales, cuidando cada detalle para crear experiencias memorables.',
    },
    {
      icon: <Users size={40} />,
      title: 'Gestión de Redes Sociales',
      description: 'Creamos contenido relevante y gestionamos tus perfiles para conectar con tu audiencia y construir una comunidad comprometida.',
    },
    {
      icon: <BarChart size={40} />,
      title: 'Análisis y Estrategia',
      description: 'Estudiamos tu mercado y competencia para desarrollar estrategias efectivas que impulsen el crecimiento de tu negocio.',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Diseño Creativo',
      description: 'Soluciones creativas y visualmente atractivas que reflejan la identidad de tu marca y captan la atención de tu público objetivo.',
    },
    {
      icon: <Camera size={40} />,
      title: 'Producción Audiovisual',
      description: 'Creación de contenido audiovisual de alta calidad para promocionar tus productos o servicios de manera efectiva.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-pink-dark mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Ofrecemos soluciones integrales de marketing y eventos diseñadas para 
            potenciar tu marca y conectar con tu audiencia de manera efectiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
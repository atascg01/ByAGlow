import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, Users, Zap } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: <Award className="text-pink-dark" size={36} />,
      title: 'Excelencia Creativa',
      description: 'Creamos soluciones innovadoras y personalizadas que destacan en el mercado.'
    },
    {
      icon: <Users className="text-pink-dark" size={36} />,
      title: 'Equipo Experto',
      description: 'Contamos con profesionales especializados en diferentes áreas del marketing y eventos.'
    },
    {
      icon: <Clock className="text-pink-dark" size={36} />,
      title: 'Compromiso con los Plazos',
      description: 'Cumplimos rigurosamente con los tiempos establecidos para cada proyecto.'
    },
    {
      icon: <Zap className="text-pink-dark" size={36} />,
      title: 'Resultados Medibles',
      description: 'Ofrecemos resultados tangibles y medibles para evaluar el éxito de cada estrategia.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">¿Por Qué Elegirnos?</h2>
            <p className="text-neutral-600 mb-6">
              En B&AGlow nos apasiona crear experiencias memorables y estrategias efectivas 
              que impulsen el crecimiento de tu negocio. Nuestro enfoque se basa en la 
              creatividad, la innovación y el compromiso con la excelencia.
            </p>
            <p className="text-neutral-600 mb-8">
              Cada proyecto es único y merece una atención personalizada. Por eso, 
              trabajamos estrechamente con nuestros clientes para entender sus necesidades 
              y objetivos, ofreciendo soluciones a medida que generan resultados reales.
            </p>
            
            <Link to="/contacto" className="btn btn-primary">
              Hablemos de tu Proyecto
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
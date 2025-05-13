import React, { useEffect } from 'react';
import ContactForm from '../components/sections/ContactForm';
import ContactInfo from '../components/sections/ContactInfo';

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Contacto | B&AGlow';
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contacta con Nosotros</h1>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Estamos listos para convertir tus ideas en realidad. ¿Tienes un proyecto en mente? 
            ¡Háblanos de él! Nuestro equipo está deseando escucharte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
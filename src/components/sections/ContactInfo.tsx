import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-white p-8 rounded-xl shadow-lg mb-8 animate-fade-in">
        <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-pink-light p-3 rounded-full mr-4">
              <MapPin className="text-pink-dark" size={24} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Dirección</h4>
              <p className="text-neutral-600">Calle Principal 123, Madrid, España</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-pink-light p-3 rounded-full mr-4">
              <Phone className="text-pink-dark" size={24} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Teléfono</h4>
              <p className="text-neutral-600">
                <a href="tel:+34612345678" className="hover:text-pink-dark transition-colors">
                  +34 612 345 678
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-pink-light p-3 rounded-full mr-4">
              <Mail className="text-pink-dark" size={24} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Email</h4>
              <p className="text-neutral-600">
                <a href="mailto:contacto@b&aglow.com" className="hover:text-pink-dark transition-colors">
                  contacto@b&aglow.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-pink-light p-3 rounded-full mr-4">
              <Clock className="text-pink-dark" size={24} />
            </div>
            <div>
              <h4 className="font-medium text-lg">Horario de Atención</h4>
              <p className="text-neutral-600">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-neutral-600">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="font-medium text-lg mb-4">Síguenos en Redes Sociales</h4>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-light p-3 rounded-full text-pink-dark hover:bg-pink-medium hover:text-white transition-all"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-light p-3 rounded-full text-pink-dark hover:bg-pink-medium hover:text-white transition-all"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-light p-3 rounded-full text-pink-dark hover:bg-pink-medium hover:text-white transition-all"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Google Maps Embed */}
      <div className="bg-white p-4 rounded-xl shadow-lg flex-grow animate-fade-in">
        <div className="rounded-lg overflow-hidden h-full min-h-[300px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93764.54147895905!2d-5.6422882!3d42.5986584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd379a9a0d5e1bd9%3A0x7d849ffad4f1eef3!2sLe%C3%B3n%2C%20Spain!5e0!3m2!1sen!2sus!4v1703252395433!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de la ubicación de B&AGlow"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
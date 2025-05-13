import React, { useState } from 'react';
import { Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset success message after some time
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in">
      <h3 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
      
      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
          ¡Gracias por contactarnos! Responderemos a tu mensaje lo antes posible.
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Tu nombre completo"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
              placeholder="+34 612 345 678"
            />
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
              Tipo de Servicio *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="" disabled>Selecciona un servicio</option>
              <option value="marketing">Marketing Digital</option>
              <option value="eventos">Organización de Eventos</option>
              <option value="redes">Gestión de Redes Sociales</option>
              <option value="estrategia">Análisis y Estrategia</option>
              <option value="diseño">Diseño Creativo</option>
              <option value="audiovisual">Producción Audiovisual</option>
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="input-field resize-none"
            placeholder="Cuéntanos sobre tu proyecto o consulta..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`btn btn-primary w-full flex items-center justify-center ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : (
            <Send className="mr-2" size={18} />
          )}
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
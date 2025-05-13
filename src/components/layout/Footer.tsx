import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Brief Intro */}
          <div>
            <Link to="/" className="flex items-center text-2xl font-semibold mb-4">
              <Sparkles className="text-pink-medium mr-2" />
              <span>B&A<span className="font-bold">Glow</span></span>
            </Link>
            <p className="text-neutral-300 mb-4">
              Transformamos ideas en experiencias memorables. Somos expertos en marketing y eventos que harán brillar tu marca.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-300 hover:text-pink-medium transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-300 hover:text-pink-medium transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-neutral-300 hover:text-pink-medium transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-pink-medium transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/#servicios" className="text-neutral-300 hover:text-pink-medium transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/#portafolio" className="text-neutral-300 hover:text-pink-medium transition-colors">Portafolio</Link>
              </li>
              <li>
                <Link to="/#sobre-nosotros" className="text-neutral-300 hover:text-pink-medium transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-neutral-300 hover:text-pink-medium transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="text-pink-medium mr-2 mt-1 flex-shrink-0" />
                <p className="text-neutral-300">Calle Principal 123, Madrid, España</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-pink-medium mr-2 flex-shrink-0" />
                <a href="tel:+34612345678" className="text-neutral-300 hover:text-pink-medium transition-colors">+34 612 345 678</a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-pink-medium mr-2 flex-shrink-0" />
                <a href="mailto:contacto@baglow.com" className="text-neutral-300 hover:text-pink-medium transition-colors">contacto@baglow.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} B&AGlow. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 text-neutral-400 text-sm">
              <Link to="/privacidad" className="hover:text-pink-medium transition-colors">Política de Privacidad</Link>
              <Link to="/terminos" className="hover:text-pink-medium transition-colors">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
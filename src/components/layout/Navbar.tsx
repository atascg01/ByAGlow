import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the contact page
  const isContactPage = location.pathname === '/contacto';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/#servicios' },
    { name: 'Portafolio', path: '/#portafolio' },
    { name: 'Sobre Nosotros', path: '/#sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(path.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isContactPage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center text-2xl font-semibold">
          <Sparkles className="text-pink-dark mr-2" />
          <span className={`transition-colors duration-300 ${isScrolled || isContactPage ? 'text-pink-dark' : 'text-white'}`}>
            B&A<span className="font-bold">Glow</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={({ isActive }) => 
                `font-medium transition-colors duration-300 hover:text-pink-dark ${
                  isActive ? 'text-pink-dark' : (isScrolled || isContactPage) ? 'text-neutral-700' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-full ${(isScrolled || isContactPage) ? 'text-neutral-700' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 shadow-lg animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={({ isActive }) => 
                  `py-2 px-4 font-medium transition-colors duration-300 ${
                    isActive ? 'text-pink-dark bg-pink-light rounded-lg' : 'text-neutral-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
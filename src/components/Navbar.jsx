import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const labels = {
    en: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      hire: "Hire",
      lang: "ES",
    },
    es: {
      home: "Inicio",
      services: "Servicios",
      about: "Sobre mí",
      contact: "Contacto",
      hire: "Contratar",
      lang: "EN",
    },
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo cambia según tamaño */}
        <Link to="/" className="font-bold text-xl text-blue-600 hover:opacity-80 transition">
          <span className="hidden sm:inline">QA Services</span>
          <span className="inline sm:hidden">QA</span>
        </Link>

        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">{labels[language].home}</Link></li>
          <li><Link to="/services">{labels[language].services}</Link></li>
          <li><Link to="/about">{labels[language].about}</Link></li>
          <li><Link to="/contact">{labels[language].contact}</Link></li>
          <li><Link to="/hire">{labels[language].hire}</Link></li>
        </ul>

        {/* Botón de cambio de idioma */}
        <button
          onClick={toggleLanguage}
          className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition hidden md:inline-block"
        >
          {labels[language].lang}
        </button>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-blue-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li><Link to="/" onClick={toggleMenu}>{labels[language].home}</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>{labels[language].services}</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>{labels[language].about}</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>{labels[language].contact}</Link></li>
            <li><Link to="/hire" onClick={toggleMenu}>{labels[language].hire}</Link></li>
            <li>
              <button
                onClick={() => {
                  toggleLanguage();
                  toggleMenu();
                }}
                className="w-full text-left text-blue-600"
              >
                {labels[language].lang}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

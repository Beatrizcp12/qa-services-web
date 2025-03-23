import { Link } from "react-router-dom";

function Navbar({ language, toggleLanguage }) {
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

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-blue-600 hover:opacity-80 transition">
          QA Services
        </Link>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">{labels[language].home}</Link></li>
          <li><Link to="/services">{labels[language].services}</Link></li>
          <li><Link to="/about">{labels[language].about}</Link></li>
          <li><Link to="/contact">{labels[language].contact}</Link></li>
          <li><Link to="/hire">{labels[language].hire}</Link></li>
        </ul>
        <button
          onClick={toggleLanguage}
          className="ml-4 px-3 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
        >
          {labels[language].lang}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

function Footer({ language }) {
    return (
      <footer className="bg-gray-100 text-gray-600 py-6 mt-20 border-t">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-3 sm:mb-0">
            &copy; {new Date().getFullYear()} Beatriz Custodio – QA Services
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="mailto:beatrizcustodio262@yahoo.es" className="hover:text-blue-600 transition">
              {language === "en" ? "Email" : "Correo"}
            </a>
            <a href="https://www.linkedin.com/in/beatriz-custodio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              LinkedIn
            </a>
            <a href="/contact" className="hover:text-blue-600 transition">
              {language === "en" ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
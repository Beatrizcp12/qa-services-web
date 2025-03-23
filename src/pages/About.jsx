function About({ language }) {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6">
            {language === "en" ? "About Me" : "Sobre Mí"}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {language === "en"
              ? "I'm Beatriz Custodio, a QA specialist with experience in manual testing, usability analysis, and detailed bug reporting for web and mobile platforms. I help teams build better, more reliable digital products."
              : "Soy Beatriz Custodio, especialista en QA con experiencia en testing manual, análisis de usabilidad y reporte detallado de errores en plataformas web y móviles. Ayudo a los equipos a construir productos digitales más fiables y de mayor calidad."}
          </p>
          <p className="text-gray-600">
            {language === "en"
              ? "With a strong eye for detail and a passion for quality, I work with startups, developers, and businesses to make sure their products are ready for real users."
              : "Con gran atención al detalle y pasión por la calidad, trabajo con startups, desarrolladores y empresas para asegurar que sus productos estén listos para usuarios reales."}
          </p>
        </div>
      </section>
    );
  }
  
  export default About;
  
function Home({ language }) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-6">
            {language === "en" ? "Quality Assurance Services" : "Servicios de Garantía de Calidad"}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {language === "en"
              ? "I help digital products reach their full potential through robust testing and detailed quality analysis."
              : "Ayudo a que los productos digitales alcancen su máximo potencial mediante pruebas robustas y un análisis de calidad detallado."}
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            {language === "en" ? "Let's Talk" : "Hablemos"}
          </a>
        </div>
      </section>
    );
  }
  
  export default Home;
  
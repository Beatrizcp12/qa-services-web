function Services({ language }) {
    const services = [
      {
        en: "Manual functional testing for web and mobile apps",
        es: "Pruebas funcionales manuales para apps web y móviles",
      },
      {
        en: "Regression testing before deployment",
        es: "Pruebas de regresión antes del despliegue",
      },
      {
        en: "Detailed bug reporting with screenshots and steps",
        es: "Reporte detallado de errores con capturas y pasos",
      },
      {
        en: "User flow and usability feedback",
        es: "Feedback de usabilidad y flujos de usuario",
      },
      {
        en: "Cross-device and cross-browser testing",
        es: "Pruebas en diferentes dispositivos y navegadores",
      },
    ];
  
    return (
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-10">
          {language === "en" ? "Services Offered" : "Servicios Ofrecidos"}
        </h2>
        <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
          {services.map((service, index) => (
            <li
              key={index}
              className="border border-gray-200 p-6 rounded-xl shadow hover:shadow-md bg-gray-50"
            >
              {language === "en" ? service.en : service.es}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Services;
  
  
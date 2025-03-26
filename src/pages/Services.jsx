import { CheckCircleIcon } from '@heroicons/react/24/solid';

function Services({ language }) {
  const sections = [
    {
      title: language === "en" ? "Manual & Functional Testing" : "Testing Manual y Funcional",
      items: [
        {
          en: "Functional testing for websites and mobile apps",
          es: "Pruebas funcionales para sitios web y apps móviles",
        },
        {
          en: "Cross-browser and responsive testing",
          es: "Pruebas en múltiples navegadores y diseño responsive",
        },
        {
          en: "Test case creation and execution",
          es: "Creación y ejecución de casos de prueba",
        },
      ],
    },
    {
      title: language === "en" ? "Usability & UX Review" : "Usabilidad y Revisión UX",
      items: [
        {
          en: "Heuristic evaluation of user flows",
          es: "Evaluación heurística de flujos de usuario",
        },
        {
          en: "Detailed usability reports with suggestions",
          es: "Informes detallados de usabilidad con sugerencias",
        },
        {
          en: "UX feedback based on real user behavior",
          es: "Feedback de UX basado en comportamiento real de usuarios",
        },
      ],
    },
    {
      title: language === "en" ? "Bug Reporting & QA Documentation" : "Reportes de Bugs y Documentación QA",
      items: [
        {
          en: "Step-by-step bug reports with screenshots/videos",
          es: "Reportes paso a paso con capturas o videos",
        },
        {
          en: "Severity classification and reproducibility",
          es: "Clasificación por severidad y reproducibilidad",
        },
        {
          en: "QA checklists and test plans",
          es: "Listas de chequeo QA y planes de prueba",
        },
      ],
    },
  ];

  return (
    <section className="min-h-[calc(100vh-160px)] pt-20 pb-10 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          {language === "en" ? "What I Can Do for You" : "Lo Que Puedo Hacer por Ti"}
        </h2>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          {language === "en"
            ? "I offer thorough and detail-oriented quality assurance testing to help ensure your digital products work flawlessly, look professional, and deliver excellent user experience."
            : "Ofrezco pruebas de calidad minuciosas y orientadas al detalle para asegurar que tus productos digitales funcionen sin errores, se vean profesionales y ofrezcan una excelente experiencia de usuario."}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0" />
                    <span>{language === "en" ? item.en : item.es}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

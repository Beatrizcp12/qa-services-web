import { useState } from "react";

function Hire({ language }) {
  const services = [
    { id: 1, name: { en: "Web Functional Testing", es: "Pruebas funcionales web" }, price: 30 },
    { id: 2, name: { en: "Mobile Regression Testing", es: "Pruebas de regresión móvil" }, price: 50 },
    { id: 3, name: { en: "UX Review & Bug Report", es: "Análisis UX + reporte de bugs" }, price: 40 },
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-800 text-center mb-10">
          {language === "en" ? "Hire QA Services" : "Contratar Servicios QA"}
        </h2>

        <form className="space-y-6 text-gray-800">
          {services.map((service) => (
            <label
              key={service.id}
              className={`block p-4 border rounded-xl cursor-pointer transition ${
                selectedService.id === service.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="qa_service"
                value={service.id}
                checked={selectedService.id === service.id}
                onChange={() => setSelectedService(service)}
                className="mr-3"
              />
              <span className="font-medium">
                {language === "en" ? service.name.en : service.name.es} – {service.price}€
              </span>
            </label>
          ))}

          <div className="text-center pt-4">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="TU_CORREO_PAYPAL_AQUI" />
              <input
                type="hidden"
                name="item_name"
                value={language === "en" ? selectedService.name.en : selectedService.name.es}
              />
              <input type="hidden" name="amount" value={selectedService.price} />
              <input type="hidden" name="currency_code" value="EUR" />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                {language === "en" ? "Pay with PayPal" : "Pagar con PayPal"}
              </button>
            </form>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Hire;
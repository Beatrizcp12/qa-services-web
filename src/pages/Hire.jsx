function Hire({ language }) {
  const services = [
    {
      name: language === "en" ? "Web App Testing" : "Testing de Aplicaciones Web",
      price: "50.00",
    },
    {
      name: language === "en" ? "Mobile Regression Test" : "Test de Regresión Móvil",
      price: "70.00",
    },
    {
      name: language === "en" ? "UX Feedback Report" : "Informe de Usabilidad",
      price: "40.00",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-160px)] py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          {language === "en" ? "Hire My Services" : "Contratar Servicios"}
        </h2>
        <p className="text-gray-700 mb-10 text-lg">
          {language === "en"
            ? "Select a service below and pay securely via PayPal."
            : "Selecciona un servicio y paga de forma segura con PayPal."}
        </p>
        <div className="space-y-6">
          {services.map((service, index) => (
            <form
              key={index}
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              className="bg-white p-6 rounded-xl shadow text-left"
            >
              <input type="hidden" name="cmd" value="_xclick" />
              <input type="hidden" name="business" value="TU_CORREO_PAYPAL_AQUI" />
              <input type="hidden" name="item_name" value={service.name} />
              <input type="hidden" name="amount" value={service.price} />
              <input type="hidden" name="currency_code" value="EUR" />
              <div className="flex justify-between items-center">
                <span className="font-medium">{service.name}</span>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  {language === "en" ? "Pay €" : "Pagar €"}{service.price}
                </button>
              </div>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hire;

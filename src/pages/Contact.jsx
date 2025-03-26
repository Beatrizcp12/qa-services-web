function Contact({ language }) {
  return (
    <section className="min-h-[calc(100vh-160px)] pt-20 pb-10 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-800 mb-6">
          {language === "en" ? "Contact Me" : "Contáctame"}
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          {language === "en"
            ? "I’d love to hear from you. Please fill out the form below or send me an email directly."
            : "Me encantaría saber de ti. Rellena el formulario o envíame un correo directamente."}
        </p>

        <div className="bg-white shadow-lg rounded-2xl px-6 py-8 mx-auto max-w-xl text-left">
          <form
            action="mailto:beatrizcustodio262@yahoo.es"
            method="POST"
            encType="text/plain"
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {language === "en" ? "Your Name" : "Tu Nombre"}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {language === "en" ? "Message" : "Mensaje"}
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-xl text-lg hover:bg-blue-700 transition"
            >
              {language === "en" ? "Send Message" : "Enviar Mensaje"}
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600 text-sm">
            {language === "en"
              ? "Or email me directly at"
              : "O escríbeme directamente a"}{" "}
            <a
              href="mailto:beatrizcustodio262@yahoo.es"
              className="text-blue-600 underline"
            >
              beatrizcustodio262@yahoo.es
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

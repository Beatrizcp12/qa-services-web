import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About({ language }) {
  const isEN = language === "en";
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  const services = [
    isEN ? "Custom websites with React/Next.js" : "Sitios personalizados con React/Next.js",
    isEN ? "SEO optimization" : "Optimización SEO",
    isEN ? "CMS integrations" : "Integración con CMS",
    isEN ? "E-commerce and multilingual support" : "Tienda online y soporte multilingüe",
    isEN ? "Performance audits & redesigns" : "Auditorías de rendimiento y rediseños",
  ];

  const benefits = [
    isEN ? "7+ years of experience" : "+7 años de experiencia",
    isEN ? "Tailored development, no templates" : "Desarrollo a medida, sin plantillas",
    isEN ? "Transparent process & live previews" : "Proceso claro y vistas en vivo",
    isEN ? "Modern, scalable technology" : "Tecnología moderna y escalable",
    isEN ? "Post-launch support" : "Soporte tras el lanzamiento",
  ];

  const faqs = [
    {
      question: isEN ? "What kind of websites do you build?" : "¿Qué tipo de sitios web desarrollan?",
      answer: isEN
        ? "We build business websites, landing pages, blogs, portfolios, e-commerce and multilingual platforms. Everything is tailored to your brand and needs."
        : "Creamos sitios corporativos, landing pages, blogs, portfolios, e-commerce y plataformas multilingües. Todo a medida y adaptado a tu marca.",
      date: isEN ? "Updated: Mar 4, 2025" : "Actualizado: 4 Mar 2025",
    },
    {
      question: isEN ? "Do you offer SEO services?" : "¿Ofrecen servicios SEO?",
      answer: isEN
        ? "Yes. We use semantic HTML, meta tags, Open Graph, structured data, and technical SEO best practices to improve visibility and performance."
        : "Sí. Usamos HTML semántico, etiquetas meta, Open Graph, datos estructurados y buenas prácticas de SEO técnico para mejorar visibilidad y rendimiento.",
      date: isEN ? "Updated: Mar 3, 2025" : "Actualizado: 3 Mar 2025",
    },
    {
      question: isEN ? "Can I update my site later?" : "¿Puedo actualizar mi web después?",
      answer: isEN
        ? "Yes. We integrate CMS platforms or admin panels so you can manage content easily without coding."
        : "Sí. Integramos CMS o paneles para que puedas gestionar el contenido sin necesidad de código.",
      date: isEN ? "Updated: Mar 2, 2025" : "Actualizado: 2 Mar 2025",
    },
    {
      question: isEN ? "Do you work with freelancers or only companies?" : "¿Trabajan con freelancers o solo empresas?",
      answer: isEN
        ? "We work with all kinds of clients: entrepreneurs, small businesses, startups, NGOs and professionals who want to grow online."
        : "Trabajamos con todo tipo de clientes: emprendedores, pequeñas empresas, ONGs y profesionales que buscan crecer online.",
      date: isEN ? "Updated: Mar 1, 2025" : "Actualizado: 1 Mar 2025",
    },
    {
      question: isEN ? "Do you migrate existing websites?" : "¿Migran sitios web ya existentes?",
      answer: isEN
        ? "Yes. We migrate from WordPress, Wix, Shopify and other platforms to fast, modern custom sites."
        : "Sí. Migramos desde WordPress, Wix, Shopify y otras plataformas a sitios rápidos, modernos y personalizados.",
      date: isEN ? "Updated: Feb 28, 2025" : "Actualizado: 28 Feb 2025",
    },
    {
      question: isEN ? "Do you offer maintenance?" : "¿Ofrecen mantenimiento?",
      answer: isEN
        ? "Yes. We offer flexible maintenance plans that include updates, backups, support, SEO monitoring and improvements."
        : "Sí. Ofrecemos planes de mantenimiento que incluyen actualizaciones, copias de seguridad, soporte, monitoreo y mejoras SEO.",
      date: isEN ? "Updated: Feb 27, 2025" : "Actualizado: 27 Feb 2025",
    },
    {
      question: isEN ? "How long does a website take?" : "¿Cuánto tarda una web?",
      answer: isEN
        ? "Most sites take 2–5 weeks depending on complexity. We always provide a timeline at the beginning."
        : "La mayoría de sitios tardan de 2 a 5 semanas según la complejidad. Siempre entregamos un cronograma al inicio.",
      date: isEN ? "Updated: Feb 26, 2025" : "Actualizado: 26 Feb 2025",
    },
    {
      question: isEN ? "Are your websites responsive?" : "¿Las webs son responsive?",
      answer: isEN
        ? "Yes, all our websites are mobile-first and tested across multiple devices and browsers for full compatibility."
        : "Sí, todas nuestras webs son mobile-first y se prueban en múltiples dispositivos y navegadores para garantizar compatibilidad.",
      date: isEN ? "Updated: Feb 25, 2025" : "Actualizado: 25 Feb 2025",
    },
  ];

  const testimonials = [
    {
      name: "Laura Gómez",
      title: isEN ? "CEO at BravaFit" : "CEO de BravaFit",
      stars: 5,
      quote: isEN
        ? "They built a fast, responsive website and perfectly captured our branding. We're very happy with the outcome and user engagement has grown."
        : "Construyeron una web rápida, responsive y captaron perfectamente nuestra identidad de marca. Estamos muy contentos y la interacción de usuarios ha crecido.",
    },
    {
      name: "Álvaro Ruiz",
      title: isEN ? "Founder at StudioShape" : "Fundador de StudioShape",
      stars: 5,
      quote: isEN
        ? "We improved our SEO performance dramatically. They guided us in structure, copy and UX. Highly recommended!"
        : "Mejoramos mucho nuestro SEO. Nos guiaron en estructura, textos y experiencia de usuario. ¡Muy recomendados!",
    },
    {
      name: "Carla Moreno",
      title: isEN ? "Marketing Manager at Nova" : "Marketing en Nova",
      stars: 5,
      quote: isEN
        ? "The site is easy to manage, lightning-fast and looks amazing. Our team saves hours every week now."
        : "El sitio es fácil de gestionar, súper rápido y visualmente impecable. Ahorra horas de trabajo a nuestro equipo.",
    },
    {
      name: "Luis Ortega",
      title: isEN ? "Freelance Photographer" : "Fotógrafo freelance",
      stars: 5,
      quote: isEN
        ? "Now I finally have a site that reflects my personality and work. Everything is fast, beautiful and functional."
        : "Por fin tengo una web que refleja mi estilo y mi trabajo. Todo es rápido, bonito y funcional.",
    },
    {
      name: "Jana Pérez",
      title: isEN ? "Personal Brand Consultant" : "Consultora de marca personal",
      stars: 5,
      quote: isEN
        ? "What I loved most was how they listened. It’s not just design—it’s strategy and care."
        : "Lo que más me gustó fue cómo escuchan. No es solo diseño: es estrategia y compromiso.",
    },
    {
      name: "Tomás Delgado",
      title: isEN ? "E-commerce Manager" : "Gestor de e-commerce",
      stars: 5,
      quote: isEN
        ? "They migrated our entire store and boosted speed and conversions. Reliable and efficient."
        : "Migraron toda nuestra tienda y mejoraron la velocidad y las conversiones. Confiables y eficaces.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Hero */}
      <div className="relative max-w-6xl mx-auto mb-10">
  <img
    src="/web_develop.png"
    alt={isEN ? "Web Development Team" : "Equipo de desarrollo web"}
    className="w-full h-[350px] object-cover rounded-xl shadow-lg"
  />

  <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <a
      href="/hire"
      className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
    >
      {isEN ? "Hire Services" : "Contratar Servicios"}
    </a>
  </div>
</div>
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-700 mb-6">
          {isEN ? "Who We Are" : "Quiénes Somos"}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {isEN
            ? "We are a professional web development studio focused on building fast, scalable, SEO-optimized websites. With over 7 years of experience, we deliver tailored digital solutions that elevate your brand, improve performance and grow your online presence."
            : "Somos un estudio profesional de desarrollo web enfocado en crear sitios rápidos, escalables y optimizados para SEO. Con más de 7 años de experiencia, ofrecemos soluciones digitales a medida que elevan tu marca, mejoran el rendimiento y potencian tu presencia online."}
        </p>
      </div>

      {/* Services & Benefits */}
      <div className="w-full flex justify-center mb-20 px-4">
  <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl pl-40">
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">
        {isEN ? "Our Services" : "Nuestros Servicios"}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-left mx-auto">
        {services.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
    <div className="text-center md:text-left">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">
        {isEN ? "Why Choose Us?" : "¿Por Qué Elegirnos?"}
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-left mx-auto">
        {benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
</div>


      {/* FAQs */}
      <div className="max-w-4xl mx-auto mb-24">
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          {isEN ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
        </h3>
        {faqs.map((f, i) => (
          <details key={i} className="mb-4 bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600 group">
            <summary className="flex justify-between items-center cursor-pointer font-medium text-blue-700">
              {f.question}
              <span className="group-open:rotate-180 transition-transform">▶</span>
            </summary>
            <p className="text-sm text-gray-500 mt-1">{f.date}</p>
            <p className="text-gray-700 mt-2">{f.answer}</p>
          </details>
        ))}
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-inner mb-24">
        <h3 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          {isEN ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes"}
        </h3>
        <Slider {...sliderSettings}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-blue-50 p-6 rounded-md h-full shadow-md flex flex-col justify-between">
                <p className="text-gray-800 italic mb-4">“{t.quote}”</p>
                <div className="flex mb-2">
                  {Array(t.stars).fill().map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-blue-700">
                  — {t.name}, {t.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↑ {isEN ? "Top" : "Subir"}
        </button>
      )}
    </section>
  );
}

export default About;


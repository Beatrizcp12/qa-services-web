import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hire from "./pages/Hire";
import Footer from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar
          language={language}
          toggleLanguage={() => setLanguage((prev) => (prev === "en" ? "es" : "en"))}
        />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route path="/about" element={<About language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/hire" element={<Hire language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;

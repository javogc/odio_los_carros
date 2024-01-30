import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import Volcanes from "./components/pages/Volcanes/Volcanes";
import Projects from "./components/pages/Projects/Projects";
import Layout from "./components/Layout/Layout";
import { LanguageContext } from "./contexts/LanguageContext";

// import Map from "./components/Map";

function App() {
  const [language, setLanguage] = useState("es");

  function toggleLanguage() {
    setLanguage((language) => (language === "en" ? "es" : "en"));
  }

  return (
    <div>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/volcanes" element={<Volcanes />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;

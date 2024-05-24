import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import BioCard from "../../BioCard";
import "./HomePage.css";
import { LanguageContext } from "../../../contexts/LanguageContext";

function HomePage() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="mt-3">
      <Container>
        <BioCard
          name_esp="Hola, Soy Javier Guajardo"
          name_eng="Hi, I'm Javier Guajardo"
        />
        {language === "es" && (
          <div>
            <div>
              <h1>Javier Guajardo</h1>
              <h2>Estoy actualizando este sitio</h2>
              <h5>Próximante: página de proyectos</h5>
            </div>
            <div>
              <h5>
                Para consultas o cotizaciónes:{" "}
                <a className="homeLink" href="mailto:javiergc93@gmail.com">
                  Cóntactame
                </a>
              </h5>
            </div>
          </div>
        )}
        {language === "en" && (
          <div>
            <div>
              <h1>Javier Guajardo</h1>
              <h2>I'm updating this website</h2>
              <h5>Coming soon: projects section</h5>
            </div>
            <div>
              <h5>
                For inquiries or invoices:{" "}
                <a className="homeLink" href="mailto:javiergc93@gmail.com">
                  Contact Me
                </a>
              </h5>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default HomePage;

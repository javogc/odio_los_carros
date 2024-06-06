import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homeContainer">
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

      {/* {language === "en" && (
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
      )} */}
    </div>
  );
}

export default HomePage;

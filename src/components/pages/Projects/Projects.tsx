import React from "react";
import "./Projects.css";
import ProjectListItem from "./ProjectListItem/ProjectListItem";

export default function Projects() {
  return (
    <div>
      <ProjectListItem
        titulo="Plan Querétaro 2050"
        stack={[
          "react",
          "firebase",
          "css",
          "fullstack",
          "materialUI",
          "typescript",
        ]}
        company="Freelance"
      />
      <ProjectListItem
        titulo="Red Río Vivo"
        stack={[
          "react",
          "firebase",
          "css",
          "fullstack",
          "materialUI",
          "leaflet",
          "javascript",
        ]}
        company="Freelance"
      />
      <ProjectListItem
        titulo="Distrito Valle Oriente"
        stack={["html", "wordpress", "css", "javascript"]}
        company="Freelance"
      />
      <ProjectListItem
        titulo="Red de Información de Violencia Contra las Mujeres"
        stack={["project management", "agile", "javascript", "php", "laravel"]}
        company="Gobierno CDMX"
      />
      {/* https://datosseguridad.cdmx.gob.mx/ */}
      <ProjectListItem
        titulo="Dashboard Público de Seguridad"
        stack={["angular", "d3.js", "html", "typescript", "javascript"]}
        company="Gobierno CDMX"
      />
      {/* https://modelo.covid19.cdmx.gob.mx/proyecciones */}
      <ProjectListItem
        titulo="Modelo COVID19 - CDMX"
        stack={["angular", "d3.js", "html", "typescript", "javascript"]}
        company="Gobierno CDMX"
      />
      <ProjectListItem
        titulo="Dashboard COVID19 - CDMX"
        stack={["angular", "d3.js", "html", "typescript"]}
        company="Gobierno CDMX"
      />
      <ProjectListItem
        titulo="Dashboard de Seguridad - CDMX"
        stack={["angular", "d3.js", "html", "typescript"]}
        company="Gobierno CDMX"
      />
    </div>
  );
}

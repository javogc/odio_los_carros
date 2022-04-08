import React from "react";
import BioCard from "./BioCard";
import { Container } from "react-bootstrap";

function AboutPage() {
  return (
    <Container>
      <BioCard
        name="Javier Guajardo"
        bio_esp="Desarrolador front-end interesado en la visualización de datos"
        bio_eng="Front-end Developer and Aspiring Data Viz Engineer"
        location="&#128205; CDMX"
        github="https://github.com/javogc"
        twitter="https://twitter.com/javiergc"
        linkedin="https://www.linkedin.com/in/jguajardo"
      />
    </Container>
  );
}

export default AboutPage;

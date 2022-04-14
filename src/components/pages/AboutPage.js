import BioCard from "../BioCard";
import { Container } from "react-bootstrap";

function AboutPage() {
  return (
    <Container>
      <BioCard
        bio_esp="Desarrolador front-end interesado en la visualización de datos"
        bio_eng="Front-end Developer and Aspiring Data Viz Engineer"
        location="&#128205; CDMX"
      />
    </Container>
  );
}

export default AboutPage;

import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import BioCard from "../../BioCard";
import Card from "../../Card/Card";
import List from "../../List/List";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { translations } from "../../../utils/translations";

function HomePage() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="mt-3">
      <Container>
        <BioCard name_esp="Javier Guajardo" name_eng="Javier Guajardo" />
        <div>
          <h2>Updating...</h2>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

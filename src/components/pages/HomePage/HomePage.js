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
        <BioCard
          name_esp="Javier Guajardo"
          name_eng="Javier Guajardo"
          location="&#128205; CDMX"
        />
        <Card
          title={
            language === "en"
              ? translations.english.title
              : translations.spanish.title
          }
          content={
            language === "en"
              ? translations.english.homeContent
              : translations.spanish.homeContent
          }
        />
        <List
          title={
            language === "en"
              ? translations.english.listTitle
              : translations.spanish.listTitle
          }
          subtitle={
            language === "en"
              ? translations.english.listSubtitle
              : translations.spanish.listSubtitle
          }
          fetchingFailed={
            language === "en"
              ? translations.english.listFetchingFailed
              : translations.spanish.listFetchingFailed
          }
          fetchingSuccess={
            language === "en"
              ? translations.english.listFetchingSuccess
              : translations.spanish.listFetchingSuccess
          }
        />
      </Container>
    </div>
  );
}

export default HomePage;

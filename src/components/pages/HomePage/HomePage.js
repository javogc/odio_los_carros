import React from "react";
import { Container } from "react-bootstrap";
import BioCard from "../../BioCard";
import Card from "../../Card/Card";
import List from "../../List/List";

function HomePage() {
  return (
    <div className="mt-3">
      <Container>
        <BioCard
          name_esp="Javier Guajardo"
          name_eng="Javier Guajardo"
          location="&#128205; CDMX"
        />
        <Card
          title={"About this site"}
          content={
            <div>
              <p>
                This is my personal portfolio and react playground.
                <b>"Odio los carros"</b> translates to <b>"I hate cars"</b> in
                english. I chose this name for my online presence because I feel
                it embodies my passion for building{" "}
                <b>
                  solarpunk, self-reliant, sustainable and community-oriented
                  technology
                </b>
                ,that positively impact our lifes in cities and our relationship
                with nature.&#128690;
                <br />
              </p>
            </div>
          }
        />
        <List />
      </Container>
    </div>
  );
}

export default HomePage;

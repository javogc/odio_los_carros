import React from "react";
import { Container } from "react-bootstrap";
import BioCard from "../BioCard";

function HomePage() {
  return (
    <div className="mt-3">
      <Container>
        <BioCard
          name_esp="Javier Guajardo"
          name_eng="Javier Guajardo"
          location="&#128205; CDMX"
        />
        <div className="row mt-5">
          <div className="col-md-12">
            <h4>About this site:</h4>
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
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

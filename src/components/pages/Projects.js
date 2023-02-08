import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function Projects() {
  useEffect(() => {
    console.log("use effect");
  }, []);
  return (
    <div>
      <Container>
        <h1>Projects</h1>
        <p>12/06/2022</p>
        <p>
          I'm still thinking about the layout I want for my projects page. But
          in the meantime, I'm building a sample project in this page that
          showcases some of my frontend skills.
        </p>
      </Container>
    </div>
  );
}

export default Projects;

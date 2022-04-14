import React from "react";
import axios from "axios";
import JournalEntry from "../JournalEntry";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import BioCard from "../BioCard";
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

function HomePage() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  function createPost() {
    client
      .post("/", {
        title: "Javier Guajardo",
        body: "Front end developer",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function updatePost() {
    client
      .put("/1", {
        title: "¡Hola!",
        body:
          "Este mensaje es del 12/03/2022, ahorita estoy aprendiendo a usar axios para hacer llamadas a APIs con react. Hay botones para probar mis funciones de update y delete. El delete borra todo, le tienen que dar refresh para volver a ver mi info (por ahora)",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function deletePost() {
    await client.delete("/1");
    alert(
      "Post deleted! (ESTOY APRENDIENDO A USAR AXIOS CON REACT !)  12/03/2022!!"
    );
    setPost(null);
  }

  if (error) return `Error: ${error.message}`;
  if (!post) return null;

  return (
    <div className="mt-3">
      <Container>
        <BioCard
          bio_esp="Desarrolador front-end interesado en la visualización de datos"
          bio_eng="Front-end Developer and Aspiring Data Viz Engineer"
          location="&#128205; CDMX"
        />
        <p>About this website:</p>
        <p>
          This is my personal portfolio and react playground.{" "}
          <b>"Odio los carros"</b> translates to <b>"I hate cars"</b> in
          english. I chose this name for my online presence because I feel it
          embodies my passion for{" "}
          <b>
            sustainable transportation in cities and my life as an urban
            cyclist. &#128690;
          </b>{" "}
          <br />
        </p>
        <p>
          I'm currently looking for{" "}
          <b>full-time front-end development posistions,</b> and I'm getting my
          self familiarized with <b>react</b> through building my personal
          portfolio with it. Below, you can see journal entries that document my
          learning process.
        </p>
      </Container>
      <Container>
        <div className="row mt-5">
          <h4>Latest updates:</h4>
          <JournalEntry
            title="14/04/2022 - Updated style and added routing/navigation and Projects page."
            text="I changed the look and feel of the site and updated the colors and font-family. I also added the 'react-router-dom' library to enable navigation between pages and created a new Projects page where I'll start posting my personal projects soon. "
          />
          <JournalEntry
            title="08/04/2022 - Refactored app, and added a navbar"
            text="I worked on refactoring the app to have a decluttered App.js file. I also added a Layout and Navigation component to organize those functionalities in Components, and also created a HomePage and AboutPage component for an upcoming implementation of routing."
          />
          {/* <JournalEntry
          title="05/04/2022 - Installed bootstrap and created journal entry component"
          text="I'm continuing to explore react. This time I added bootstrap which is the CDN I'm more experienced with and I also like it very much."
        /> */}
        </div>
      </Container>
    </div>
  );
}

export default HomePage;

import React from "react";
import axios from "axios";
import JournalEntry from "./JournalEntry";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

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
    <div>
      <Container>
        <h2>About this website:</h2>
        <p>
          This is my personal portfolio and react playground.{" "}
          <b>"Odio los carros"</b> translates to <b>"I hate cars"</b> in
          english. I chose this name for my online presence because i feel it
          embodies my passion for sustainable transportation in cities and my
          life as an urban cyclist. I'm currently looking for front-end
          development posistions, and I'm getting my self familiarized with
          react through building my personal portfolio with it. Below, you can
          see journal entries that document my learning process.
        </p>
        <JournalEntry
          title="08/04/2022 - Refactored app, and added a navbar"
          text="I worked on refactoring the app to have a decluttered App.js file. I also added a Layout and Navigation component to organize those functionalities in Components, and also created a HomePage and AboutPage component for an upcoming implementation of routing."
        />
        <JournalEntry
          title="05/04/2022 - Installed bootstrap and created journal entry component"
          text="I'm continuing to explore react. This time I added bootstrap which is the CDN I'm more experienced with and I also like it very much."
        />
      </Container>
    </div>
  );
}

export default HomePage;

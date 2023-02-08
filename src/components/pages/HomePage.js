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
        body: "Este mensaje es del 12/03/2022, ahorita estoy aprendiendo a usar axios para hacer llamadas a APIs con react. Hay botones para probar mis funciones de update y delete. El delete borra todo, le tienen que dar refresh para volver a ver mi info (por ahora)",
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

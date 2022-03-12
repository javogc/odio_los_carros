import React from "react";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import BioCard from "./components/BioCard";
// import Map from "./components/Map";
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

function App() {
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
      <BioCard
        name="Javier Guajardo"
        bio="Front-end Developer and Aspiring Data Viz Engineer"
        location="&#128205; Mexico City"
        github="https://github.com/javogc"
        twitter="https://twitter.com/javiergc"
        linkedin="https://www.linkedin.com/in/jguajardo"
      />
      <h1>Lo de abajo es un test con axios</h1>
      <p>
        (el texto lo estoy jalando con POST usando la{" "}
        <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder API</a>{" "}
        ):
      </p>
      <div />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {/* <button onClick={createPost}>Create Post</button> */}
      <button onClick={updatePost}>Update - (UN MENSAJE)</button>
      <button onClick={deletePost}>B0rr4R</button>
    </div>
  );
}

export default App;

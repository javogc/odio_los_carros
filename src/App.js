import React from "react";
import NavBar from "./components/layout/NavBar";
import BioCard from "./components/BioCard";

function App() {
  return (
    // <div className="Bio">
    //   <h3>Javier Guajardo</h3>
    //   <h5>Front-end Developer and Aspiring Data Viz Engineer</h5>
    //   <h5>&#128205; Mexico City </h5>
    //   {/* <h5>This is a test </h5> */}
    //   <div>
    //     <a class="Link" href="https://github.com/javogc" target="blank">
    //       GitHub
    //     </a>
    //     <a class="Link" href="https://twitter.com/javiergc" target="blank">
    //       Twitter
    //     </a>
    //     <a
    //       class="Link"
    //       href="https://www.linkedin.com/in/jguajardo"
    //       target="blank"
    //     >
    //       LinkedIn
    //     </a>
    //   </div>
    // </div>
    <BioCard
      name="Javier Guajardo"
      bio="Front-end Developer and Aspiring Data Viz Engineer"
      location="&#128205; Mexico City"
      github="https://github.com/javogc"
      twitter="https://twitter.com/javiergc"
      linkedin="https://www.linkedin.com/in/jguajardo"
    />
  );
}

export default App;

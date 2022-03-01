import React from "react";
import "./App.css";

function App() {
    return (
        <div className="Bio">
            <h3>Javier Guajardo</h3>
            <h5>Front-end Developer and Aspiring Data Viz Engineer</h5>
            <h5>&#128205; Mexico City </h5>
            {/* <h5>This is a test </h5> */}
            <div>
                <a class="Link" href="https://github.com/javogc" target="blank">
                    GitHub
                </a>
                <a
                    class="Link"
                    href="https://twitter.com/javiergc"
                    target="blank"
                >
                    Twitter
                </a>
                <a
                    class="Link"
                    href="https://www.linkedin.com/in/jguajardo"
                    target="blank"
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default App;

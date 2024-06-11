import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/projects">Projects</Link>
      <a href="https://github.com/javogc" target="blank">
        Github
      </a>
      <a
        href="https://drive.google.com/file/d/1gF-Xj7v_tEP4Q_z6LZSfL6RAu95SP7Nc/view?usp=sharing"
        target="blank"
      >
        Resume
      </a>
      <a href="https://www.linkedin.com/in/jguajardo" target="blank">
        Linkedin
      </a>
    </nav>
  );
}

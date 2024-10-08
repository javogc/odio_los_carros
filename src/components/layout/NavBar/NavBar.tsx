import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
// import logo from "../../../images/logo1.png";

export default function NavBar() {
  return (
    <nav>
      {/* <img src={logo} style={{ width: "10%" }}></img> */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>

      {/* <a href="https://github.com/javogc" target="blank">
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
      </a> */}
    </nav>
  );
}

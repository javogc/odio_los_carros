import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
import logo from "../../../images/logo1.png";

export default function NavBar() {
  return (
    <nav className="flex bg-white px-6 py-4 justify-between items-center ">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} className="h-24"></img>
        </Link>
      </div>

      <div className="flex space-x-8">
        <Link
          to="/projects"
          className="text-odioGreen text-xl font-bold transition-all duration-600 hover:letter-spacing-0.5em hover:text-odioHover"
        >
          Projects
        </Link>
      </div>
      {/* <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div> */}

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

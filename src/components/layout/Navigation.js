import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";

function Navigation() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <Navbar expand="lg" className="custom-nav mb-3">
      <Container>
        <Nav.Link href="/">{language === "en" ? "Home" : "Inicio"}</Nav.Link>
        <Nav.Link
          href="https://drive.google.com/file/d/1gF-Xj7v_tEP4Q_z6LZSfL6RAu95SP7Nc/view?usp=sharing"
          target="blank"
        >
          {language === "en" ? "Resume" : "CV"}
        </Nav.Link>
        <Nav.Link href="https://github.com/javogc" target="blank">
          Github
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/jguajardo" target="blank">
          LinkedIn
        </Nav.Link>
        <Nav.Link href="/projects">
          {language === "en" ? "Projects" : "Proyectos"}
        </Nav.Link>
        <Nav.Item>
          <select defaultValue={language} onChange={toggleLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </Nav.Item>
        {/* <Nav.Link>Resume</Nav.Link> */}
      </Container>
    </Navbar>
  );
}

export default Navigation;

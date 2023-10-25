import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-nav mb-3">
      <Container>
        <Nav.Link
          href="https://drive.google.com/file/d/1gF-Xj7v_tEP4Q_z6LZSfL6RAu95SP7Nc/view?usp=sharing"
          target="blank"
        >
          Resume{" "}
        </Nav.Link>
        <Nav.Link href="https://github.com/javogc" target="blank">
          Github
        </Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/jguajardo" target="blank">
          LinkedIn
        </Nav.Link>
        {/* <Nav.Link>Resume</Nav.Link> */}
      </Container>
    </Navbar>
  );
}

export default Navigation;

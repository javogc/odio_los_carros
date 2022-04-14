import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <Navbar expand="lg" className="custom-nav mb-3">
      <Container>
        <Navbar.Brand href="#">Javier Guajardo</Navbar.Brand>
        <Nav.Link>About</Nav.Link>
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

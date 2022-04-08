import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Odio los carros</Navbar.Brand>
        <Nav.Link>About</Nav.Link>
        {/* <Nav.Link>Resume</Nav.Link> */}
      </Container>
    </Navbar>
  );
}

export default Navigation;

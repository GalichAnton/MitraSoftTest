import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className={"align-items-center"}>
        <Container>
          <Navbar.Brand href="#home">Copyright</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/GalichAnton">Author</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ava from "../../assets/images/ava.jpg";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src={ava}
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle"
              alt="React Bootstrap logo"
            />{" "}
            Test Photos
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"about"}>
                About
              </Nav.Link>
              <Nav.Link href={"mailto:inthesky133@gmail.com"}>
                My address
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

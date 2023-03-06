import React, { useState } from "react";
import "./NavbarComponent.css";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <>
      <div className="nav-component">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="ms-5 fs-3 fw-bold">
              Turning Heads
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  <Link className="nav-link fw-bold fs-6" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link href="#myblog">
                  <Link className="nav-link fw-bold fs-6" to="/myblog">
                    My Blog
                  </Link>
                </Nav.Link>
                <Nav.Link href="#about">
                  <Link className="nav-link fw-bold fs-6" to="/about">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link href="#responseform" className="fw-bold fs-6">
                <a className="nav-link fw-bold fs-6">
                  Contact
                </a>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavbarComponent;

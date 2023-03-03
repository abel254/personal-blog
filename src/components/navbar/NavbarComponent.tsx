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
      {/* <div className="nav-component">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ms-5">
          <a className="navbar-brand fs-3 fw-bold" href="/">
            Turning Heads
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active me-1">
                <Link className="nav-link fw-bold fs-6" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link className="nav-link fw-bold fs-6" to="/myblog">
                  My Blog
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link className="nav-link fw-bold fs-6" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item me-1">
                <a className="nav-link fw-bold fs-6" href="#responseform">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
       
    </div>
      */}
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
                <Nav.Link href="#link">
                  <Link className="nav-link fw-bold fs-6" to="/myblog">
                    My Blog
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
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

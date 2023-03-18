import React, { useState } from "react";
import "./NavbarComponent.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function NavbarComponent() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <>
      {/* <div className="nav-component">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="ms-5 fs-3 fw-bold">
              Turning Heads
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  <NavLink className="nav-link fw-bold fs-6" to="/">
                    Home
                  </NavLink>
                </Nav.Link>
                <Nav.Link href="#myblog">
                  <NavLink className="nav-link fw-bold fs-6" to="/myblog">
                    My Blog
                  </NavLink>
                </Nav.Link>
                <Nav.Link href="#about">
                  <NavLink className="nav-link fw-bold fs-6" to="/about">
                    About
                  </NavLink>
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
      </div> */}

      <div className="nav-component">
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className="ms-5 fs-3 fw-bold">
            Turning Heads
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <NavLink className="nav-link fw-bold fs-6" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#myblog">
                <NavLink className="nav-link fw-bold fs-6" to="/myblog">
                  My Blog
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#about">
                <NavLink className="nav-link fw-bold fs-6" to="/about">
                  About
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#responseform" className="fw-bold fs-6">
                <a className="nav-link fw-bold fs-6">Contact</a>
              </Nav.Link>
            </Nav>
            <Button variant="outline-primary" onClick={handleShowOffcanvas}>
              Menu
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" className="offcanvas-max-width-600">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="#home" onClick={handleCloseOffcanvas}>
                <NavLink className="nav-link fw-bold fs-6" to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#my-blog" onClick={handleCloseOffcanvas}>
                <NavLink className="nav-link fw-bold fs-6" to="/myblog">
                  My Blog
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#about" onClick={handleCloseOffcanvas}>
                <NavLink className="nav-link fw-bold fs-6" to="/about">
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default NavbarComponent;

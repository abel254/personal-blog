import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ms-5">
          <a className="navbar-brand fs-2 fw-bold" href="/">
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
                <Link className="nav-link fw-bold fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link className="nav-link fw-bold fs-5" to="/myblog">
                  My Blog
                </Link>
              </li>
              <li className="nav-item me-1">
                <Link className="nav-link fw-bold fs-5" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item me-1">
                <a className="nav-link fw-bold fs-5" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

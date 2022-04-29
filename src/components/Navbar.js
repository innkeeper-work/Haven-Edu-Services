// External import
import React from "react";
import { Link } from "react-router-dom";

// Components
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";

// Images
import havenfavico from "../images/havenfavico.png";

export const NavbarSection = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={havenfavico}
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/games" className="nav-link">
                Games
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="https://m.facebook.com/haveneduservices/"
            className="mx-2"
            style={{ color: "#000" }}
          >
            <FacebookIcon />
          </Link>
          <Link
            to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
            className="mx-2"
            style={{ color: "#000" }}
          >
            <InstagramIcon />
          </Link>
          <Link to="/about" className="mx-2" style={{ color: "#000" }}>
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </nav>
  );
};

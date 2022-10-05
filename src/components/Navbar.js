// External import
import React from "react";
import { Link } from "react-router-dom";

// Components
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";
// import { NavbarSec } from "../components/styles/stylcomponents";
import { Navitemmobile } from "../components/styles/stylcomponents";
import { Navicons } from "../components/styles/stylcomponents";
import { NavUL } from "../components/styles/stylcomponents";

// Images
import haven120 from "../images/haven120.png";
import haventwo from "../images/haventwo.png";

export const NavbarSection = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={haventwo}
            alt=""
            className="d-inline-block align-text-top"
            style={{ maxWidth: "20%", maxHeight: "20%" }}
          />
        </a>
        {/* <Link to="/" className="navbar-brand ms-2 ">
          {" "}
          <img src={havenfavico} className="w-200 h-200" alt="" />
        </Link> */}
        <div
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </div>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <NavUL className="navbar-nav">
            <li className="nav-item mx-3">
              <Link
                to="/"
                className="nav-link active"
                style={{ color: "#000000" }}
                aria-current="page"
              >
                <Navitemmobile>
                  <b>Home</b>
                </Navitemmobile>{" "}
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                to="/about"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <Navitemmobile>
                  <b>About</b>
                </Navitemmobile>
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                to="/gallery"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <Navitemmobile>
                  <b>Gallery</b>
                </Navitemmobile>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link
                to="/blog"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <Navitemmobile>
                  <b>Blog</b>
                </Navitemmobile>
              </Link>
            </li>

            <li className="nav-item mx-3">
              <Link
                to="/contact"
                style={{ color: "#000000" }}
                className="nav-link"
              >
                <Navitemmobile>
                  <b>Contact</b>
                </Navitemmobile>
              </Link>
            </li>
          </NavUL>{" "}
          <Navicons className="d-flex">
            <Link
              to="https://m.facebook.com/haveneduservices/"
              className="mx-2"
              style={{ color: "#2D25E1" }}
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
              className="mx-2"
              style={{ color: "#E1116C" }}
            >
              <InstagramIcon />
            </Link>
            <Link to="/about" className="mx-2" style={{ color: "#37A7CF" }}>
              <LinkedInIcon />
            </Link>
          </Navicons>
        </div>
      </div>
    </div>
  );
};

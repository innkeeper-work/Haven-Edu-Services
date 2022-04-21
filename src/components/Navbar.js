// External import
import React from "react";

// Components
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";

// Images
import havenfavico from "../images/havenfavico.png";

export const NavbarSection = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
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
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Games
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link">Blog</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
          <a href="" className="mx-2">
            <FacebookIcon />
          </a>
          <a href="" className="mx-2">
            <InstagramIcon />
          </a>
          <a href="" className="mx-2">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </nav>
  );
};

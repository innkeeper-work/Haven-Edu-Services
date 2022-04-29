//External Component
import { Link } from "react-router-dom";

//Component
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";

const Footer = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#724598", color: "#ffffff" }}
      >
        <footer className="py-5">
          <div className="row px-5">
            <div className="col-5">
              <h5>About</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                debitis beatae numquam nostrum quia fuga pariatur dicta
                consequatur maxime nobis.{" "}
              </p>
            </div>

            <div className="col-2">
              <h5>Menu</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 ">
                  <Link
                    to="/"
                    className="nav-link text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about" className="nav-link text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/games" className="nav-link text-white">
                    Games
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/gallery" className="nav-link text-white">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/blog" className="nav-link text-white">
                    Blog
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/contact" className="nav-link text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-5">
              <h5>Address</h5>
              <p>
                8th Gear Hub, 11b Colin Onabule Crescent, Diamond Estate, Off
                CMD Road (beside Secretariat/Magodo gate) Lagos, Nigeria.
              </p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a
                    href="tel:+234809 843 8885"
                    className="nav-link p-0 text-white"
                  >
                    +234809 843 8885
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="mailto:haveneduservices@gmail.com"
                    className="nav-link p-0 text-white"
                  >
                    haveneduservices@gmail.com
                  </a>
                </li>
                <div>
                  <div className="d-flex">
                    {" "}
                    <Link
                      to="https://m.facebook.com/haveneduservices/"
                      className="mx-2"
                      style={{ color: "#fff" }}
                    >
                      <FacebookIcon />
                    </Link>
                    <Link
                      to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
                      className="mx-2"
                      style={{ color: "#fff" }}
                    >
                      <InstagramIcon />
                    </Link>
                    <Link
                      to="/about"
                      className="mx-2"
                      style={{ color: "#fff" }}
                    >
                      <LinkedInIcon />
                    </Link>
                  </div>{" "}
                </div>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

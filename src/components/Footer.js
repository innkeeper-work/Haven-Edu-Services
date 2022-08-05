//External Component
import { Link } from "react-router-dom";

//Component
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";

// Images
import haven120 from "../images/haven120.png";

// const Footer = () => {
//   return (
//     <>
//       <div
//         className="container-fluid"
//         style={{ backgroundColor: "#724598", color: "#ffffff" }}
//       >
//         <footer className="py-5">
//           <div className="row px-5">
//             <div className="col-lg-4 col-md-4  px-4">
//               <h5>About</h5>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
//                 debitis beatae numquam nostrum quia fuga pariatur dicta
//                 consequatur maxime nobis.{" "}
//               </p>
//             </div>

//             <div className="col-lg-2 col-md-2">

//               <ul className="nav flex-column">
//                 <li className="nav-item mb-2">
//                   <Link
//                     to="/"
//                     className="nav-link text-white"
//                     aria-current="page"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item mb-2">
//                   <Link to="/about" className="nav-link text-white">
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item mb-2">
//                   <Link to="/gallery" className="nav-link text-white">
//                     Gallery
//                   </Link>
//                 </li>

//               </ul>
//             </div>
//             <div className="col-lg-2 col-md-2">

//               <ul className="nav flex-column">

//                 <li className="nav-item mb-2">
//                   <Link to="/blog" className="nav-link text-white">
//                     Blog
//                   </Link>
//                 </li>
//                 <li className="nav-item mb-2">
//                   <Link to="/contact" className="nav-link text-white">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className="col-lg-4 col-md-4 px-4">
//               <h5>Address</h5>
//               <p>
//                 8th Gear Hub, 11b Colin Onabule Crescent, Diamond Estate, Off
//                 CMD Road (beside Secretariat/Magodo gate) Lagos, Nigeria.
//               </p>
//               <ul className="nav flex-column">
//                 <li className="nav-item mb-2">
//                   <a
//                     href="tel:+234809 843 8885"
//                     className="nav-link p-0 text-white"
//                   >
//                     +234809 843 8885
//                   </a>
//                 </li>
//                 <li className="nav-item mb-2">
//                   <a
//                     href="mailto:haveneduservices@gmail.com"
//                     className="nav-link p-0 text-white"
//                   >
//                     haveneduservices@gmail.com
//                   </a>
//                 </li>
//                 <div>
//                   <div className="d-flex">
//                     {" "}
//                     <Link
//                       to="https://m.facebook.com/haveneduservices/"
//                       className="mx-2"
//                       style={{ color: "#fff" }}
//                     >
//                       <FacebookIcon />
//                     </Link>
//                     <Link
//                       to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
//                       className="mx-2"
//                       style={{ color: "#fff" }}
//                     >
//                       <InstagramIcon />
//                     </Link>
//                     <Link
//                       to="/about"
//                       className="mx-2"
//                       style={{ color: "#fff" }}
//                     >
//                       <LinkedInIcon />
//                     </Link>
//                   </div>{" "}
//                 </div>
//               </ul>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };
const Footer = () => {
  return (
    <>
      {/* <div
        className="container-fluid"
        style={{ backgroundColor: "#724598", color: "#ffffff" }}
      >
        <footer className="py-5">
          <div className="row px-5">
           
          </div>
        </footer>
      </div> */}
      <div
        className="container"
        // style={{ backgroundColor: "#724598", color: "#ffffff" }}
      >
        {/* <div> */}{" "}
        <ul class="nav justify-content-center text-dark pb-3 mb-3">
          <li class="nav-item ">
            <Link to="/" class="nav-link px-2 " style={{ color: "#623A75" }}>
              <b>Home</b>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/about"
              class="nav-link px-2 "
              style={{ color: "#6E7DB5" }}
            >
              <b>About</b>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/gallery"
              class="nav-link px-2 "
              style={{ color: "#6E7DB5" }}
            >
              <b>Gallery</b>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/blog"
              class="nav-link px-2 "
              style={{ color: "#6E7DB5" }}
            >
              <b>Blog</b>
            </Link>
          </li>
          <li class="nav-item">
            <Link
              to="/contact"
              class="nav-link px-2 "
              style={{ color: "#6E7DB5" }}
            >
              <b>Contact</b>
            </Link>
          </li>
        </ul>
        {/* </div> */}
        <footer className="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top">
          <div className="col-md-6 col-sm-6 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              {/* <a className="navbar-brand" href="#"> */}
              <img
                src={haven120}
                alt=""
                className="d-inline-block align-text-top"
              />
              {/* </a> */}
            </a>
            <span className="mb-3 mb-md-0 text-muted">
              &copy; 2022 &nbsp;
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "#000000" }}
              >
                <b>Haven-Edu Services</b>
              </Link>
            </span>
          </div>

          <ul className="nav col-md-6 col-sm-6 justify-content-end list-unstyled d-flex">
            <li className="ms-4">
              <a
                className=""
                href="https://m.facebook.com/haveneduservices/"
                style={{ color: "#2D25E1" }}
              >
                <FacebookIcon />
              </a>
            </li>
            <li className="ms-4">
              <a
                className=""
                href="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
                style={{ color: "#E1116C" }}
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="ms-4">
              <a className="" href="#" style={{ color: "#37A7CF" }}>
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;

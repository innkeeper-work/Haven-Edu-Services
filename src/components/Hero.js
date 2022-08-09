import React, { useState } from "react";
import { Link } from "react-router-dom";

//External import
import { HeroBg } from "../components/styles/stylcomponents";
import { AboutHeroBg } from "../components/styles/stylcomponents";
import { GalleryHeroBg } from "../components/styles/stylcomponents";
import { GalleryHeroCard } from "../components/styles/stylcomponents";
import { BlogHeroBg } from "../components/styles/stylcomponents";
import Contact from "../pages/Contact";

// Components
import { FacebookIcon } from "../components/Icons";
import { InstagramIcon } from "../components/Icons";
import { LinkedInIcon } from "../components/Icons";
//Images
import kid1 from "../images/kid1.png";
import aboutheroimage from "../images/aboutheroimage.png";
import blogheroimage from "../images/blogheroimage.png";

// export const StickyIcons = () => {
//   return(
//     <div className="col-lg-2 col-md-2 position-sticky top-0 start-0">
//               <div
//                 className="d-flex flex-column flex-shrink-0 bg-light position-sticky top-0 start-0"
//                 style={{ width: "4.5rem" }}
//               >
//                 <a
//                   href="/"
//                   className="d-block p-3 link-dark text-decoration-none"
//                   title="Icon-only"
//                   data-bs-toggle="tooltip"
//                   data-bs-placement="right"
//                 >
//                   <svg
//                     className="bi pe-none"
//                     style={{ width: "40", height: "32" }}
//                   >
//                     {/* <use xlink:href="#bootstrap" /> */}
//                   </svg>
//                   <span className="visually-hidden">Icon-only</span>
//                 </a>
//                 <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
//                   <li className="nav-item">
//                     <a
//                       href="#"
//                       className="nav-link active py-3 border-bottom rounded-0"
//                       aria-current="page"
//                       title="Home"
//                       data-bs-toggle="tooltip"
//                       data-bs-placement="right"
//                     >
//                       <svg
//                         className="bi pe-none"
//
//                         role="img"
//                         aria-label="Home"
//                       >
//                         {/* <use xlink:href="#home" /> */}
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="nav-link py-3 border-bottom rounded-0"
//                       title="Dashboard"
//                       data-bs-toggle="tooltip"
//                       data-bs-placement="right"
//                     >
//                       <svg
//                         className="bi pe-none"
//                         style={{ width: "40", height: "32" }}
//                         role="img"
//                         aria-label="Dashboard"
//                       >
//                         {/* <use xlink:href="#speedometer2" /> */}
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="nav-link py-3 border-bottom rounded-0"
//                       title="Orders"
//                       data-bs-toggle="tooltip"
//                       data-bs-placement="right"
//                     >
//                       <svg
//                         className="bi pe-none"
//                         style={{ width: "40", height: "32" }}
//                         role="img"
//                         aria-label="Orders"
//                       >
//                         {/* <use xlink:href="#table" /> */}
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="nav-link py-3 border-bottom rounded-0"
//                       title="Products"
//                       data-bs-toggle="tooltip"
//                       data-bs-placement="right"
//                     >
//                       <svg
//                         className="bi pe-none"
//                         style={{ width: "40", height: "32" }}
//                         role="img"
//                         aria-label="Products"
//                       >
//                         {/* <use xlink:href="#grid" /> */}
//                       </svg>
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="nav-link py-3 border-bottom rounded-0"
//                       title="Customers"
//                       data-bs-toggle="tooltip"
//                       data-bs-placement="right"
//                     >
//                       <svg
//                         className="bi pe-none"
//                         style={{ width: "40", height: "32" }}
//                         role="img"
//                         aria-label="Customers"
//                       >
//                         {/* <use xlink:href="#people-circle" /> */}
//                       </svg>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>)
// }

export const HeroSection = () => {
  return (
    <HeroBg className="px-4 container-fluid pt-3 pb-4">
      <div className="row align-items-center justify-content-center mt-4 mx-4">
        <div className="col-lg-6 col-md-7 col-sm-12 py-5">
          <h3 className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
            We are a group of Multi-Language, Arts and Technology Childhood
            Education Specialists.
          </h3>
          <h4 className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none">
            We are a group of Multi-Language, Arts and Technology Childhood
            Education Specialists.
          </h4>
          <p className="d-flex">
            We partner with schools to facilitate exotic and strategic areas of
            learning to future Leaders
          </p>
          <div className="d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#724598", color: "#ffffff" }}
            >
              <b>Register Now</b>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={kid1}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </HeroBg>
  );
};

// export const AboutHeroSection = () => {
//   return (
//     <AboutHeroBg className="px-4 container-fluid pt-3 pb-4">
//       <div className="row align-items-center justify-content-start mt-4 mx-5 ps-5">
//         <div className="col-lg-6 col-md-7 col-sm-12 py-5">
//           <h3 className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
//             Who We Are
//           </h3>
//           <h4 className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none">
//             Who We Are
//           </h4>
//           <p className="d-flex">
//             Haven Edu-Services is an extra-curricular childhood educational
//             organisation focused on providing training contents related to
//             Multi-languages, Technology and Arts for children (ages 4-12) and
//             Teenagers (ages 13-16)
//           </p>
//           <div className="d-md-flex justify-content-md-start">
//             <button
//               type="button"
//               className="btn"
//               style={{ backgroundColor: "#724598", color: "#ffffff" }}
//             >
//               <b>Register Now</b>
//             </button>
//           </div>
//         </div>
// {
/* <div className="col-lg-5 col-md-5 col-sm-12">
//           <img
//             src={kid1}
//             className="d-block mx-lg-auto img-fluid"
//             alt=""
//             loading=""
//           />
//         </div> */
// }
//       </div>
//     </AboutHeroBg>
//   );
// };
export const AboutHeroSection = () => {
  return (
    <AboutHeroBg className="px-4 container-fluid">
      <div className="row align-items-center justify-content-center mx-4">
        <div className="col-lg-6 col-md-7 col-sm-12 py-5">
          <h3
            className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none"
            style={{ color: "#2B0947" }}
          >
            Who We Are
          </h3>
          <h4
            className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none"
            style={{ color: "#2B0947" }}
          >
            Who We Are
          </h4>
          <p className="d-flex">
            Haven Edu-Services is an extra-curricular childhood educational
            organisation focused on providing training contents related to
            Multi-languages, Technology and Arts for children (ages 4-12) and
            Teenagers (ages 13-16)
          </p>
          {/* <div className="d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#724598", color: "#ffffff" }}
            >
              <b>Register Now</b>
            </button>
          </div> */}
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <img
            src={aboutheroimage}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </AboutHeroBg>
  );
};
export const GalleryHeroSection = () => {
  return (
    <GalleryHeroBg className="px-4 container-fluid py-5 align-items-center">
      {/* <div className="container py-5"> */}
      <div className="row justify-content-center pt-5 mt-5">
        <div className="col-lg-4 col-md-4 col-sm-10 col-xs-6">
          <GalleryHeroCard className="card mb-5 pt-5 mt-5">
            <div className="card-body">
              <h3 className="card-title text-center ">Gallery Session</h3>
            </div>
          </GalleryHeroCard>
        </div>
        {/* </div> */}
      </div>
    </GalleryHeroBg>
  );
};

export const BlogHeroSection = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 py-5">
            <h3
              className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none text-center"
              style={{ color: "#2B0947" }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit amet
            </h3>
            <h4
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none text-center"
              style={{ color: "#2B0947" }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit amet
            </h4>
            <p className="d-flex text-center">
              Lorem ipsum dolor sit amet, consectetur, lorem ipsum dolor sit
              amet, consectetur ipsum dolor sit amet, consectetur, lorem ipsum
              dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
      <BlogHeroBg className="px-4 container-fluid pb-5">
        <div className="row align-items-center justify-content-between mt-2 mx-4">
          <div className="col-lg-6 col-md-5 col-sm-12">
            <img
              src={blogheroimage}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading=""
            />
          </div>
          <div className="col-lg-6 col-md-7 col-sm-12 py-5">
            <h3
              className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none"
              style={{ color: "#2B0947" }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit amet consectetur
            </h3>
            <h4
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none"
              style={{ color: "#2B0947" }}
            >
              Lorem ipsum dolor sit amet, consectetur dolor sit amet consectetur
            </h4>
            <p className="d-flex">
              Lorem ipsum dolor sit amet, consectetur, lorem ipsum sit amet,
              consectetur ipsum dolor sit amet, consectetur, lorem ipsum dolor
              sit amet, consectetur sit amet, consectetur consectetur sit amet,
              consectetur consectetur ipsum dolor sit amet sit amet, consectetur
              sit amet, consectetur consectetur sit amet, consectetur
              consectetur ipsum dolor sit amet.
            </p>
            {/* <div className="d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#724598", color: "#ffffff" }}
            >
              <b>Register Now</b>
            </button>
          </div> */}
          </div>
        </div>
      </BlogHeroBg>
    </>
  );
};
// export const HeroSection = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-2 ms-0  ">
//             {" "}
//             <div className="col-lg-2 col-md-2 position-fixed top-50 start-0 ">
//               <div
//                 className="d-flex flex-column flex-shrink-0 bg-light "
//                 style={{ width: "2rem" }}
//               >
//                 <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
//                   <li
//                     className="nav-item"
//                     style={{ backgroundColor: "#2D25E1" }}
//                   >
//                     <a
//                       to="https://m.facebook.com/haveneduservices/"
//                       className="mx-2"
//                       style={{ color: "#fff" }}
//                     >
//                       <FacebookIcon />
//                     </a>
//                   </li>
//                   <li className="" style={{ backgroundColor: "#E1116C" }}>
//                     <a
//                       to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
//                       className="mx-2"
//                       style={{ color: "#fff" }}
//                     >
//                       <InstagramIcon />
//                     </a>
//                   </li>
//                   <li style={{ backgroundColor: "#37A7CF" }}>
//                     <a to="/about" className="mx-2" style={{ color: "#fff" }}>
//                       <LinkedInIcon />
//                     </a>{" "}
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="container">
//             <div className="row">
//               <HeroBg className="col ">
//                 {" "}
//                 <div className="col-lg-6 col-md-7 col-sm-12 py-5 mx-5">
//                   <h2 className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
//                     Exciting Young Champs towards Digital Tech and Foreign
//                     Languages
//                   </h2>
//                   <h4 className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none">
//                     Exciting Young Champs towards Digital Tech and Foreign
//                     Languages
//                   </h4>
//                   <p className="d-flex">
//                     We are a group of multilingual and tech education
//                     specialists for children.
//                   </p>
//                   <div className="d-md-flex justify-content-md-start">
//                     <button
//                       type="button"
//                       className="btn"
//                       style={{ backgroundColor: "#724598", color: "#ffffff" }}
//                     >
//                       Register Now
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-lg-5 col-md-5 col-sm-12">
//                   <img
//                     src={kid1}
//                     className="d-block mx-lg-auto img-fluid"
//                     alt=""
//                     loading=""
//                   />
//                 </div>
//               </HeroBg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// export const HeroSection = () => {
//   return (
//     <>
//       <HeroBg className="container-fluid py-4">
//         <div className="row align-items-center g-0">
//           <div className="col-lg-6 col-md-7 col-sm-12 px-3 py-lg-5">
//             <h2 className="lh-5 mb-3 mt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
//               Exciting Young Champs towards Digital Tech and Foreign Languages
//             </h2>
//             <h4 className="lh-5 mb-3 mt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
//               Exciting Young Champs towards Digital Tech and Foreign Languages
//             </h4>
//             <p>
//               We are a group of multilingual and tech education specialists for
//               children.
//             </p>

//             <div className="d-md-flex justify-content-md-start">
//               {" "}
//               <button
//                 type="button"
//                 className="btn"
//                 style={{ backgroundColor: "#724598", color: "#ffffff" }}
//               >
//                 Register Now
//               </button>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-5 col-sm-12">
//             <img
//               src={kid1}
//               className="mx-lg-auto img-fluid"
//               alt=""
//               // width="700"
//               // height="500"
//             />
//           </div>
//         </div>
//       </HeroBg>
//     </>
//   );
// };

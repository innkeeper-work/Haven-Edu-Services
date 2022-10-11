import React, { useState } from "react";
//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { GallerySection } from "../components/Cards";
import { GalleryHeroSection } from "../components/Hero";
import artsgallery from "../data/arts.json";
import languagegallery from "../data/language.json";
import techgallery from "../data/tech.json";
import Footer from "../components/Footer";
import { Buttons } from "../components/styles/stylcomponents";

// import { GalleryButtonBg } from "../components/styles/stylcomponents";

const Gallery = () => {
  return (
    <>
      <NavbarSection />
      <GalleryHeroSection />
      {/* <GallerySection /> */}
      {/* <GalleryButton /> */}
      <GalleryImages />
      <Footer />
    </>
  );
};

// const GalleryButton = () => {
//   const [gallery, setGallery] = useState(gallerysession);
//   const [selectedgallery, setSelectedgallery] = useState("")

// const language = () => {
//   setGallery(gallery);
// };

// const language = () => {
//   console.log("Language Session");
// };

// const robotics = () => {
//   console.log("Robotics Session");
// };
// const coding = () => {
//   console.log("Coding Session");
// };
// return (
//   <div>
//     <div className="d-flex justify-content-center">
//       <button
//         type="button"
//         className="btn btn-info ms-4 mt-4"
//         onClick={language}
//       >
//         Language
//       </button>
//       <button
//         type="button"
//         className="btn btn-dark ms-4 mt-4"
//         onClick={robotics}
//       >
//         Robotics
//       </button>
//       <button
//         type="button"
//         className="btn btn-info ms-4 mt-4"
//         onClick={coding}
//       >
//         Coding
//       </button>
//     </div>
// {
/* <div>{lang}</div> */
// }
//       <div className="container py-5">
//         <div className="" id="imagegallery">
//           <div className="row">
//             {gallery}
//             {imagegallery.gallerysession.map((gallery) => {
//             return (
//               <div className="col-lg-4 col-md-4 col-sm-12" key={gallery.id}>
//                 <GallerySection {...gallery}>

//                   <img src={language} className="card-img-top" alt="..." />
//                 </GallerySection>
//               </div>
//             );
//           })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const GalleryImages = () => {
  const [active, setActive] = useState("Firstcard");
  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <Buttons
          className="btn ms-4 mt-3 btnHover active"
          // style={{ backgroundColor: "#724598", color: "#ffffff" }}
          onClick={() => setActive("Firstcard")}
        >
          Tech
        </Buttons>
        <Buttons
          className="btn ms-4 mt-3"
          mb1
          // style={{ backgroundColor: "#724598", color: "#ffffff" }}
          onClick={() => setActive("Secondcard")}
        >
          Language
        </Buttons>
        <Buttons
          className="btn ms-4 mt-3"
          mb1
          // style={{ backgroundColor: "#724598", color: "#ffffff" }}
          onClick={() => setActive("Thirdcard")}
        >
          Arts
        </Buttons>
      </div>
      {active === "Firstcard" && <Tech />}
      {active === "Secondcard" && <Language />}
      {active === "Thirdcard" && <Arts />}

      {/* <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p> */}
    </div>
  );
};
const Tech = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="" id="imagegallery">
          <div className="row">
            {techgallery.techgallery.map((tech) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={tech.id}>
                  <GallerySection {...tech}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </GallerySection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
  //  <h1>Martialarts</h1>;
};
const Language = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="" id="imagegallery">
          <div className="row">
            {languagegallery.languagegallery.map((language) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={language.id}>
                  <GallerySection {...language}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </GallerySection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const Arts = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="" id="imagegallery">
          <div className="row">
            {artsgallery.artsgallery.map((arts) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={arts.id}>
                  <GallerySection {...arts}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </GallerySection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
  // return <h1>Language</h1>;
};
// const GalleryImages = () => {
//   return (
//     <div className="container py-5">
//       <div className="" id="imagegallery">
//         <div className="row">
//           {imagegallery.gallerysession.map((gallery) => {
//             return (
//               <div className="col-lg-4 col-md-4 col-sm-12" key={gallery.id}>
//                 <GallerySection {...gallery}>
//                   {/* <img src={language} className="card-img-top" alt="..." /> */}
//                 </GallerySection>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Gallery;

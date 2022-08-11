//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { AboutHeroSection } from "../components/Hero";

import { VisionSection } from "../components/styles/stylcomponents";
import { TeamSection } from "../components/styles/stylcomponents";
import { AboutCard } from "../components/styles/stylcomponents";
import Footer from "../components/Footer";

//Images
// import coding2 from "../images/coding2.jpg";

// import games5 from "../images/games5.jpg";
// import aboutimage from "../images/aboutimage.png";
// import childrencoding from "../images/childrencoding.jpg";
import femi from "../images/femi.jpeg";
import olamide from "../images/olamide.png";
import madamewunmi from "../images/madamewunmi.jpg";
import vision from "../images/vision.png";
// import abouthero from "../images/abouthero.png";

const About = () => {
  return (
    <>
      <NavbarSection />
      <AboutHeroSection />
      {/* <AboutSection /> */}
      <Vision />
      <Team />
      <Footer />
    </>
  );
};

// const AboutSection = () => {
//   return (
//     <div className="container py-5">
//       {" "}
//       <AboutCard className="card mb-3">
//         <div className="row g-0">
//           <div className="col-lg-6 col-md-6">
//             <div className="card-body text-center my-lg-5">
//               <h5 className="card-title">About</h5>
//               <p className="card-text">
//                 Haven Edu-Services is an extra-curricular childhood educational
//                 organisation focused on providing training contents related to
//                 Multi-languages, Technology and Arts for children (ages 4-12)
//                 and Teenagers (ages 13-16)
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-6 col-md-6">
//             <img src={aboutimage} className="img-fluid" alt="..." />
//           </div>
//         </div>
//       </AboutCard>
//     </div>
//   );
// };

const Vision = () => {
  return (
    <VisionSection className="px-4 container-fluid py-2 ">
      <div className="row align-items-center justify-content-center mx-2">
        <div className="col-lg-6 col-md-6 col-sm-12">
          {/* <h3 className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Vision
          </h3> */}
          <h4 className="lh-5 ">Vision</h4>
          <p className="d-flex">
            By 2025, we would be recognized by parents and educational providers
            in Nigeria as a leading content provider and facilitators for
            Technology, Foreign languages and Arts related contents.
          </p>
          <h4 className="lh-5 ">Mision</h4>
          <p className="d-flex">
            We would operate a subscription-based web and mobile platforms where
            our designed content can be shared with children via multi-level
            games, quizzes, interactive videos, and early learning assessments
            These platform will supplement and feed into our current B2B model
            where we support schools with content and Instructors to fill the
            identified Gaps.
          </p>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <img
            src={vision}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
      </div>
    </VisionSection>
  );
};
// const Vision = () => {
//   return (
//     <VisionSection className="">
//       <div className="row g-0 mx-5">
//         <div className="col-sm-6">
//           <div className="card-body py-5">
//             <h5 className="card-title">Vision</h5>
//             <p className="card-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris.
//             </p>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="card-body py-5">
//             <h5 className="card-title">Mission</h5>
//             <p className="card-text">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris.
//             </p>
//           </div>
//         </div>
//       </div>
//     </VisionSection>
//   );
// };

const Team = () => {
  return (
    <>
      <TeamSection className="container-fluid px-5">
        <div className="row justify-content-evenly">
          <h4 className="text-center my-5">Team</h4>
          <div className="col-lg-3 col-md-4 col-sm-10">
            <div className="card mb-5">
              <img src={madamewunmi} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Omowunmi Obidairo</h5>
                <p className="card-text">Lead Instructor/Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10">
            {" "}
            <div className="card mb-5">
              <div>
                {" "}
                <img src={femi} className="card-img-top p-3" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title">Omolounnu Oluwafemi</h5>
                <p className="card-text">Lead Tech Instructor</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-10">
            {" "}
            <div className="card mb-5">
              <img src={olamide} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Olamide Ogunbanjo</h5>
                <p className="card-text">Lead Language Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </TeamSection>
    </>
  );
};

export default About;

//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { AboutHeroSection } from "../components/Hero";

import { VisionSection } from "../components/styles/stylcomponents";
import { TeamSection } from "../components/styles/stylcomponents";
// import { AboutCard } from "../components/styles/stylcomponents";
import Footer from "../components/Footer";

//Images

import femi from "../images/femi.jpeg";
import olamide from "../images/olamide.png";
import madamewunmi from "../images/madamewunmi.jpg";
import vision from "../images/vision.png";
import afolayansamuel from "../images/afolayansamuel.jpg";
import adaramajaomotola from "../images/adaramajaomotola.jpg";
import omotola from "../images/omotola.png";
import madamwunmi from "../images/madamwunmi.png";
import samuel from "../images/samuel.png";
import sarah from "../images/sarah.png";
import akinehinsarah from "../images/akinehinsarah.jpeg";
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

const Vision = () => {
  return (
    <VisionSection className="px-4 container-fluid py-5 ">
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
            We would operate a subscription-based web and mobile platform where
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

const Team = () => {
  return (
    <>
      <TeamSection className="container-fluid px-5">
        <div className="row justify-content-center ">
          <h4 className="text-center my-5">Team</h4>
          <div className="col-lg-4 col-md-4 col-sm-10 px-5">
            <div className="card mb-5">
              <img src={madamwunmi} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Omowunmi Obidairo</h5>
                <p className="card-text">Lead Instructor/Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-5">
            {" "}
            <div className="card mb-5">
              <div>
                {" "}
                <img src={samuel} className="card-img-top p-3" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title">Afolayan Samuel</h5>
                <p className="card-text">Content Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-5">
            {" "}
            <div className="card mb-5">
              <div>
                {" "}
                <img src={omotola} className="card-img-top p-3" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title">Adaramaja Omotola</h5>
                <p className="card-text">Chief Operating officer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-5">
            {" "}
            <div className="card mb-5">
              <div>
                {" "}
                <img src={sarah} className="card-img-top p-3" alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title">Akinehin Sarah</h5>
                <p className="card-text">Tech Instructor</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-10 px-5">
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

//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { VisionSection } from "../components/styles/stylcomponents";
import { AboutCard } from "../components/styles/stylcomponents";
import Footer from "../components/Footer";

//Images
import coding2 from "../images/coding2.jpg";

import games5 from "../images/games5.jpg";
import aboutimage from "../images/aboutimage.png";
import femi from "../images/femi.jpeg";
import olamide from "../images/olamide.png";
import madamewunmi from "../images/madamewunmi.jpg";

const About = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <Vision />
      <Team />
      <Footer />
    </>
  );
};

const AboutSection = () => {
  return (
    <div className="container py-5">
      {" "}
      <AboutCard className="card mb-3">
        <div className="row g-0">
          <div className="col-lg-6 col-md-6">
            <div className="card-body text-center my-lg-5">
              <h5 className="card-title">About</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <img src={aboutimage} className="img-fluid" alt="..." />
          </div>
        </div>
      </AboutCard>
    </div>
  );
};

const Vision = () => {
  return (
    <VisionSection className="">
      <div className="row g-0 mx-5">
        <div className="col-sm-6">
          <div className="card-body py-5">
            <h5 className="card-title">Vision</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body py-5">
            <h5 className="card-title">Mission</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </div>
    </VisionSection>
  );
};

const Team = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h4 className="text-center my-5">Team</h4>
          <div className="col-lg-4 col-md-4 col-sm-12">
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

          <div className="col-lg-4 col-md-4 col-sm-12">
            {" "}
            <div className="card mb-5">
              <img src={olamide} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Olamide Ogunbanjo</h5>
                <p className="card-text">Lead Language Instructor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {" "}
            <div className="card mb-5">
              <img src={madamewunmi} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Omowunmi Obidairo</h5>
                <p className="card-text">Lead Instructor/Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

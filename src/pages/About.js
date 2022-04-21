//Components
import { NavbarSection } from "../components/Navbar";

import { VisionSection } from "../components/styles/stylcomponents";

//Images
import coding2 from "../images/coding2.jpg";

import games5 from "../images/games5.jpg";
import femi from "../images/femi.jpeg";
import olamide from "../images/olamide.png";
import madamewunmi from "../images/madamewunmi.jpeg";

const About = () => {
  return (
    <>
      <NavbarSection />
      <AboutSection />
      <Vision />
      <Team />
    </>
  );
};

const AboutSection = () => {
  return (
    <div class="container py-5">
      {" "}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-body text-center">
              <h5 className="card-title">About</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={coding2} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

const Vision = () => {
  return (
    <VisionSection className="">
      <div class="row g-0 mx-5">
        <div class="col-sm-6">
          <div class="card-body py-5">
            <h5 class="card-title">Vision</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card-body py-5">
            <h5 class="card-title">Mission</h5>
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
            <div className="card">
              <img src={games5} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Omolounnu Oluwafemi</h5>
                <p className="card-text">Lead Tech Instructor</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            {" "}
            <div className="card">
              <img src={games5} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Olamide Ogunbanjo</h5>
                <p className="card-text">Lead Language Instructor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {" "}
            <div className="card">
              <img src={games5} class="card-img-top" alt="..." />
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

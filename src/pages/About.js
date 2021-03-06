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
                Haven Edu-Services is an extra-curricular childhood educational
                organization focused on providing training contents related to
                Multi-languages, Technology (Robotics, Coding & 3D
                design/Printing) and Arts for children/Pre-teenagers (ages 3-12)
                and Teenagers (ages 13-16).<br/> We are focused on tackling
                'unemployability' challenge especially in the foundation years
                of the future work force. We are contributing to plugging
                potential future gaps today as we support children and teenagers
                to be prepared for that imminent future by providing 'fun'
                inclass learning content to complement what they learn from
                their traditional schooling.
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
              By 2025, we would be recognized by parents and educational
              providers in Nigeria as a leading content provider and
              facilitators for Technology, Foreign languages and Arts related
              contents.
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card-body py-5">
            <h5 className="card-title">Mission</h5>
            <p className="card-text">
              We would operate a subscription-based web and mobile platforms
              where our designed content can be shared with children via
              multi-level games, quizzes, interactive videos, and early learning
              assessments These platform will supplement and feed into our
              current B2B model where we support schools with content and
              Instructors to fill the identified Gaps.
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
        <div className="row justify-content-center">
          <h4 className="text-center my-5">Team</h4>
          <div className="col-lg-4 col-md-4 col-sm-10">
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

          <div className="col-lg-4 col-md-4 col-sm-10">
            {" "}
            <div className="card mb-5">
              <img src={olamide} className="card-img-top p-3" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Olamide Ogunbanjo</h5>
                <p className="card-text">Lead Language Instructor</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10">
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

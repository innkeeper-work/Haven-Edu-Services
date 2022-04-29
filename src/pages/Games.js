//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { GamesSection2Bg } from "../components/styles/stylcomponents";
import Footer from "../components/Footer";

//Images
import games5 from "../images/games5.jpg";

const Games = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <GamesSection1 />
      <GamesSection2 />
      <Footer />
    </>
  );
};

const GamesSection1 = () => {
  return (
    <div className="container py-5">
      <div className="text-align-left">
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </div>
  );
};

const GamesSection2 = () => {
  return (
    <GamesSection2Bg className="container mb-5">
      {" "}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={games5} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a
                href="#"
                class="btn"
                style={{ backgroundColor: "#724598", color: "#ffffff" }}
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={games5} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a
                href="#"
                class="btn"
                style={{ backgroundColor: "#724598", color: "#ffffff" }}
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={games5} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a
                href="#"
                class="btn"
                style={{ backgroundColor: "#724598", color: "#ffffff" }}
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </GamesSection2Bg>
  );
};

export default Games;

//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { Blog } from "../components/Cards";
import { CardOneBg } from "../components/styles/stylcomponents";
import { CardOneText } from "../components/styles/stylcomponents";
import { SectionTwoCardBg } from "../components/styles/stylcomponents";
import { GamesSectionButton } from "../components/styles/stylcomponents";

// import { SectionTwoRowBg } from "../components/styles/stylcomponents";
// import Footer from "../components/Footer";

// Images
import robotics from "../images/robotics.jpg";
import language from "../images/language.jpg";
import coding from "../images/coding.jpg";
import games from "../images/games.png";

const Home = () => {
  return (
    <>
      <NavbarSection />
      {/* <HeroSection /> */}
      <HomeSectionOne />
      <RequestforBooking />
      {/* <PlayGames /> */}
      <SummerCampSection />
      <Statistics />
      {/* <Blog /> */}
      {/* <Footer /> */}
    </>
  );
};

const HomeSectionOne = () => {
  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col">
          <CardOneBg className="card">
            <img src={robotics} class="card-img-top" alt="..." />
            <CardOneText className="card-body carousel-caption">
              <p className="card-title">Robotics</p>
            </CardOneText>
          </CardOneBg>
        </div>
        <div className="col">
          <CardOneBg className="card">
            <img src={language} className="card-img-top" alt="..." />
            <CardOneText className="card-body carousel-caption">
              <p className="card-title">Language</p>
            </CardOneText>
          </CardOneBg>
        </div>
        <div className="col">
          <CardOneBg className="card">
            <img src={coding} className="card-img-top" alt="..." />
            <CardOneText className="card-body carousel-caption">
              <p className="card-title">Coding</p>
            </CardOneText>
          </CardOneBg>
        </div>
      </div>
    </div>
  );
};

const RequestforBooking = () => {
  return (
    <SectionTwoCardBg className="text-center">
      <div className="card-body m">
        <p className="card-text">Request for booking</p>
        <a href="#" className="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </SectionTwoCardBg>
  );
};

// const PlayGames = () => {
//   return (
//     <div class="card mb-3">
//       <img src={games} class="card-img-top" alt="..." />
//       <GamesSectionButton className="carousel-caption">
//         <a href="#" className="btn btn-dark">
//           Go somewhere
//         </a>
//       </GamesSectionButton>
//     </div>
//   );
// };

const SummerCampSection = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Summer Camp</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-dark">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className="card-group pt-3">
      <div className="col">
        <div className="card-body text-center">
          <h5 className="card-title ">12</h5>
          <p className="card-text">Partner Schools</p>
        </div>
      </div>
      <div className="col">
        <div className="card-body text-center">
          <h5 className="card-title">3</h5>
          <p className="card-text">Languages Taught</p>
        </div>
      </div>
      <div className="col">
        <div className="card-body text-center">
          <h5 className="card-title">5</h5>
          <p className="card-text">Summer Camps</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

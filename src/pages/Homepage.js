//Components
import { NavbarSection } from "../components/Navbar";
// import { StickyIcons } from "../components/Hero";
import { HeroSection } from "../components/Hero";
import { CardOneBg } from "../components/styles/stylcomponents";
import { CardTwoBg } from "../components/styles/stylcomponents";
import { CardThreeBg } from "../components/styles/stylcomponents";
import { SectionTwoCardBg } from "../components/styles/stylcomponents";
import { Container } from "../components/styles/stylcomponents";
import { SummerCamp } from "../components/styles/stylcomponents";
import { SummerCampTwo } from "../components/styles/stylcomponents";
import { StatSection } from "../components/styles/stylcomponents";
import { Testimonials } from "../components/Cards";
import { LatestEvents } from "../components/Cards";
import Footer from "../components/Footer";

// Images
import robotics from "../images/robotics.jpg";
import language from "../images/language.jpg";
import coding from "../images/coding.jpg";
import tech from "../images/tech.jpg";
import art11 from "../images/art11.jpg";
import language2 from "../images/language2.jpg";
import summer1 from "../images/summer1.png";
import triangle from "../images/triangle.png";
import circle from "../images/circle.png";
import square from "../images/square.png";
import games from "../images/games.png";
import femi from "../images/femi.jpeg";

const Home = () => {
  return (
    <>
      <NavbarSection />
      {/* <OurPartners /> */}
      {/* <StickyIcons /> */}
      {/* <StickyIconss /> */}
      <HeroSection />

      <HomeSectionOne />
      <RequestforBooking />
      {/* <PlayGames /> */}
      <SummerCampSection />
      <Statistics />
      <Testimonials />
      <LatestEvents />
      <Footer />
    </>
  );
};
// const StickyIconss = () => {
//   return (
//     <div className="container-fluid position-sticky top-0 start-0">
//       <div className="row">
//         <div className="col">
//           <div
//             className="title-section"
//             style={{ backgroundColor: "blue", height: "200px" }}
//           >
//             <h1>Basic Sticky Sidebar with Bootstrap 4</h1>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-7">
//           <div
//             className="content-section"
//             style={{ backgroundColor: "#000000", height: "1000px" }}
//           >
//             <h2>Content Section</h2>
//           </div>
//         </div>
//         <div className="col-5 ">
//           <div className="">
//             <div
//               className=""
//               style={{ backgroundColor: "yellow", height: "1000px" }}
//             >
//               <h3>Item 1</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const HomeSectionOne = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-10 col-xs-6 ">
            <CardOneBg className="card mb-5">
              <img src={tech} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Tech</h5>
              </div>
            </CardOneBg>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10">
            <CardTwoBg className="card mb-5">
              <img src={art11} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Arts</h5>
              </div>
            </CardTwoBg>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10">
            <CardThreeBg className="card mb-5">
              <img src={language2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Language</h5>
              </div>
            </CardThreeBg>
          </div>
        </div>
      </div>
    </>
  );
};

const RequestforBooking = () => {
  return (
    <SectionTwoCardBg className="text-center mt-2">
      <div className="card-body d-flex justify-content-center">
        <Container className="bg-light rounded d-flex justify-content-center py-2">
          <p className="card-text mx-3 my-auto">
            <b>Request for Booking</b> (For Schools only)
          </p>
          <a
            href="#"
            className="btn mx-3 w-50"
            style={{ backgroundColor: "#724598", color: "#ffffff" }}
          >
            <b>Send Request</b>
          </a>
        </Container>
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
    <SummerCamp className="px-4 container-fluid pt-3 pb-4">
      <div className="row align-items-center justify-content-center mt-4 mx-4">
        <div className="col-lg-6 col-md-5 col-sm-12">
          <img
            src={summer1}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
        <div className="col-lg-6 col-md-7 col-sm-12 py-5">
          <h3 className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none">
            Highlights from Summer Camp 2022
          </h3>
          <h4 className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none">
            Highlights from Summer Camp 2022
          </h4>

          <p className="d-flex">
            Our Summer Camps are exciting and engaging with competent
            facilitators and instructors. We have two section of Summer
            activities:
          </p>
          <ul>
            <li>Haven Creative Summer</li>
            <li>Haven Teen Tech</li>
            <li>Taekwondo Weekend Club</li>
          </ul>
          <div className="d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn"
              style={{ backgroundColor: "#724598", color: "#ffffff" }}
            >
              <b>View Calendar</b>
            </button>
          </div>
        </div>
      </div>
    </SummerCamp>
  );
};
// const SummerCampSection = () => {
//   return (
//     <div className="">
//       <SummerCamp className="my-5 pt-4 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
//         <div className="card-body col-lg-6 ms-lg-5">
//           <h5 className="card-title">Summer Camp</h5>
//           <p className="card-text">
//             Our Summer Camps are exciting and engaging with competent
//             facilitators and instructors. We have two section of Summer
//             activities:
//           </p>
//           <ul>
//             <li>Haven Creative Summer</li>
//             <li>Haven Teen Tech</li>
//           </ul>
//           <a
//             href="#"
//             className="btn"
//             style={{ backgroundColor: "#724598", color: "#ffffff" }}
//           >
//             View Calendar
//           </a>
//         </div>
//       </SummerCamp>
//       <SummerCampTwo
//         className="my-5 pt-4 d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none"
//         // style={{ color: "#000000" }}
//       >
//         <div className="card-body col-lg-6 ms-5">
//           <h5 className="card-title">Summer Camp</h5>
//           <p className="card-text">
//             Our Summer Camps are exciting and engaging with competent
//             facilitators and instructors. We have two section of Summer
//             activities:
//           </p>
//           <li>Haven Creative Summer</li>
//           <li>Haven Teen Tech</li>
//           <a
//             href="#"
//             className="btn mt-3"
//             style={{ backgroundColor: "#724598", color: "#ffffff" }}
//           >
//             <b>View Calendar</b>
//           </a>
//         </div>
//       </SummerCampTwo>
//     </div>
//   );
// };

const Statistics = () => {
  return (
    <StatSection className="card-group px-5 py-4 justify-content-center">
      <div className="col">
        <div
          className="card-body text-center
        "
        >
          <div className="align-items-center">
            {" "}
            {/* <img
              src={triangle}
              alt=""
              width="100px"
              height="100px"
              className="mb-3"
            /> */}
            <h1 className="card-title ">4</h1>
          </div>
          <p className="card-text">Partner Schools</p>
        </div>
      </div>
      {/* <div className="col">
        <div className="card-body text-center">
          <h1 className="card-title">4</h1>
          <p className="card-text">Languages Taught</p>
        </div>
      </div> */}

      <div className="col">
        <div className="card-body text-center">
          <div className="align-items-center">
            {" "}
            <h1 className="card-title ">4</h1>
          </div>
          <p className="card-text">Languages Taught</p>
        </div>
      </div>
      <div className="col">
        <div className="card-body text-center">
          <div className="align-items-center">
            {" "}
            <h1 className="card-title ">7</h1>
          </div>
          <p className="card-text">Summer Camps</p>
        </div>
      </div>
    </StatSection>
  );
};

export default Home;

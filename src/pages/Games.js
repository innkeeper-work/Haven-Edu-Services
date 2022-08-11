//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { Games } from "../components/Cards";
// import { GamesSection2Bg } from "../components/styles/stylcomponents";
import allgames from "../data/games.json";
import Footer from "../components/Footer";

//Images
// import games5 from "../images/games5.jpg";

const GamesSection = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <GamesRow />
      {/* <GamesSection2 /> */}
      <Footer />
    </>
  );
};

const GamesRow = () => {
  return (
    <div className="container mb-5 py-5">
      <div className="row ">
        {/* <h3 className="card-title text-center">This is the card title</h3>
        <p className="card-text">
          This is a wider card with supporting text below as a lead-in to
          addtional content. This content is a little bit longer. This is a
          wider card with supporting text below as a lead-in to additional
          content. This is a wider card with supporting text below as a lead-in
          to addtional content. This content is a little bit longer. This is a
          wider card with supporting text below as a lead-in to additional
          content.
        </p> */}
        {allgames.allgames.map((game) => {
          return (
            <div className="col-lg-3 col-md-6 col-sm-12" key={game.id}>
              <Games {...game}>
                {/* <img src={language} className="card-img-top" alt="..." /> */}
              </Games>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// <div className="container mb-5 py-5">
//     <div className="row">
//       {blogcontent.blogcontent.map((blog) => {
//         return (
//           <div className="col-lg-6 col-md-6 col-sm-12" key={blog.id}>
//             <BlogCards {...blog}>
//               {/* <img src={language} className="card-img-top" alt="..." /> */}
//             </BlogCards>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// const Games = () => {
//   return (
//     <>
//       <NavbarSection />
//       <HeroSection />
//       <GamesSection1 />
//       <GamesSection2 />
//       <Footer />
//     </>
//   );
// };

// const GamesSection1 = () => {
//   return (
//     <div className="container py-5">
//       <div className="text-align-left">
//         <div className="card-body">
//           <p className="card-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
//             ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// const GamesSection2 = () => {
//   return (
//     <GamesSection2Bg className="container mb-5">
//       {" "}
//       <div className="card mb-3">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src={games5} className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <a
//                 href="#"
//                 className="btn"
//                 style={{ backgroundColor: "#724598", color: "#ffffff" }}
//               >
//                 Play Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card mb-3">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src={games5} className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <a
//                 href="#"
//                 className="btn"
//                 style={{ backgroundColor: "#724598", color: "#ffffff" }}
//               >
//                 Play Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card mb-3">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src={games5} className="img-fluid rounded-start" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <a
//                 href="#"
//                 className="btn"
//                 style={{ backgroundColor: "#724598", color: "#ffffff" }}
//               >
//                 Play Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </GamesSection2Bg>
//   );
// };

export default GamesSection;

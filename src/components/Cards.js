//Components
import { TestimonialCont } from "../components/styles/stylcomponents";
import { TestimonialCardOne } from "../components/styles/stylcomponents";
import { TestimonialCardTwo } from "../components/styles/stylcomponents";
import { LatestEventsCard } from "../components/styles/stylcomponents";
import { CardOneBg } from "../components/styles/stylcomponents";
import { GamesCard } from "../components/styles/stylcomponents";
import { BlogCardBg } from "../components/styles/stylcomponents";

import { Buttons } from "../components/styles/stylcomponents";

//Images
import femi from "../images/femi.jpeg";
// import games5 from "../images/games5.jpg";
// import games6 from "../images/games6.jpg";
import creativesummer from "../images/creativesummer.jpeg";
import teentech from "../images/teentech.jpeg";
import taekwondoacademy from "../images/taekwondoacademy.jpeg";
import afolayansamuel from "../images/afolayansamuel.jpg";
import adaramajaomotola from "../images/adaramajaomotola.jpg";
import akinehinsarah from "../images/akinehinsarah.jpeg";
// import games6 from "../images/games6.jpg";

export const Testimonials = () => {
  return (
    <>
      <div className="container py-5">
        <TestimonialCont className="row bg-light my-5 justify-content-center mx-3">
          <h4 className="text-center my-4">Testimonials</h4>
          <div className="col-lg-5 col-md-6 col-12 mb-3">
            <TestimonialCardOne className="pt-3 px-3">
              <div className="card-body">
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
              </div>
              <div className="mb-3">
                <div className="instructor_card d-flex align-items-md-center">
                  <div>
                    <img
                      src={femi}
                      alt=""
                      width="100px"
                      height="100px"
                      className="rounded-circle ms-3 mb-3 border border-light border-5"
                    />
                  </div>

                  <div className="ms-3">
                    <p className="course-instructor">Name</p>
                    <h6>
                      <b>Role</b>
                    </h6>
                  </div>
                </div>
              </div>
            </TestimonialCardOne>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <TestimonialCardTwo className="pt-3 px-3">
              <div className="card-body">
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
              </div>
              <div className="mb-3">
                <div className="instructor_card d-flex align-items-md-center">
                  <div>
                    <img
                      src={femi}
                      alt=""
                      width="100px"
                      height="100px"
                      className="rounded-circle ms-3 mb-3 border border-light border-5"
                    />
                  </div>

                  <div className="ms-3">
                    <p className="course-instructor">Name</p>
                    <h6>
                      <b>Role</b>
                    </h6>
                  </div>
                </div>
              </div>
            </TestimonialCardTwo>
          </div>
        </TestimonialCont>
      </div>
    </>
  );
};

export const BlogCards = (props) => {
  const { img, title, description, link } = props;
  return (
    // <BlogCardBg className="mb-3 my-4">
    //   <div className="row">

    //  </div>
    // </BlogCardBg>
    <>
      {/* <div className="container">
        <div className="row justify-content-center px-4"> */}
      {/* <div>
            <h4 className="text-center my-4">Latest Events</h4> */}
      {/* <hr
              className="w-25"
              style={{ height: "1.8px", backgroundColor: "#000000" }}
            ></hr> */}
      {/* </div> */}
      {/* <div className="col-lg-4 col-md-4 col-sm-10"> */}{" "}
      <BlogCardBg className="card mb-5">
        <img
          src={img}
          className="card-img-top "
          alt="..."
          style={{ maxHeight: "50%" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {/* <div className="d-flex justify-content-end"> */}{" "}
          {/* <a
                href="http://bit.ly/havenmartialarts"
                target="_blank"
                className="btn d-flex justify-content-end"
                style={{ backgroundColor: "#724598", color: "#fff" }}
              >
                <b>Register Here</b>
              </a> */}
          {/* </div> */}
        </div>
      </BlogCardBg>
      {/* </div> */}
      {/* </div>
      </div> */}
    </>
  );
};
// export const BlogCards = (props) => {
//   const { img, title, description, link } = props;
//   return (
//     <BlogCardBg className="mb-3 my-4">
//       <div>
//         <div className="row g-0 align-items-center">
//           <div className="col-md-4">
//             <img src={creativesummer} className="card-img-top " alt="..." />
//             {/* <img src={img}
//                       alt=""
//                       // width="170px"
//                       // height="170px"
//                       className="rounded ms-3 border-5"
//                     /> */}

//             {/* <img src={img} className="img-fluid"  alt="..." /> */}
//           </div>
//           <div className="col-md-8 ">
//             <div className="card-body mx-4 my-4">
//               <h4 className="card-title my-2">{title}</h4>
//               <p className="card-text">{description}</p>
//               <div className="d-flex justify-content-end">
//                 <b>
//                   <a
//                     href={link}
//                     className=""
//                     style={{
//                       color: "#724598",
//                     }}
//                   >
//                     Read more
//                   </a>
//                   {/* <a
//                   href={link}
//                   className="btn"
//                   style={{
//                     color: "#724598",
//                     background: "#fff",
//                     borderWidth: "2px",
//                     borderStyle: "solid",
//                     borderColor: "#724598",
//                   }}
//                 >
//                   Read more
//                 </a> */}
//                   {/* E8AA00 */}
//                 </b>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </BlogCardBg>
//   );
// };
export const ReadMoreBlogCard = (props) => {
  const { title, img, description, link } = props;
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center mt-4">
        <div className="col-lg-12 col-md-8 col-sm-12">
          <h3
            className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none text-center"
            style={{ color: "#2B0947" }}
          >
            {title}
          </h3>
          <h4
            className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none text-center"
            style={{ color: "#2B0947" }}
          >
            {title}
          </h4>
          <img src={img} className="card-img-top my-5" alt="..." />
          <p className="d-flex text-center ">{description}</p>
        </div>
      </div>
    </div>
  );
};
export const LatestEvents = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center px-4">
          <div>
            <h4 className="text-center my-4">Latest Events</h4>
            {/* <hr
              className="w-25"
              style={{ height: "1.8px", backgroundColor: "#000000" }}
            ></hr> */}
          </div>

          <div className="col-lg-4 col-md-4 col-sm-10 ">
            {" "}
            <LatestEventsCard className="card mb-5">
              <img src={creativesummer} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Creative Summer 2022</h5>
                <p className="card-text">
                  Haven Creative Summer for Champs of Ages 4-12 starts on 25th
                  of July, 2022
                </p>
                <div className="d-flex justify-content-end">
                  <a
                    href="http://bit.ly/havensummer2022"
                    target="_blank"
                    className="btn d-flex justify-content-end"
                    style={{ backgroundColor: "#724598", color: "#fff" }}
                  >
                    <b>Register Here</b>
                  </a>
                </div>
              </div>
            </LatestEventsCard>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-10">
            {" "}
            <LatestEventsCard className="card mb-5">
              <img src={teentech} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Teen Tech 2022</h5>
                <p className="card-text">
                  Haven Teen Tech for teenagers of Ages 13 - 16 starts on 1st of
                  August 2022.
                </p>
                <div className="d-flex justify-content-end">
                  <a
                    href="http://bit.ly/teentech2022"
                    target="_blank"
                    className="btn d-flex justify-content-end"
                    style={{ backgroundColor: "#724598", color: "#fff" }}
                  >
                    <b>Register Here</b>
                  </a>
                </div>
              </div>
            </LatestEventsCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10">
            {" "}
            <LatestEventsCard className="card mb-5">
              <img src={taekwondoacademy} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Taekwondo Weekend Club</h5>
                <p className="card-text">
                  Haven Taekwondo academy is open to children of ages 4-16.
                </p>
                <div className="d-flex justify-content-end">
                  {" "}
                  <a
                    href="http://bit.ly/havenmartialarts"
                    target="_blank"
                    className="btn d-flex justify-content-end"
                    style={{ backgroundColor: "#724598", color: "#fff" }}
                  >
                    <b>Register Here</b>
                  </a>
                </div>
              </div>
            </LatestEventsCard>
          </div>
        </div>
      </div>
    </>
  );
};
export const GallerySection = (props) => {
  const { img } = props;
  return (
    <>
      <div className="container py-5">
        {" "}
        <div className="row g-0">
          <CardOneBg className="card">
            <img src={img} className="card-img-top" alt="..." />
          </CardOneBg>
        </div>
      </div>
    </>
  );
};

export const Games = (props) => {
  const { img, title, description, link } = props;
  return (
    <GamesCard className="card mb-5">
      <img src={img} className="card-img-top" alt="..." />
      <div
        className="card-body"
        style={{ backgroundColor: "#000000", color: "#fff" }}
      >
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-end">
          {" "}
          <a
            href={link}
            target="_blank"
            className="btn"
            style={{ backgroundColor: "#e8aa00", color: "#000" }}
          >
            Play Now
          </a>
        </div>
      </div>
    </GamesCard>
  );
};

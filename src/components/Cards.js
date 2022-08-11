//Components
import { TestimonialCont } from "../components/styles/stylcomponents";
import { TestimonialCardOne } from "../components/styles/stylcomponents";
import { TestimonialCardTwo } from "../components/styles/stylcomponents";
import { LatestEventsCard } from "../components/styles/stylcomponents";
import { CardOneBg } from "../components/styles/stylcomponents";
import { GamesCard } from "../components/styles/stylcomponents";

import { Buttons } from "../components/styles/stylcomponents";

//Images
import femi from "../images/femi.jpeg";
// import games5 from "../images/games5.jpg";
// import games6 from "../images/games6.jpg";
import creativesummer from "../images/creativesummer.jpeg";
import teentech from "../images/teentech.jpeg";
// import taekwondo from "../images/taekwondo.jpeg";
// import games6 from "../images/games6.jpg";

export const Testimonials = () => {
  return (
    <>
      <div className="container py-5">
        <TestimonialCont className="row bg-light my-5 justify-content-center">
          <h4 className="text-center my-4">Testimonials</h4>
          <div className="col-lg-5 col-md-6 col-12 mb-3">
            <TestimonialCardOne className="">
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
            <TestimonialCardTwo className="">
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
    <div className="mb-3 border">
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img src={img} className="img-fluid h-100" alt="..." />
        </div>
        <div className="col-md-8 ">
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="d-flex justify-content-end">
              <b>
                <a
                  href={link}
                  className=""
                  style={{
                    color: "#724598",
                  }}
                >
                  Read more
                </a>
                {/* <a
                  href={link}
                  className="btn"
                  style={{
                    color: "#724598",
                    background: "#fff",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "#724598",
                  }}
                >
                  Read more
                </a> */}
                {/* E8AA00 */}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LatestEvents = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
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
              <img src={creativesummer} className="card-img-top" alt="..." />
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
              <img src={creativesummer} className="card-img-top" alt="..." />
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

//Components
import { TestimonialCont } from "../components/styles/stylcomponents";
import { TestimonialCard } from "../components/styles/stylcomponents";
import { BlogCard } from "../components/styles/stylcomponents";
import { CardOneBg } from "../components/styles/stylcomponents";
import { CardOneText } from "../components/styles/stylcomponents";

//Images
import femi from "../images/femi.jpeg";
import games5 from "../images/games5.jpg";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import robotics from "../images/robotics.jpg";
import language from "../images/language.jpg";
import coding from "../images/coding.jpg";

export const Testimonials = () => {
  return (
    <>
      <div className="container py-5">
        <TestimonialCont className="row bg-light my-5 justify-content-center">
          <h4 className="text-center my-4">Testimonials</h4>
          <div className="col-lg-5 col-md-6 col-12 mb-3">
            <TestimonialCard className="">
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
            </TestimonialCard>
          </div>
          <div className="col-lg-5 col-md-6 col-12">
            <TestimonialCard className="">
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
            </TestimonialCard>
          </div>
        </TestimonialCont>
      </div>
    </>
  );
};

export const Blog = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div>
            <h4 className="text-center my-4">Latest News</h4>
            {/* <hr
              className="w-25"
              style={{ height: "1.8px", backgroundColor: "#000000" }}
            ></hr> */}
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 ">
            {" "}
            <BlogCard className="card mb-5">
              <img src={blog1} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" class="d-flex justify-content-end">
                  Read More
                </a>
              </div>
            </BlogCard>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12">
            {" "}
            <BlogCard className="card mb-5">
              <img src={blog2} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" class="d-flex justify-content-end">
                  Read More
                </a>
              </div>
            </BlogCard>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {" "}
            <BlogCard className="card mb-5">
              <img src={blog3} class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" class="d-flex justify-content-end">
                  Read More
                </a>
              </div>
            </BlogCard>
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
            <img src={img} class="card-img-top" alt="..." />
          </CardOneBg>
        </div>
      </div>
    </>
  );
};

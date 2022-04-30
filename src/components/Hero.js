import { HeroBg } from "../components/styles/stylcomponents";
//Images
import kid1 from "../images/kid1.png";

export const HeroSection = () => {
  return (
    <>
      <HeroBg className="container-fluid py-4">
        <div className="row align-items-center g-0">
          <div className="col-lg-6 col-md-7 col-sm-12 px-3 py-lg-5">
            {/* <h1 class="lh-1 mb-3">Responsive left-aligned hero with image</h1> */}
            <h2 className="lh-5 mb-3 mt-5 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block">
              Exciting Young Champs towards Digital Tech and Foreign Languages
            </h2>
            <h4 className="lh-5 mb-3 mt-5 d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
              Exciting Young Champs towards Digital Tech and Foreign Languages
            </h4>
            <p>
              We are a group of multilingual and tech education specialists for
              children.
            </p>

            <div className="d-md-flex justify-content-md-start">
              {" "}
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#724598", color: "#ffffff" }}
              >
                Register Now
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12">
            <img
              src={kid1}
              className="mx-lg-auto img-fluid"
              alt=""
              // width="700"
              // height="500"
            />
          </div>
        </div>
      </HeroBg>
    </>
  );
};

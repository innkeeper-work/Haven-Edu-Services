// import { Carousel } from "../components/styles/stylcomponents";
// import { Contain } from "../components/styles/stylcomponents";
import { HeroBg } from "../components/styles/stylcomponents";
//Images
import kid1 from "../images/kid1.png";

export const HeroSection = () => {
  return (
    <>
      <HeroBg class="container">
        <div class="row align-items-center g-0">
          <div class="col-lg-6 col-md-6 col-sm-12">
            {/* <h1 class="lh-1 mb-3">Responsive left-aligned hero with image</h1> */}
            <h2 class="lh-3 mb-3">
              Exciting Young Champs towards Digital Tech and Foreign Languages
            </h2>

            <div class="d-md-flex justify-content-md-start">
              {" "}
              <button
                type="button"
                class="btn"
                style={{ backgroundColor: "#724598", color: "#ffffff" }}
              >
                Call to action
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <img
              src={kid1}
              class="d-block mx-lg-auto img-fluid"
              alt=""
              width="700"
              height="500"
            />
          </div>
        </div>
      </HeroBg>
    </>
  );
};

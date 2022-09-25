//Components
import { NavbarSection } from "../components/Navbar";
import { ReadMoreBlogCard } from "../components/Cards";
import readmoreblogcontentthree from "../data/readmoreblog.json";
import Footer from "../components/Footer";


const IndividualBlogPageThree = () => {
    return (
      <>
        <NavbarSection />
        <ReadMoreBlogSection />
        <Footer />
      </>
    );
  };

const ReadMoreBlogSection = () => {
    return (
      <div className="container-fluid">
        {/* <div className="container "> */}
          <div className="row justify-content-center ">
            {/* <h3  style={{ color: "#2B0947" }}>Most Popular Articles</h3> */}
            {readmoreblogcontentthree.readmoreblogcontentthree.map((readmoreblog) => {
              return (
                <div className="col-lg-8 col-md-12 col-sm-10 my-4" key={readmoreblog.id}>
                  <ReadMoreBlogCard {...readmoreblog}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </ReadMoreBlogCard>
                </div>
              );
            })}
          </div>
        {/* </div> */}
      </div>
    );
  };

export default IndividualBlogPageThree;
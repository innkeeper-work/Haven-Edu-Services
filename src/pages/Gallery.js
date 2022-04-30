//Components
import { NavbarSection } from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { GallerySection } from "../components/Cards";
import imagegallery from "../data/gallery.json";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      {/* <GallerySection /> */}
      <GalleryImages />
      <Footer />
    </>
  );
};

const GalleryImages = () => {
  return (
    <div className="container py-5">
      <div className="" id="imagegallery">
        <div className="row">
          {imagegallery.gallerysession.map((gallery) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-12" key={gallery.id}>
                <GallerySection {...gallery}>
                  {/* <img src={language} className="card-img-top" alt="..." /> */}
                </GallerySection>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

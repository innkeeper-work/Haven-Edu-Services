import { NavbarSection } from "../components/Navbar";
import { BlogHeroSection } from "../components/Hero";
import { BlogSectionStyle } from "../components/styles/stylcomponents";
import { BlogBg } from "../components/styles/stylcomponents";
import { BlogCards } from "../components/Cards";
import blogcontent from "../data/blog.json";
import Footer from "../components/Footer";

//Images
// import games5 from "../images/games5.jpg";

const Blog = () => {
  return (
    <>
      <NavbarSection />
      <BlogHeroSection />
      <BlogSection />
      <Footer />
    </>
  );
};

const BlogSection = () => {
  return (
    <BlogBg className="container-fluid py-5 my-5">
      <div className="container ">
        <div className="row justify-content-center ">
          <h3 style={{ color: "#2B0947" }}>Most Popular Articles</h3>
          {blogcontent.blogcontent.map((blog) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-10 my-4 d-flex "
                key={blog.id}
              >
                <BlogCards {...blog}>
                  {/* <img src={language} className="card-img-top" alt="..." /> */}
                  <h3>Hiiiiiiiiiiiiiiiiii</h3>
                </BlogCards>
              </div>
            );
          })}
        </div>
      </div>
    </BlogBg>
  );
};
// const BlogSection = () => {
//   return (
//     <BlogSectionStyle className="container">
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
//                 class="btn"
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
//                 class="btn"
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
//                 class="btn"
//                 style={{ backgroundColor: "#724598", color: "#ffffff" }}
//               >
//                 Play Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </BlogSectionStyle>
//   );
// };

export default Blog;

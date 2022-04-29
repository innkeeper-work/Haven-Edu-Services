//Components
import { NavbarSection } from "../components/Navbar";
import { ContactSection } from "../components/styles/stylcomponents";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <NavbarSection />
      <ContactHero />
      <Footer />
      {/* <ContactForm /> */}
    </>
  );
};

const ContactHero = () => {
  return (
    <>
      <div className="container" style={{ backgroundColor: "#ddd3e9" }}>
        <div className="row g-0 d-flex justify-content-around py-5">
          <div className="col-lg-4 my-auto">
            <div className="card-body">
              <h3 className="card-title">Get in touch</h3>
              <p>
                We'ld love to talk to you. Fill out the form and we'll be in
                touch as soon as possible.
              </p>
            </div>
          </div>
          <ContactSection
            className="col-lg-8 my-5"
            style={{ backgroundColor: "#ffffff", width: "500px" }}
          >
            <div className="card-body py-5 ">
              <form>
                {/* <div className="container d-flex justify-content-center"> */}
                <div className="">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      School/ Organization
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Message
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/* <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                  </div> */}
                </div>{" "}
                {/* </div>{" "} */}
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn text-center "
                    style={{ backgroundColor: "#724598", color: "#ffffff" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </ContactSection>
        </div>
      </div>
    </>
  );
};
// const ContactForm = () => {
//   return (
//     <form>
//       <div className="container d-flex justify-content-center">
//         <div className="col-lg-6">
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">
//               Name
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">
//               Phone Number
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputEmail1" className="form-label">
//               School/ Organization
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label for="exampleInputPassword1" className="form-label">
//               Message
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div className="mb-3 form-check">
//             <input
//               type="checkbox"
//               className="form-check-input"
//               id="exampleCheck1"
//             />
//           </div>
//         </div>{" "}
//       </div>{" "}
//       {/* <button type="submit" className="btn btn-primary text-center">
//         Submit
//       </button> */}
//     </form>
//   );
// };

export default Contact;

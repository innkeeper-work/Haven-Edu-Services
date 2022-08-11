import React, { useState } from "react";
import axios from "axios";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [school, setSchool] = useState("");
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && number && school && message) {
      const person = {
        Name: name,
        Email: email,
        Number: number,
        School: school,
        Message: message,
      };
      axios
        .post(
          "https://sheet.best/api/sheets/cf4843e3-0850-4788-b45f-038da9a5bd61",
          person
        )
        .then((response) => {
          console.log(response);
        });
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
      setNumber("");
      setSchool("");
      setMessage("");
    } else {
      console.log("empty value");
    }
  };
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
                    <label htmlFor="name" className="form-label ">
                      {/* Name */}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                      // aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      {/* Email address */}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      // aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label"></label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      name="number"
                      placeholder="Phone Number"
                      // value={number}
                      // onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="school" className="form-label"></label>
                    <input
                      type="text"
                      className="form-control"
                      id="school"
                      name="school"
                      placeholder="School/ Organization"
                      // value={school}
                      // onChange={(e) => setSchool(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label"></label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Message"
                      // value={message}
                      // onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>{" "}
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
              {/* {people.map((person) => {
                const { id, name, email, number, school, message } = person;
                return (
                  <div className="item">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{number}</p>
                    <p>{school}</p>
                    <p>{message}</p>
                  </div>
                );
              })} */}
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

import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import GamesSection from "./pages/Games";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import IndividualBlogPageOne from "./pages/ReadMoreBlogPageOne"
import IndividualBlogPageTwo from "./pages/ReadMoreBlogPageTwo"
import IndividualBlogPageThree from "./pages/ReadMoreBlogPageThree"
import Contact from "./pages/Contact";
import { motion } from "framer-motion";

// import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="games" element={<GamesSection />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="readmoreblogone" element={<IndividualBlogPageOne />} />
        <Route path="readmoreblogtwo" element={<IndividualBlogPageTwo />} />
        <Route path="readmoreblogthree" element={<IndividualBlogPageThree />} />
        
      </Routes>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

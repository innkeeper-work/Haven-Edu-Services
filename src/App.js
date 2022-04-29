import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Games from "./pages/Games";
import Gallery from "./pages/Gallery";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="games" element={<Games />} />
        <Route path="gallery" element={<Gallery />} />
        {/* <Route path="blog" element={<Blog />} /> */}
        <Route path="contact" element={<Contact />} />
      </Routes>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

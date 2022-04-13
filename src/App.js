import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

// import Footer from "./components/Footer";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

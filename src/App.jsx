import "./App.css";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/Aboutus/About";
import Navbar from "./Components/Navbar/Navbar";
import Navmobile from "./Components/Navbar/Navmobile";

function App() {
  console.log(import.meta.env.VITE_PORT);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="mob-nav">
        <Navmobile />
      </div>
    </>
  );
}

export default App;

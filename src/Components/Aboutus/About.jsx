import React from "react";
// import Navbar from "../Navbar/Navbar";
import "./About.css";
import Mentors from "../Mentors/Mentors";
import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="about-container">
      <div className="about-us">
        <div>
          <img
            src="/class-1.jpg"
            width="400px"
            height="500px"
            className="about-img"
          />
        </div>
        <div className="about-right">
          <p className="about-tag">LEARN ABOUT US</p>
          <h1 className="about-head">Best School For Your Kids</h1>
          <p className="about-com">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
        </div>
      </div>
      <div className="about-men">
        <Mentors />
        <Footer />
      </div>
    </div>
  );
}

export default About;

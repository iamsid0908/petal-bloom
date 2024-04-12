import React from "react";
import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Offer from "./Offer/Offer";
import Description from "./Description/Description";
import Gallary from "./Description/Gallery";
import Navmobile from "./Navbar/Navmobile";

function Home() {
  return (
    <div>
      <div className="home-dashboard">
        <div className="nav-items">
          <Navbar />
        </div>
        <div className="home-data">
          <div className="home-info">
            <h2 className="title1">Best way to fund your study abroad</h2>
            <p className="desc1">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="mob-nav">
            <Navmobile />
          </div>

          <div className="school-img">
            <p className="back-to-school-img"></p>
          </div>
        </div>
        <div className="offer-info">
          <h1>WHAT WE OFFER</h1>
          <p className="offer-para">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem
          </p>
        </div>
      </div>
      <div className="div">
        <Offer />
        <Description />
        <Gallary />
      </div>
    </div>
  );
}

export default Home;

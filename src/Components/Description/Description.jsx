import React from "react";
import "./Description.css";

function Description() {
  return (
    <div className="abt">
      <div className="about">
        <div className="school-imgs-box">
          <div className="school-imgs"></div>
        </div>
        <div className="container">
          <h3 className="about-title">About our school</h3>
          <p className="about-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </p>
          <button className="about-btn">Read More</button>
        </div>
      </div>

      <div className="add">
        <div className="about">
          <div className="container container-school">
            <h3 className="about-title">About Addmission</h3>
            <p className="about-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <button className="addmission-btn">Read More</button>
          </div>
          <div className="img-container">
            <div className="school-addmission-img"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;

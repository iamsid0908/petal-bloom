import React from "react";
import "./Bookacall.css";

function Bookacall() {
  return (
    <div className="bookacall">
      <div className="book-left">
        <p className="book">Book a seat -----</p>
        <h1 className="book-heading">Book A Seat For Your Kid</h1>
        <p className="book-desc">
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
          lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
          sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
        </p>
        <button className="book-btn">Book Now</button>
      </div>
      <div className="book-right">
        <h1 className="right-title">Book A Seat</h1>
        <div className="right-field">
          <div className="input-box">
            <input placeholder="Your name" />
          </div>
          <div className="input-box">
            <input placeholder="Your Email" type="email" />
          </div>
          <div className="input-box">
            <input placeholder="Your message" />
          </div>
          <button className="book-btn1">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Bookacall;

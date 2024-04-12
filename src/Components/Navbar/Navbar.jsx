import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="left">
          <p className="img"></p>
          <h1 className="logo">Petal bloom academy</h1>
        </div>
        <div className="right">
          <a>Home</a>
          <a>About us</a>
          <a>Addmission</a>
          <a>Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

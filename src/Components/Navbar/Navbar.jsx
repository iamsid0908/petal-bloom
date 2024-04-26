import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav-bar">
        <div className="left">
          <p className="img"></p>
          <h1 className="logo">Petal bloom academy</h1>
        </div>
        <div className="right">
          <Link style={{ textDecoration: "none" }} to="/">
            <a className="home">Home</a>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <a className="home">About us</a>
          </Link>

          <a className="home">Addmission</a>
          <a className="home">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

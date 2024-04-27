import React from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";

function Navmobile() {
  return (
    <div>
      <div className="navmobile">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <a>
            <HomeIcon />
          </a>
        </Link>

        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <a>
            <PeopleAltIcon />
          </a>
        </Link>

        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          <a>
            <AddBoxIcon />
          </a>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/contact-us"
        >
          <a>
            <PermContactCalendarIcon />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navmobile;

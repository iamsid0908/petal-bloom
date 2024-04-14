import React from "react";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function Navmobile() {
  return (
    <div>
      <div className="navmobile">
        <a>
          <HomeIcon />
        </a>
        <a>
          <PeopleAltIcon />
        </a>
        <a>
          <AddBoxIcon />
        </a>
        <a>
          <PermContactCalendarIcon />
        </a>
      </div>
    </div>
  );
}

export default Navmobile;

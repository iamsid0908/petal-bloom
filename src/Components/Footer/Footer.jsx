import React from "react";
import "./Footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

function Footer() {
  return (
    <div className="footer">
      <div className="item1">
        <h1>Petal Bloom Acadmy</h1>
        <p>
          Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
          dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr
          stet diam duo eos rebum ipsum diam ipsum elitr.
        </p>
      </div>
      <div className="item2">
        <h2 className="item2-head">Get In Touch</h2>
        <p>
          <LocationOnIcon sx={{ fontSize: 40 }} className="icons" />
          Address
        </p>
        <p className="foot-add">Adarsh Nagar,Barwadih</p>
        <p>
          <EmailIcon sx={{ fontSize: 40 }} className="icons" /> Email
        </p>
        <p className="foot-add">info@example.com</p>
        <p>
          <PhoneCallbackIcon sx={{ fontSize: 40 }} className="icons" /> Phone
        </p>
        <p className="foot-add">+012 345 67890</p>
      </div>
      <div className="item3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.9397970914781!2d84.11666774568425!3d23.850145515088762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b854e6c95770b%3A0x6d563b98ee5b37ee!2sBarwadih%2C%20Jharkhand%20822111!5e1!3m2!1sen!2sin!4v1713440100182!5m2!1sen!2sin"
          width="300"
          height="250"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div></div>
    </div>
  );
}

export default Footer;

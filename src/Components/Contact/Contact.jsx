import React from "react";
import "./Contact.css";
import Bookacall from "../Bookacall/Bookacall";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <div>
        <p className="contact-para">Get In Touch</p>
        <h1 className="contact-title">Contact Us For Any Query</h1>
        <div className="contact-us">
          <Bookacall />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

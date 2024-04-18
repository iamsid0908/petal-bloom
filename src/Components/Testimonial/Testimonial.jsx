import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import useScreen from "./useScreen";

function Testimonial() {
  const px = useScreen();
  var slide = 3;
  if (px.width < 500) {
    slide = 1;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
  };
  return (
    <div className="testimo">
      <div className="test">
        <h1>Tesimonial</h1>
      </div>
      <Slider {...settings}>
        <div className="div1">
          <div className="parent-com">
            <p className="parent-com-p">
              <FormatQuoteIcon className="quotes" sx={{ fontSize: 40 }} />
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor
            </p>
          </div>
          <div className="parent-name">
            <img
              src="class-1.jpg"
              height="50px"
              width="50px"
              className="test-img"
            />
            <p>Parent Name</p>
          </div>
        </div>

        <div className="div1">
          <div className="parent-com">
            <p className="parent-com-p">
              <FormatQuoteIcon className="quotes" sx={{ fontSize: 40 }} />
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor
            </p>
          </div>
          <div className="parent-name">
            <img
              src="class-1.jpg"
              height="50px"
              width="50px"
              className="test-img"
            />
            <p>Parent Name</p>
          </div>
        </div>

        <div className="div1">
          <div className="parent-com">
            <p className="parent-com-p">
              <FormatQuoteIcon className="quotes" sx={{ fontSize: 40 }} />
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor
            </p>
          </div>
          <div className="parent-name">
            <img
              src="class-1.jpg"
              height="50px"
              width="50px"
              className="test-img"
            />
            <p>Parent Name</p>
          </div>
        </div>

        <div className="div1">
          <div className="parent-com">
            <p className="parent-com-p">
              <FormatQuoteIcon className="quotes" sx={{ fontSize: 40 }} />
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor
            </p>
          </div>
          <div className="parent-name">
            <img
              src="class-1.jpg"
              height="50px"
              width="50px"
              className="test-img"
            />
            <p>Parent Name</p>
          </div>
        </div>

        <div className="div1">
          <div className="parent-com">
            <p className="parent-com-p">
              <FormatQuoteIcon className="quotes" sx={{ fontSize: 40 }} />
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor
            </p>
          </div>
          <div className="parent-name">
            <img
              src="class-1.jpg"
              height="50px"
              width="50px"
              className="test-img"
            />
            <p>Parent Name</p>
          </div>
        </div>

        <div className="div1">
          <div className="parent-com">
            <p className="parent-com-p">
              <FormatQuoteIcon className="quotes" sx={{ fontSize: 40 }} />
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor
            </p>
          </div>
          <div className="parent-name">
            <img
              src="class-1.jpg"
              height="50px"
              width="50px"
              className="test-img"
            />
            <p>Parent Name</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonial;

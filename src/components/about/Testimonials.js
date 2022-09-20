import React from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

import sections from "../../Data";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };
  return (
    <div class="testContainer">
      <div className="container">
        <div className="tes-content">
          <div className="section-title">
            <h2>
              {" "}
              Client <span>Testimonials</span>
            </h2>
            <Slider {...settings}>
              {sections.testimonials.map((testimonial, index) => {
                return (
                  <div className="tes-item" key={index}>
                    <p className="para">
                      <span>
                        {/* <FaQuoteLeft /> */}
                        <FontAwesomeIcon icon={faQuoteLeft} />
                      </span>
                      &nbsp;
                      {testimonial.text}
                      <span>
                        {/* &nbsp; <FaQuoteRight /> */}
                        &nbsp; <FontAwesomeIcon icon={faQuoteRight} />
                      </span>
                    </p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

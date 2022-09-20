import React from "react";
import "./Stats.css";
import sections from "../../../Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stats = () => {
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
            <Slider {...settings}>
              {sections.stats.map((stat, index) => {
                return (
                  <div className="tes-item" key={index}>
                    <p className="para">{stat.title}</p>
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

export default Stats;

import React, { useEffect } from "react";
import "./FeaturedProperties.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const FeaturedProperties = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="fpContainer" ref={ref}>
      <div
        className="fp"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="fpItem">
          <img
            src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hotel Stare Miasto</span>
          <span className="fpCity">Madrid</span>
          <span className="fpPrice">Starting from $320</span>
          <div className="fpRating">
            <button>8.9</button>

            <span>Excellent</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://images.pexels.com/photos/2387624/pexels-photo-2387624.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Luxury Hotel</span>
          <span className="fpCity">Austin</span>
          <span className="fpPrice">Starting from $240</span>
          <div className="fpRating">
            <button>9.3</button>
            <span>Exceptional</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Four Seasons Hotel</span>
          <span className="fpCity">Lisbon</span>
          <span className="fpPrice">Starting from $99</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>
        <div className="fpItem">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hilton Garden Inn</span>
          <span className="fpCity">Berlin</span>
          <span className="fpPrice">Starting from $105</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;

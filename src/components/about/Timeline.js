import React from "react";
import sections from "../../Data";
import "./Timeline.css";
// import { RiHotelLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 2, 0],
    transition: { type: "spring", bounce: 0, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.05, duration: 1 },
  },
};
const Timeline = () => (
  // WHAT OUR HAPPY CUSTOMERS SAID ABOUT US
  <motion.div
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ staggerChildren: 0.2 }}
    className="timeline-container"
  >
    {sections.timelineData.map((data, idx) => (
      <motion.div variants={imageAnimate} className="timeline-item">
        <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
            {/* <RiHotelLine /> */}
            <FontAwesomeIcon icon={faHotel} />
          </span>
          <time>{data.date}</time>
          <motion.p variants={textAnimate}>{data.text}</motion.p>
          {data.link && (
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
              {data.link.text}
            </a>
          )}
          <span className="circle" />
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default Timeline;

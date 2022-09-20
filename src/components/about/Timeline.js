import React from "react";
import sections from "../../Data";
import "./Timeline.css";
// import { RiHotelLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
const Timeline = () => (
  // WHAT OUR HAPPY CUSTOMERS SAID ABOUT US
  <div className="timeline-container">
    {sections.timelineData.map((data, idx) => (
      <div className="timeline-item">
        <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
            {/* <RiHotelLine /> */}
            <FontAwesomeIcon icon={faHotel} />
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
              {data.link.text}
            </a>
          )}
          <span className="circle" />
        </div>
      </div>
    ))}
  </div>
);

export default Timeline;

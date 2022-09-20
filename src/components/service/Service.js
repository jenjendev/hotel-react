import React, { useState } from "react";
// import {
//   FaCocktail,
//   FaHiking,
//   FaShuttleVan,
//   FaBeer,
//   BsPlusLg,
// } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCocktail,
  faHiking,
  faShuttleVan,
  faBeer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import "./Service.css";
import SingleQA from "./SingleQA";
const Service = () => {
  const state = {
    services: [
      {
        icon: <FontAwesomeIcon icon={faCocktail} />,
        title: "Free Cocktails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!",
      },
      {
        icon: <FontAwesomeIcon icon={faHiking} />,
        title: "Endless Hiking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!",
      },
      {
        icon: <FontAwesomeIcon icon={faShuttleVan} />,
        title: "Free Shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!",
      },
      {
        icon: <FontAwesomeIcon icon={faBeer} />,
        title: "Unlimited Beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corposis!",
      },
    ],
  };
  return (
    <div className="serviceContainer">
      <div className="service-detail">
        <h2>what do we offer for free?</h2>
        <div className="service-center">
          {state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div>
        <h2> Featured Room </h2>

        <h2> Question </h2>
        <SingleQA />
      </div>
    </div>
  );
};

export default Service;

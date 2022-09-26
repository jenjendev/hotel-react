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

import Works from "./Works";
import { motion, Variants } from "framer-motion";
const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", stiffness: 100 },
  },
};
const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
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
      <div className="service-header">
        <Works />
      </div>
      <div className="service-detail bg-yellow">
        <h2 className="title-service">What do we offer for free?</h2>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.5 }}
          className="service-center"
        >
          {state.services.map((item, index) => {
            return (
              <motion.article
                variants={imageAnimate}
                key={index}
                className="service"
              >
                <motion.span variants={imageAnimate}>{item.icon}</motion.span>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
      <div>
        <h2 className="title-service"> Frequently asked questions </h2>

        <SingleQA />
      </div>
    </div>
  );
};

export default Service;

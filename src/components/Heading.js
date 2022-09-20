import React from "react";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "../animation";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <motion.div
        className="heading"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </motion.div>
    </>
  );
};

export default Heading;

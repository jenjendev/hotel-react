import React from "react";
import { motion } from "framer-motion";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <motion.div
        className="heading"
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1.5 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </>
  );
};

export default Heading;

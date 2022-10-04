import React from "react";
import "./Contact.css";
import { motion, Variants } from "framer-motion";
const ContainerVariants = {
  initial: {},
  animate: {},
};

const BVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: {
    type: "tween",
    duration: 1,
    delay: 1.5,
  },
};
const BtnVariants = {
  initial: { x: -100 },
  animate: { y: 0 },
  transition: {
    type: "tween",
    duration: 1,
    delay: 4,
  },
};
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <motion.div
          variants={ContainerVariants}
          initial="initial"
          animate="animate"
          className="form-container"
        >
          <form>
            <motion.h1
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <span>Contact</span> Us
            </motion.h1>
            <motion.div variants={BVariants}>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </motion.div>
            <motion.div variants={BVariants}>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </motion.div>
            <motion.div variants={BVariants}>
              <label>Message</label>
              <textarea rows="10" placeholder="Enter your name" />
            </motion.div>
            <motion.button className="btn-submit">Submit</motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

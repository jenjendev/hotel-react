import React, { useState, useRef, useEffect } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./SingleQA.css";
import sections from "../../Data";
import { motion, Variants } from "framer-motion";
const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const SingleQA = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeCurrentIndex, setActiveCurrentIndex] = useState();

  const toggleShowAccordion = (id) => {
    if (activeCurrentIndex === id) {
      setActiveCurrentIndex();
    } else {
      setActiveCurrentIndex(id);
    }
  };

  return (
    <section className="qaContainer">
      <div className="accordion">
        {sections.questions.map((question, id) => (
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="accordion-item"
            key={question.id}
          >
            <motion.div
              variants={textAnimate}
              className="accordion-title"
              onClick={() => toggleShowAccordion(id)}
            >
              <div className="">{question.title}</div>
              <div className="accordion-icon">
                {activeCurrentIndex === id ? "-" : "+"}
              </div>
            </motion.div>
            <div className="accordion-body">
              {activeCurrentIndex === id && (
                <div className="accordion-content">{question.text}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SingleQA;

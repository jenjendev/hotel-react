import React, { useContext } from "react";
import "./Works.css";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import boy from "../../assets/boy.png";
import glassesimoji from "../../assets/glassesimoji.png";
import thumbup from "../../assets/heartemoji.png";
import crown from "../../assets/crown.png";

import { motion } from "framer-motion";

const Works = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="works-section" id="Intro">
      {/* left name side */}
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",

          repeatDelay: 1,
          duration: 1,
        }}
        className="i-left"
      >
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Our Awesome</span>
          <span>Services</span>
          <span>
            Lorem ipsum dolor sit amet. Est quas amet et aliquid aliquid qui
            rerum ipsam cum quae possimus cum repellendus sunt. Sit similique
            laboriosam nam maiores minima qui necessitatibus modi aut quasi
            tempore sit animi alias. Rem dolorem provident eum exercitationem
            excepturi ab incidunt repudiandae? Et unde doloribus aut quibusdam
            ipsam ut culpa repellendus.
          </span>
        </div>

        <button className="button i-button">Contact Us</button>
      </motion.div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <div className="floatingDiv">
            <img src={crown} alt="" />
            <span>Best service</span>
          </div>
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <div className="floatingDiv">
            <img src={thumbup} alt="" />
            <span>Easy payment</span>
          </div>
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Works;

import React from "react";
import { footer } from "../Data";
import "../App.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 20px rgb(255,255,255)",
                  boxShadow: "0px 0px 20px rgb(255,255,255)",
                }}
                className="btn5"
              >
                Contact Us Today
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <motion.li
                    whileHover={{ scale: 1.2, originX: 0, color: "#aa8353" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {" "}
                    {items.list}{" "}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2022 RealEstate. Designd By Jasmine Hoang.</span>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { footer } from "../Data";
import "../App.css";
import { motion, useMotionValue, useTransform, Varia } from "framer-motion";

const blockVariants = {
  initial: {
    rotate: 0,
  },
  target: {
    rotate: 360,
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

const Footer = () => {
  const rotate = useMotionValue(0);
  const scale = useTransform(rotate, [0, 20], [0, 1]);

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
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
                duration: 0.3,
              }}
              className="text"
            >
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </motion.div>
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
          <motion.div
            variants={blockVariants}
            initial="initial"
            animate="target"
            transition={{
              ease: "easeInOut",
              duration: 1,
            }}
            className="box"
          >
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
          </motion.div>

          {footer.map((val) => (
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.2 }}
              className="box"
            >
              <h4>{val.title}</h4>
              <ul>
                {val.text.map((items) => (
                  <motion.li variants={textAnimate}> {items.list} </motion.li>
                ))}
              </ul>
            </motion.div>
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

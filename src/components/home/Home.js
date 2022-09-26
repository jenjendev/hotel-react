import React from "react";
import About from "../about/About";
import "../home/Home.css";
import Featured from "./featured/Featured";
import FeaturedProperties from "./featuredProperties/FeaturedProperties";
import Hero from "./hero/Hero";
import PropertyList from "./propertyList/PropertyList";

import AnimatedFade from "../AnimatedTextWord";
import { motion, Variants } from "framer-motion";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="homeContainer">
        <Featured />
        <h2 className="homeTitle">Browser by Propery type</h2>
        <PropertyList />
        <h2 className="homeTitle">Place guests love</h2>
        <FeaturedProperties />

        <div className="cloud">
          <div className="container">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="content"
            >
              <motion.h3 variants={textAnimate}>Excellent Services</motion.h3>
              <motion.p variants={textAnimate}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus at veritatis quisquam voluptatem nostrum reprehenderit,
                tempore sint placeat, aperiam alias, facilis voluptate quod
                itaque deleniti molestiae non odit esse necessitatibus. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                officiis unde perferendis voluptas laborum aliquam culpa officia
                a maiores porro.
              </motion.p>
              <div>
                <button>Learn More</button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="data">
          <div className="container">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="content"
            >
              <motion.h3 variants={textAnimate}>
                Excellent Customer Service
              </motion.h3>
              <motion.p variants={textAnimate}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                officiis unde perferendis voluptas laborum aliquam culpa officia
                a maiores porro. Consequuntur officia corporis aliquam numquam,
                fuga quisquam illo. Obcaecati, voluptatum. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Nisi officiis unde
                perferendis voluptas laborum aliquam culpa officia a maiores
                porro.
              </motion.p>
              <div>
                <button>Learn More</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

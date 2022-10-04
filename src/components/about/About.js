import React, { useRef, useState } from "react";
import "./About.css";
// import Stats from "./Stats";
// import Testimonials from "./Testimonials";

// import video from "../../assets/images/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../assets/about_pic.jpeg";
import about2Img from "../../assets/about2_pic.jpeg";
import video from "../../assets/video.mp4";
// import aboutImg from "../../assets/images/about_pic.jpeg";
// import about2Img from "../../assets/images/about2_pic.jpeg";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import AboutCard from "./AboutCard";

import AnimatedFade from "../AnimatedTextWord";
import { motion, Variants } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
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
const About = () => {
  const vidRef = useRef(null);
  const [toggleVideo, setToggleVideo] = useState(false);
  const playVideo = () => {
    setToggleVideo(!toggleVideo);
    vidRef.current.play();
  };
  const pauseVideo = () => {
    setToggleVideo(!toggleVideo);
    vidRef.current.pause();
  };
  return (
    // about container
    <div className="aboutContainer">
      <div className="container">
        <div className="about-content">
          <div className="about-employee ">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="about-title"
            >
              <motion.h3 variants={textAnimate} className="text-center">
                Our services and wonders of Prague"
              </motion.h3>
              <motion.p variants={textAnimate} className="employee-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                molestias maxime tenetur, temporibus aspernatur, omnis expedita
                saepe sapiente adipisci laboriosam necessitatibus ullam eveniet
                asperiores nostrum.
              </motion.p>
            </motion.div>

            <motion.div variants={textAnimate} className="about-video">
              <video className="about-video" autoPlay loop ref={vidRef}>
                <source src={video} type="video/mp4" />
              </video>
              <button type="button" className="vidPlayBtn ">
                {/* {toggleVideo ? (
                  <FaPause
                    className="text-brown"
                    size={28}
                    onClick={pauseVideo}
                  />
                ) : (
                  <FaPlay
                    className="text-brown"
                    size={28}
                    onClick={playVideo}
                  />
                )} */}

                {toggleVideo ? (
                  <FontAwesomeIcon
                    icon={faPauseCircle}
                    className="text-brown"
                    size={100}
                    onClick={pauseVideo}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    className="text-brown"
                    size={100}
                    onClick={playVideo}
                  />
                )}
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="about-grid about-reverse "
          >
            <motion.div variants={imageAnimate} className="about-img">
              <img src={aboutImg} />
            </motion.div>
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ staggerChildren: 0.5 }}
              className="about-title bg-yellow"
            >
              <motion.h3 variants={textAnimate} className="text-large">
                We offer Great choice
                <br /> for a relaxing vacation
              </motion.h3>
              <motion.p variants={textAnimate} className="text mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam culpa distinctio mollitia consectetur dolore! Iusto
                dolores reprehenderit at ad! Molestiae. Pitchfork selfies master
                cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
                pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra
                selfies. Shorts fixie consequat flexitarian four loko tempor
                duis single-origin coffee. Banksy, elit small batch freegan sed.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="about-grid "
          >
            <div className="about-title bg-yellow mr-50">
              <motion.h3 variants={textAnimate} className="text-large">
                Luxurious 5-star sleeping experience
                <br /> at a very affordable 1-star price.
              </motion.h3>
              <motion.p variants={textAnimate} className="text mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam culpa distinctio mollitia consectetur dolore! Iusto
                dolores reprehenderit at ad! Molestiae. Pitchfork selfies master
                cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
                pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra
                selfies. Shorts fixie consequat flexitarian four loko tempor
                duis single-origin coffee. Banksy, elit small batch freegan sed.
              </motion.p>
            </div>
            <motion.div variants={imageAnimate} className="about-img">
              <img src={about2Img} />
            </motion.div>
          </motion.div>
        </div>
        <div className="timeline">
          <Timeline />
        </div>
        <div className="testimonials">
          <AnimatedFade>
            <Testimonials />
          </AnimatedFade>
        </div>
        <div className="team-member bg-yellow">
          <h4 className="team-title"> Our Team</h4>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="team"
          >
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>John Doe</h4>
              </a>
            </motion.div>
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>Jenifer Doe</h4>
              </a>
            </motion.div>
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>Maria Joe</h4>
              </a>
            </motion.div>
            <motion.div variants={textAnimate} className="team-item">
              <a href="#" className="photo">
                <img src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <div className="glow-wrap">
                  <i className="glow"></i>
                </div>
                <h4>Mark Joe</h4>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="about-card">
          <AboutCard />
        </div>
      </div>
    </div>

    //  history
  );
};

export default About;

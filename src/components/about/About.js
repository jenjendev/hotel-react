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
            <div className="about-title">
              <h3 className="text-center">
                Our services and wonders of Prague
              </h3>
              <p className="employee-detail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                molestias maxime tenetur, temporibus aspernatur, omnis expedita
                saepe sapiente adipisci laboriosam necessitatibus ullam eveniet
                asperiores nostrum.
              </p>
            </div>

            <div className="about-video">
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
            </div>
          </div>
          <div className="about-grid ">
            <div className="about-img">
              <img src={aboutImg} />
            </div>
            <div className="about-title">
              <h3 className="text-large">
                We offer Great choice
                <br /> for a relaxing vacation
              </h3>
              <p className="text mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam culpa distinctio mollitia consectetur dolore! Iusto
                dolores reprehenderit at ad! Molestiae. Pitchfork selfies master
                cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
                pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra
                selfies. Shorts fixie consequat flexitarian four loko tempor
                duis single-origin coffee. Banksy, elit small batch freegan sed.
              </p>
            </div>
          </div>
          <div className="about-grid ">
            <div className="about-title">
              <h3 className="text-large">
                luxurious 5-star sleeping experience,
                <br /> at a very affordable 1-star price.
              </h3>
              <p className="text mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Numquam culpa distinctio mollitia consectetur dolore! Iusto
                dolores reprehenderit at ad! Molestiae. Pitchfork selfies master
                cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr
                pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra
                selfies. Shorts fixie consequat flexitarian four loko tempor
                duis single-origin coffee. Banksy, elit small batch freegan sed.
              </p>
            </div>
            <div className="about-img">
              <img src={about2Img} />
            </div>
          </div>
        </div>
        <div className="timeline">
          <Timeline />
        </div>
        <div className="testimonials">
          <Testimonials />
        </div>
      </div>
    </div>

    //  history
  );
};

export default About;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../Data";
import { motion } from "framer-motion";

const Header = () => {
  const [navList, setNavList] = useState(false);
  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src="https://freepikpsd.com/file/2019/10/logo-hotel-png-7.png" />
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li whileHover={{ scale: 1.3, color: "##aa8353" }} key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="button flex">
          <h4>
            <span>2</span> My List
          </h4>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            <i className="fa fa-sign-out"></i>Sign In
          </motion.button>
        </div>
        <div className="toggle">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            onClick={() => setNavList(!navList)}
          >
            {navList ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;

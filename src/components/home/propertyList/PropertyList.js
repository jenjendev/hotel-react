import React, { useState } from "react";
import "./properties.css";
import { motion } from "framer-motion";

const PropertyList = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="pList">
      <div className="pListItem hover-img">
        <motion.div
          animate={{ rotate: rotate ? 360 : 0 }}
          onClick={() => setRotate(!rotate)}
        >
          <figure>
            <img src="https://images.unsplash.com/photo-1600619754865-8fe927da0701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
          </figure>
        </motion.div>
        <div className="pListTitles">
          <h3>Apartments</h3>
          <h3>2331 hotels</h3>
        </div>
      </div>

      <div className="pListItem hover-img">
        <figure>
          <img src="https://images.unsplash.com/photo-1601701119495-d6e39b664001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc29ydHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60" />
        </figure>
        <div className="pListTitles">
          <h3>Resorts</h3>
          <h3>2331 hotels</h3>
        </div>
      </div>
      <div className="pListItem hover-img">
        <figure>
          <img src="https://images.unsplash.com/photo-1610036615605-636de68a306e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc29ydHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60" />
        </figure>
        <div className="pListTitles">
          <h3>Villas</h3>
          <h3>2331 hotels</h3>
        </div>
      </div>
      <div className="pListItem hover-img">
        <figure>
          <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
        </figure>
        <div className="pListTitles">
          <h3>Hotel</h3>
          <h3>2331 hotels</h3>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

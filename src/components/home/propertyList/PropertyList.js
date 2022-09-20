import React, { useState } from "react";
import "./properties.css";
import { motion } from "framer-motion";

const PropertyList = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="pList">
      <div className="pListItem">
        <motion.div
          animate={{ rotate: rotate ? 360 : 0 }}
          onClick={() => setRotate(!rotate)}
        >
          <img
            src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
            alt=""
            className="pListImg"
          />
        </motion.div>
        <div className="pListTitles">
          <h2>Apartments</h2>
          <h3>2331 hotels</h3>
        </div>
      </div>

      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h2>Resorts</h2>
          <h3>2331 hotels</h3>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h2>Villas</h2>
          <h3>2331 hotels</h3>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h2>Cabins</h2>
          <h3>2331 hotels</h3>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

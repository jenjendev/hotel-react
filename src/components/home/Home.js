import React from "react";
import About from "../about/About";
import "../home/Home.css";
import Featured from "./featured/Featured";
import FeaturedProperties from "./featuredProperties/FeaturedProperties";
import Hero from "./hero/Hero";
import PropertyList from "./propertyList/PropertyList";
import Stats from "./stats/Stats";

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
        <h2 className="homeTitle"> Featured hotel to choose</h2>
        <Stats />
        <h2 className="hotelType"></h2>
        <div className="discover">
          <div className="discover-item">
            <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="discover-content">
              <h1>Discover</h1>
              <h2>The Restaurant</h2>
              <p>
                Restaurant inilla duiman at elit finibus viverra nec a lacus
                themo the nesudea seneoice misuscipit non sagie the fermen
                ziverra tristiue duru the ivite dianne onen nivami acsestion
                augue artine.
              </p>
              <button> Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

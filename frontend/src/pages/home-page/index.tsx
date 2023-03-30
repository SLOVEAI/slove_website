import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HomeHero from "../../components/HomeHero";
import "../../index.css";

const HomePage = () => {
  return (
    <div className="bg-black flex flex-col justify-between">
      <div className="bg-gradient-to-b from-primaryColor_darkTurquoise/20 to-secondaryColor_darkPurple/20">
        <Navigation />
        <HomeHero />
        <Footer />
      </div>
    </div>
  );
};

export { HomePage };

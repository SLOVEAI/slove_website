import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HomeHero from "../../components/HomeHero";
import HomeSection2 from "../../components/HomeSection2";
import HomeSection3 from "../../components/HomeSection3";

const HomePage = () => {
  return (
    <div className="bg-black flex flex-col justify-between">
      <div className="bg-gradient-to-b from-primaryColor_darkTurquoise/20 to-secondaryColor_darkPurple/20">
        <Navigation />
        <HomeHero />
        <HomeSection2 />
        <HomeSection3 />
        <Footer />
      </div>
    </div>
  );
};

export { HomePage };

import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HomeHero from "../../components/HomeHero";
import HomeSection2 from "../../components/HomeSection2";
import HomeSection3 from "../../components/HomeSection3";
import HomeSection4 from "../../components/HomeSection4";
import HomeSection5 from "../../components/HomeSection5";
import HomeSection6 from "../../components/HomeSection6";

const HomePage = () => {
  return (
    <div className="bg-black flex flex-col justify-between">
      <div className="bg-gradient-to-b from-primaryColor_darkTurquoise/20 to-secondaryColor_darkPurple/20">
        <Navigation />
        <HomeHero />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <Footer />
      </div>
    </div>
  );
};

export { HomePage };

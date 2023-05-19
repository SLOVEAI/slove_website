import React from "react";
import HomeHero from "../../components/Home_components/HomeHero";
import HomeSection2 from "../../components/Home_components/HomeSection2";
import HomeSection3 from "../../components/Home_components/HomeSection3";
import HomeSection4 from "../../components/Home_components/HomeSection4";
import HomeSection5 from "../../components/Home_components/HomeSection5";

const HomePage = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <HomeHero />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </div>
  );
};

export { HomePage };

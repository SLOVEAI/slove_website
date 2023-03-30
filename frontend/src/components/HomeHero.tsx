import React from "react";
import hero_img from "../assets/hero_img.png";

function HomeHero() {
  return (
    <>
      <div className="flex flex-row mt-5">
        <section className="flex flex-col gap-5 items-start ml-[7rem] mr-[5rem]">
          <h1 className="font-clashDisplay text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-l from-secondaryColor_purple to-primaryColor_turquoise">
            Bringing the <br /> music world together.
          </h1>
          <p className="font-manrope text-[1.25rem] text-white">
            Connect venues with musicians and bring the fans to events. <br />{" "}
            That has been our mission and we invite you to join us on this ride!
          </p>
          <div className="flex flex-row">
            <button className="py-2 px-5 rounded-full bg-pink-100">
              Apple
            </button>
            <button className="py-2 px-5 rounded-full bg-pink-100">
              Google
            </button>
          </div>
          <button className="py-2 px-5 rounded-full bg-pink-100">
            Sign up
          </button>
        </section>
        <section>
          <img src={hero_img} alt="hero_img" />
        </section>
      </div>
    </>
  );
}

export default HomeHero;

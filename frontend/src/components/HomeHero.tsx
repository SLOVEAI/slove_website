import React from "react";
import app_img from "../assets/app_img.png";
import Button from "./Button";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomeHero() {
  let navigate = useNavigate();
  const goToContact = () => {
    let path = `/contact`;
    navigate(path);
  };

  return (
    <>
      <div className="flex flex-row mt-5 mb-[6rem] mx-[7rem] rounded-full px-[5rem] lg:px-0 bg-gradient-to-l from-secondaryColor_purple to-primaryColor_darkTurquoise">
        <section className="flex flex-col gap-5 items-center lg:items-start lg:mr-[1rem] xl:mr-[5rem] pt-10">
          <h1 className="font-clashDisplay text-[4rem] text-white">
            Bringing the music world together.
          </h1>
          <p className="font-manrope text-[1.15rem] text-white">
            Connect venues with musicians and bring the fans to events. That has
            been our mission and we invite you to join us on this ride!
          </p>
          <img
            src={app_img}
            alt="hero_img"
            className="w-[90%] block self-center lg:hidden"
          />
          <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-10">
            <Button
              label="Download on Appstore"
              onClick={() => alert("Not Available Now")}
              icon={<AiFillApple className="text-white text-2xl" />}
              className="py-4 px-10 rounded-full bg-black text-white items-center flex flex-row gap-2"
            />
            <Button
              label="Download on Google Play"
              onClick={() => alert("Not Available Now")}
              icon={<FaGooglePlay className="text-white text-xl" />}
              className="py-4 px-10 rounded-full bg-black text-white items-center flex flex-row gap-2"
            />
            <Button
              label="Contact Us"
              onClick={goToContact}
              className="py-4 px-[6rem] rounded-full bg-primaryColor_turquoise text-white"
            />
          </div>
        </section>
        <section className="hidden lg:block">
          <img src={app_img} alt="hero_img" className="w-full mr-[7rem]" />
        </section>
      </div>
    </>
  );
}

export default HomeHero;

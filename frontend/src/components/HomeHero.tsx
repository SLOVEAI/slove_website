import React from "react";
import app_img from "../assets/app_img.png";
import Button from "./Button";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

function HomeHero() {
  return (
    <>
      <div className="flex flex-row mt-5 mb-[6rem]">
        <section className="flex flex-col gap-5 items-start ml-[7rem] mr-[5rem] pt-10">
          <h1 className="font-clashDisplay text-[4rem] text-transparent bg-clip-text bg-gradient-to-l from-secondaryColor_purple to-primaryColor_turquoise">
            Bringing the <br /> music world together.
          </h1>
          <p className="font-manrope text-[1.15rem] text-white">
            Connect venues with musicians and bring the fans to events. <br />{" "}
            That has been our mission and we invite you to join us on this ride!
          </p>
          <div className="flex flex-row gap-10">
            <Button
              label="Download on Appstore"
              icon={<AiFillApple className="text-white text-2xl" />}
              className="py-4 px-10 rounded-full bg-black text-white items-center flex flex-row gap-2"
            />
            <Button
              label="Download on Google Play"
              icon={<FaGooglePlay className="text-white text-xl" />}
              className="py-4 px-10 rounded-full bg-black text-white items-center flex flex-row gap-2"
            />
          </div>
          <Button
            label="Sign Up"
            className="py-4 px-[6.7rem] rounded-full bg-primaryColor_turquoise text-white"
          />
        </section>
        <section className="mr-[7rem]">
          <img src={app_img} alt="hero_img" />
        </section>
      </div>
    </>
  );
}

export default HomeHero;

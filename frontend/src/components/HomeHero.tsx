import { useEffect } from "react";
import app_img from "../assets/app_img.png";
import Button from "./Button";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeHero() {
  let navigate = useNavigate();
  const goToTestApp = () => {
    let path = `/testApp`;
    navigate(path);
  };

  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="overflow-hidden flex flex-row items-center mt-5 mb-[6rem] mx-5 mobile:mx-[2rem] sm:mx-[5rem] md:mx-[10rem] rounded-full px-[2rem] mobile:px-[5rem] lg:px-0 py-10 rounded-bl-[6rem] 2xl:rounded-bl-[12rem] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-secondaryColor_darkPurple to-primaryColor_turquoise"
        data-aos="fade-left"
      >
        <section className="flex flex-col gap-5 ml-1 md:ml-5 lg:ml-[7rem] items-center lg:items-start mr-[1rem] pt-1">
          <h1 className="font-clashDisplay text-[3.2rem] xl:text-[3.5vw] text-white">
            Bring the world of live music together.
          </h1>
          <p className="font-manrope text-[1rem] xl:text-[1vw] mr-0 lg:mr-[7rem] text-white">
            Connect venues with musicians and bring the fans to events. That has
            been our mission and we invite you to join us on this ride!
          </p>
          <div className="block xl:hidden w-full">
            <img
              src={app_img}
              alt="hero_img"
              className="object-fill block self-start xl:hidden"
            />
          </div>
          <div className="flex flex-col self-center xl:self-start lg:flex-row shrink flex-nowrap justify-center my-10 lg:justify-start gap-10">
            <Button
              label="Download on Appstore"
              onClick={() => alert("Not Available Now")}
              icon={<AiFillApple className="text-black text-2xl" />}
              className="py-3 px-7 text-[1rem] xl:text-[1vw] whitespace-nowrap rounded-full bg-white text-black border border-black items-center flex flex-row gap-2 hover:bg-gray-100 ease-in-out"
            />
            <Button
              label="Download on Google Play"
              onClick={() => alert("Not Available Now")}
              icon={<FaGooglePlay className="text-black text-xl" />}
              className="py-3 px-7 text-[1rem] xl:text-[1vw] whitespace-nowrap rounded-full bg-white text-black border border-black items-center flex flex-row gap-2 hover:bg-gray-100 ease-in-out"
            />
          </div>
          <Button
            label="Sign Up"
            onClick={goToTestApp}
            className="self-center mt-[-2rem] xl:self-start py-3 px-[6rem] text-[1rem] xl:text-[1vw] rounded-full bg-primaryColor_turquoise text-white border border-black hover:bg-primaryColor_darkTurquoise transition ease-in-out"
          />
        </section>
        <section className="hidden xl:block">
          <img src={app_img} alt="hero_img" className="w-auto mr-[3rem]" />
        </section>
      </div>
    </>
  );
}

export default HomeHero;

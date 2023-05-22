import { useEffect } from "react";
import app_img from "../../../assets/home_imgs/app_img.png";
import Button from "../Shared_components/Button";
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
        className="overflow-hidden flex flex-row items-center mt-5 mb-[4rem] xl:mb-[6rem] mx-5 mobile:mx-[2rem] sm:mx-[5rem] xl:mx-[10rem] rounded-full px-[2rem] mobile:px-[3rem] sm:px-[5rem] lg:px-0 py-5 rounded-bl-[6rem] 2xl:rounded-bl-[12rem] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-secondaryColor_darkPurple to-primaryColor_turquoise"
        data-aos="fade-left"
      >
        <section
          className="flex flex-col gap-5 ml-1 md:ml-5 lg:ml-[7rem] items-center mb-[2rem] lg:mb-0 lg:items-start mr-[1rem] pt-1"
          data-aos="fade-right"
        >
          <h1 className="font-clashDisplay text-[3.2rem] xl:text-[3.5vw] text-white">
            Live music from the roots.
          </h1>
          <p className="font-manrope text-[1rem] xl:text-[1vw] mr-0 lg:mr-[7rem] text-white">
            Connect venues with musicians and bring the fans to events. That has
            been our mission and we invite you to join us on this ride!
          </p>
          <div className="block lg:hidden">
            <img
              src={app_img}
              alt="hero_img"
              data-aos="fade-up"
              className="self-start w-[40rem] sm:w-[30rem]"
            />
          </div>
          <div className="hidden flex flex-col self-center lg:self-start lg:flex-row shrink flex-nowrap justify-center my-10 lg:justify-start gap-10">
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
            label="Become a tester"
            onClick={goToTestApp}
            className="whitespace-nowrap self-center mt-2 lg:self-start py-3 px-[6rem] text-[1rem] xl:text-[1vw] rounded-full bg-primaryColor_turquoise text-white border border-black hover:bg-primaryColor_darkTurquoise transition ease-in-out"
          />
        </section>
        <section className="hidden lg:block mr-[2rem]" data-aos="fade-up">
          <img src={app_img} alt="hero_img" className="w-[50rem]" />
        </section>
      </div>
    </>
  );
}

export default HomeHero;

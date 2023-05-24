import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  label: string;
  text?: string;
  picture?: any;
  className?: string;
};

function FeaturesCard(props: Props) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-[2rem] mobile:px-[3rem] md:px-[5rem] pt-6 bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-3xl leading-none flex items-top justify-start space-x-6">
          <div className="whitespace-wrap flex flex-col h-auto md:h-[41rem] w-[16rem] sm:w-[18rem] md:w-[22rem] items-center pt-5 gap-5 overflow-hidden">
            <h1 className="text-white text-[1.5rem] mobile:text-[2rem] font-clashDisplay whitespace-wrap">
              {props.label}
            </h1>
            <p className="text-justify leading-[1.5rem]">{props.text}</p>
            <img
              src={props.picture}
              className={props.className}
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;

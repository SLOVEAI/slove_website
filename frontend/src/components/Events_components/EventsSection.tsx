import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function EventsSection() {
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
      <div className="font-manrope text-center py-[3rem]" data-aos="fade-left">
        <h1 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
          Events
        </h1>

        <div className="border border-primaryColor_lightBlue rounded-xl p-10 mt-[5rem] mx-[3rem] sm:mx-[10rem] lg:mx-[20rem]">
          <h1 className="text-[1rem] lg:text-[2rem] text-white">
            No events have been added yet
          </h1>
        </div>
      </div>
    </>
  );
}

export default EventsSection;

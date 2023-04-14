import React from "react";
import model from "../assets/diagram.png";

function HomeSection4() {
  return (
    <>
      <div className="flex flex-col flex-col-reverse gap-10 items-center lg:gap-0 lg:grid grid-cols-2 grid-rows-1 px-10 md:px-[10rem] mt-[10rem]">
        <div className="ml-10 md:m-0 col-span-1 row-span-1">
          <img src={model} alt="model.img" />
        </div>

        <div className="col-span-1 row-span-1 flex flex-col items-center font-manrope text-[1rem] text-white font-semibold ml-[4rem]">
          <h2 className="font-clashDisplay text-center md:text-left text-secondaryColor_lilac text-[3.5rem]">
            How the magic works?
          </h2>
          <div className="mx-10 md:m-0">
            <p className="mb-4">
              We at Slove like transparancy. So what happens behind the scenes
              is, that based on the preferences of the three major players of
              the live music industry we connect them based on a smart (yes, we
              are quite proud it) algorithm.
            </p>
            <p>
              Through that, we open up tremendous opportunities. Opportunities,
              that are beyond economic benefits such as artist development,
              mental well-being, marketing and PR for venues & music related
              businesses just to name a few.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection4;

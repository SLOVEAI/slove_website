import React from "react";

type Props = {
  text?: string;
  number?: string;
};

function FeaturesHowTo(props: Props) {
  return (
    <div className="font-clashDisplay flex flex-col sm:flex-row items-center gap-1 sm:gap-5 p-7 w-[13rem] sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] rounded-3xl text-white bg-gradient-to-r from-secondaryColor_darkPurple to-primaryColor_turquoise">
      <h1 className="text-xl md:text-3xl">{props.number}</h1>
      <p className="text-lg sm:text-xl md:text-2xl">{props.text}</p>
    </div>
  );
}

export default FeaturesHowTo;

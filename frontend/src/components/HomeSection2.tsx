import { useState } from "react";
import musician_img from "../assets/musician_img.png";
import venue_img from "../assets/venue_img.png";
import fan_img from "../assets/fan_img.png";

function HomeSection2() {
  const targetTypes = [
    {
      type: "musician",
      text: "Imagine a way to find gigs stress free, from anywhere you’d like without having to put yourself out there over and over again. Well, we have good news: we got you! We came up with a solution, where you can focus on your music,  let it speak for itself and we take care of the rest.",
      advantage1: "Venue Recommendation",
      advantage2: "Right Networking",
      advantage3: "Regular Income",
      img: musician_img,
    },
    {
      type: "venue",
      text: "Imagine a way to find gigs stress free, from anywhere you’d like without having to put yourself out there over and over again. Well, we have good news: we got you! We came up with a solution, where you can focus on your music,  let it speak for itself and we take care of the rest.",
      advantage1: "Artist Recommendation",
      advantage2: "Right Networking",
      advantage3: "Promote Events",
      img: venue_img,
    },
    {
      type: "fan",
      text: "Imagine a way to find gigs stress free, from anywhere you’d like without having to put yourself out there over and over again. Well, we have good news: we got you! We came up with a solution, where you can focus on your music,  let it speak for itself and we take care of the rest.",
      advantage1: "Event Recommendation",
      advantage2: "Discover new artists",
      advantage3: "Easy ticket purchase",
      img: fan_img,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTarget = (targetIndex: any) => {
    setCurrentIndex(targetIndex);
  };

  return (
    <>
      <div className="pt-[10rem] flex flex-col justify-center items-center">
        <h2 className="font-clashDisplay text-primaryColor_turquoise text-[4rem]">
          How can we help you
        </h2>
        <div className="flex flex-row bg-white px-8 py-1 rounded-full gap-[3rem] items-center mt-10">
          {targetTypes.map((targetType, targetIndex) => (
            <div
              key={targetIndex}
              onClick={() => goToTarget(targetIndex)}
              className={
                targetIndex === currentIndex
                  ? "bg-secondaryColor_darkPurple text-white p-2 px-10 rounded-full"
                  : "text-black"
              }
            >
              <h1 className="text-2xl cursor-pointer">As {targetType.type}</h1>
            </div>
          ))}
        </div>
        <div className="text-center text-white mt-10">
          <p className="px-[20rem] text-[1rem]">
            {targetTypes[currentIndex].text}
          </p>
        </div>
        <div className="flex flex-row mt-10 items-center">
          <ul className="text-center text-white mt-10 mr-[7rem]">
            <li className="flex flex row gap-10 items-center">
              <h1 className="font-clashDisplay text-[8rem] text-primaryColor_turquoise">
                1
              </h1>
              <span className="text-[1.5rem]">
                {targetTypes[currentIndex].advantage1}
              </span>
            </li>
            <li className="flex flex row gap-10 items-center ml-[5rem]">
              <h1 className="font-clashDisplay text-[8rem] text-primaryColor_turquoise">
                2
              </h1>
              <span className="text-[1.5rem]">
                {targetTypes[currentIndex].advantage2}
              </span>
            </li>
            <li className="flex flex row gap-10 items-center">
              <h1 className="font-clashDisplay text-[8rem] text-primaryColor_turquoise">
                3
              </h1>
              <span className="text-[1.5rem]">
                {targetTypes[currentIndex].advantage2}
              </span>
            </li>
          </ul>
          <img
            src={targetTypes[currentIndex].img}
            alt="img"
            className="w-[50%]"
          />
        </div>
      </div>
    </>
  );
}

export default HomeSection2;

import { useState } from "react";
import musician_advantage_1 from "../assets/musician_advantage_1.png";
import musician_advantage_2 from "../assets/musician_advantage_2.png";
import musician_advantage_3 from "../assets/musician_advantage_3.png";
import venue_advantage_1 from "../assets/venue_advantage_1.png";
import venue_advantage_2 from "../assets/venue_advantage_2.png";
import venue_advantage_3 from "../assets/venue_advantage_3.png";
import fan_advantage_1 from "../assets/fan_advantage_1.png";
import fan_advantage_2 from "../assets/fan_advantage_2.png";
import fan_advantage_3 from "../assets/fan_advantage_3.png";

function HomeSection2() {
  const targetTypes = [
    {
      type: "musician",
      text: "Imagine a way to find gigs stress free, from anywhere you’d like without having to put yourself out there over and over again. Well, we came up with a solution so that you can focus on your music, let it speak for itself, and we'll take care of the rest. In other words: we got you!",
      advantage1: musician_advantage_1,
      advantage2: musician_advantage_2,
      advantage3: musician_advantage_3,
    },
    {
      type: "venue",
      text: "We know that booking can be quite a hassle. That’s why we came up with a solution to make it smoother. On top we also not only recommend you new artists you’ll like, we will also provide you with valuable insights about what is currently happening in the industry and the local music scene.",
      advantage1: venue_advantage_1,
      advantage2: venue_advantage_2,
      advantage3: venue_advantage_3,
    },
    {
      type: "fan",
      text: "Have you ever experienced discovering a new artist or band and then learn, that you just missed their concert? Won’t happen again with Slove! We’ll not only recommend you new artists, we’ll also recommend you events. Cherry on top: the tickets are bought in the same go!",
      advantage1: fan_advantage_1,
      advantage2: fan_advantage_2,
      advantage3: fan_advantage_3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTarget = (targetIndex: any) => {
    setCurrentIndex(targetIndex);
  };

  return (
    <>
      <div className="overflow-hidden pt-[3rem] xl:gap-[6rem] flex flex-col xl:grid xl:grid-cols-3 xl:grid-rows-1 justify-center items-center px-[5rem] sm:px-[10rem]">
        <div className="flex flex-col col-span-1 row-span-1 mr-0 xl:mr-[2rem] items-center xl:items-start">
          <h2 className="font-clashDisplay text-center xl:text-left text-white text-[2rem] mobile:text-[4rem]">
            How can we help you?
          </h2>

          <div className="flex flex-row xl:hidden whitespace-nowrap bg-white px-4 mobile:px-8 py-1 rounded-full gap-5 mobile:gap-[3rem] items-center mt-10">
            {targetTypes.map((targetType, targetIndex) => (
              <div
                key={targetIndex}
                onClick={() => goToTarget(targetIndex)}
                className={
                  targetIndex === currentIndex
                    ? "bg-secondaryColor_darkPurple relative z-10 text-white p-2 px-10 rounded-full"
                    : "text-black"
                }
              >
                <h1 className="text-sm mobile:text-md md:text-xl cursor-pointer">
                  As {targetType.type}
                </h1>
              </div>
            ))}
          </div>

          <div className="text-white mx-5 mobile:mx-0 mt-10">
            <p className="text-[1rem]">{targetTypes[currentIndex].text}</p>
          </div>
        </div>

        <div className="flex flex-col col-span-2 row-span-1 mt-10 items-center">
          <div className="hidden xl:flex flex-row whitespace-nowrap bg-white px-8 py-1 rounded-full gap-[3rem] items-center mt-10">
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
                <h1 className="text-xl cursor-pointer">As {targetType.type}</h1>
              </div>
            ))}
          </div>
          <ul className="flex flex-col md:flex-row mt-[-2rem] xl:mt-10">
            <li className="z-0 mb-[-4rem] sm:mb-[-8rem] md:mb-0 md:mr-[-5rem] 2xl:mr-[-10rem]">
              <img
                src={targetTypes[currentIndex].advantage1}
                alt="img"
                className="md:max-w-xs lg:max-w-[15rem] exeption:max-w-xs 2xl:max-w-xl"
              />
            </li>
            <li className="z-10 mb-[-4rem] sm:mb-[-8rem] md:mb-0 md:mr-[-5rem] 2xl:mr-[-10rem]">
              <img
                src={targetTypes[currentIndex].advantage2}
                alt="img"
                className="md:max-w-xs lg:max-w-[15rem] exeption:max-w-xs 2xl:max-w-xl"
              />
            </li>
            <li className="z-20">
              <img
                src={targetTypes[currentIndex].advantage3}
                alt="img"
                className="md:max-w-xs lg:max-w-[15rem] exeption:max-w-xs 2xl:max-w-xl"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeSection2;

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../Shared_components/Card";

import money from "../../../assets/money.png";
import venue from "../../../assets/venue.png";
import connections from "../../../assets/connections.png";

import artist from "../../../assets/artist.png";
import insights from "../../../assets/insights.png";
import promotion from "../../../assets/promotion.png";

import recommendation from "../../../assets/recommendation.png";
import singer from "../../../assets/singer.png";
import ticket from "../../../assets/ticket.png";

function HomeSection2() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const targetTypes = [
    {
      type: "musician",
      text: "Imagine a way to find gigs stress free, from anywhere you’d like without having to put yourself out there over and over again. Well, we came up with a solution so that you can focus on your music, let it speak for itself, and we'll take care of the rest. In other words: we got you!",
      advantage1: <Card label="Get booked easily" icon={venue} />,
      advantage2: <Card label="Build connections" icon={connections} />,
      advantage3: <Card label="More gigs, more income" icon={money} />,
    },
    {
      type: "venue",
      text: "We know that booking can be quite a hassle. That’s why we came up with a solution to make it smoother. On top we also not only recommend you new artists you’ll like, we will also provide you with valuable insights about what is currently happening in the industry and the local music scene.",
      advantage1: <Card label="Discover local talent" icon={artist} />,
      advantage2: <Card label="Promote your events" icon={promotion} />,
      advantage3: (
        <Card label="Insights on the local music scene" icon={insights} />
      ),
    },
    {
      type: "audience",
      text: "Have you ever experienced discovering a new artist or band and then learn, that you just missed their concert? Won’t happen again with Slove! We’ll not only recommend you new artists, we’ll also recommend you events. Cherry on top: the tickets are bought in the same go!",
      advantage1: <Card label="Easy ticket access" icon={ticket} />,
      advantage2: <Card label="Discover local artists" icon={singer} />,
      advantage3: (
        <Card label="Get local event recommendations" icon={recommendation} />
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTarget = (targetIndex: any) => {
    setCurrentIndex(targetIndex);
  };

  return (
    <>
      <div
        className="overflow-hidden pt-[3rem] xl:gap-[6rem] flex flex-col xl:grid xl:grid-cols-3 xl:grid-rows-1 justify-center items-center px-[5rem] sm:px-[10rem]"
        data-aos="fade-right"
      >
        <div className="flex flex-col col-span-1 row-span-1 mr-0 xl:mr-[2rem] items-center xl:items-start">
          <h2 className="font-clashDisplay text-center xl:text-left text-white text-[2rem] mobile:text-[4rem]">
            How can we help you?
          </h2>

          <div className="flex flex-row flex-1 xl:hidden whitespace-nowrap bg-white px-4 mobile:px-8 py-1 rounded-full gap-5 mobile:gap-[3rem] justify-center items-center mt-10">
            {targetTypes.map((targetType, targetIndex) => (
              <div
                key={targetIndex}
                onClick={() => goToTarget(targetIndex)}
                className={
                  targetIndex === currentIndex
                    ? "flex-1 bg-secondaryColor_darkPurple relative z-10 text-white p-2 px-10 rounded-full text-sm mobile:text-md md:text-xl cursor-pointer"
                    : "flex-1 text-black text-sm mobile:text-md md:text-xl cursor-pointer"
                }
              >
                {targetType.type}
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
                <h1 className="text-xl cursor-pointer">{targetType.type}</h1>
              </div>
            ))}
          </div>
          <ul className="flex flex-col lg:flex-row items-center text-center mt-10 gap-12 lg:gap-6 mb-5">
            <li>{targetTypes[currentIndex].advantage1}</li>
            <li>{targetTypes[currentIndex].advantage2}</li>
            <li>{targetTypes[currentIndex].advantage3}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeSection2;

import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturesCard from "./FeaturesCard";

import ekpimg from "../../assets/features_imgs/appphone_test.png";
import get_booked from "../../assets/features_imgs/musician_get_booked.png";
import actionable_insights from "../../assets/features_imgs/musician/musician_actionable_insights.png";
import discover from "../../assets/features_imgs/musician/musician_discover.png";
import effortless_booking from "../../assets/features_imgs/musician/musician_effortless_booking.png";
import expand_fanbase from "../../assets/features_imgs/musician/musician_expand_fanbase.png";
import get_discovered from "../../assets/features_imgs/musician/musician_get_discovered.png";
import safe_and_secure_communication from "../../assets/features_imgs/musician/musician_safe_and_secure_communication.png";
import smart_calendar from "../../assets/features_imgs/musician/musician_smart_calendar.png";

function FeaturesSection() {
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
      advantages: [
        <FeaturesCard
          label="Intelligent EPK"
          picture={ekpimg}
          className="-mt-[3rem]"
          text="We're proud to offer a reliable and user-friendly interface for your electronic press kit (EPK) needs. Our platform is designed to adapt and evolve based on your actions, feedback from listeners, and your past and upcoming performances, ensuring that your EPK is always up-to-date and accurate."
        />,
        <FeaturesCard
          label="Get booked"
          picture={get_booked}
          className="-mt-[4rem] sm:-mt-[5rem]"
          text="We understand that getting your gig booked by venues can be quite challenging and time-consuming. But don't worry, we've got your back! Our app is here to recommend venues to you based on your electronic press kit (EPK), which can significantly increase your chances of getting booked. Once you've created your profile, our app will match you with prospective venues that are a good fit for your style and requirements. This means that you could land a booking almost immediately! Let us help you make your booking process stress-free and enjoyable."
        />,
        <FeaturesCard
          label="Smart Calender"
          picture={smart_calendar}
          className="-mt-[0.5rem]"
          text="With regular updates, our system takes into account your availability and suggests suitable venues for you to consider. Plus, venues can see your availability and propose booking slots, making the process even more streamlined and efficient."
        />,
        <FeaturesCard
          label="Effortless Booking"
          picture={effortless_booking}
          className="-mt-[0.9rem]"
          text="Once you've found the perfect match, you can start a conversation with them via our user-friendly chat interface and organize everything from the time and date of the event to the booking price, additional requests, contracts, chats, and secure payments - all in one place!"
        />,
        <FeaturesCard
          label="Discover"
          picture={discover}
          className="-mt-[3rem]"
          text="No worries if our venue recommendations don't quite match what you're looking for. Our platform offers extensive search options, allowing you to easily find and discover the perfect venues that fit your unique style and requirements. We want you to have the freedom and flexibility to take control of your music career and choose the venues that best suit your needs.!"
        />,
        <FeaturesCard
          label="Safe and secure communication"
          picture={safe_and_secure_communication}
          className="-mt-[2.6rem]"
          text="You can effortlessly connect and communicate with anyone in the community, with full control over who can contact you directly. Plus, our user-friendly chat functionality ensures that you can network and collaborate with others in the music industry while feeling safe and secure."
        />,
        <FeaturesCard
          label="Actionable insights"
          picture={actionable_insights}
          className="-mt-[2rem]"
          text="Get valuable insights on your music career with our user-friendly dashboard. Keep track of your progress, identify areas for improvement, and make informed decisions to achieve your music career aspirations. Easily see what audiences and venues are saying about you and use this information to take action and reach your goals. Trust us to provide you with actionable insights to advance your music career."
        />,
        <FeaturesCard
          label="Expand fanbase"
          picture={expand_fanbase}
          className="mt-[1rem]"
          text="Expand your fan base and grow your music career with our platform. Keep your EPK up-to-date to showcase your best work and easily connect with your audience. Receive valuable feedback and reviews to help you improve and build a loyal fan base. Join us today and get discovered by music enthusiasts!"
        />,
        <FeaturesCard
          label="Get discovered"
          picture={get_discovered}
          className="-mt-[2.7rem]"
          text="Looking to connect with other music professionals? Our platform is the perfect place for networking opportunities, mentorship, or finding new band members. Designed to make it easy for you to connect and collaborate with like-minded individuals, trust us to provide a safe and user-friendly environment to help you achieve your goals and advance your music career. Get discovered by other industry professionals today!"
        />,
      ],
    },
    {
      type: "venue",
      advantages: [
        <FeaturesCard label="Discover local talent" />,
        <FeaturesCard label="Promote your events" />,
        <FeaturesCard label="Insights on the local music scene" />,
      ],
    },
    {
      type: "audience",
      advantages: [
        <FeaturesCard label="Easy ticket access" />,
        <FeaturesCard label="Discover local artists" />,
        <FeaturesCard label="item 3" />,
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTarget = (targetIndex: any) => {
    setCurrentIndex(targetIndex);
  };

  return (
    <>
      <div
        className="font-manrope text-center text-white flex flex-col items-center py-[3rem]"
        data-aos="fade-left"
      >
        <h1 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
          How we can help you
        </h1>

        <div className="flex flex-col col-span-2 row-span-1 mx-[5rem] items-center">
          <div className="flex flex-row whitespace-nowrap bg-white px-5 sm:px-8 py-1 rounded-full gap-[3rem] items-center my-10">
            {targetTypes.map((targetType, targetIndex) => (
              <div
                key={targetIndex}
                onClick={() => goToTarget(targetIndex)}
                className={
                  targetIndex === currentIndex
                    ? "bg-secondaryColor_darkPurple text-white p-1 sm:p-2 px-5 sm:px-10 rounded-full"
                    : "text-black"
                }
              >
                <h1 className="text-md sm:text-xl cursor-pointer">
                  {targetType.type}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center text-center mt-10 gap-12 lg:gap-[5rem] my-5">
            {targetTypes[currentIndex].advantages}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;

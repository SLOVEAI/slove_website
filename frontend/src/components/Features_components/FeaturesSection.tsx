import React from "react";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturesCard from "./FeaturesCard";
import FeaturesHowTo from "./FeaturesHowTo";

import line from "../../../assets/features_imgs/curved_line.svg";

// MUSICIAN PROTOTYPE IMGS
import m_ekpimg from "../../../assets/features_imgs/musician/appphone_test.png";
import m_get_booked from "../../../assets/features_imgs/musician/musician_get_booked.png";
import m_actionable_insights from "../../../assets/features_imgs/musician/musician_actionable_insights.png";
import m_discover from "../../../assets/features_imgs/musician/musician_discover.png";
import m_effortless_booking from "../../../assets/features_imgs/musician/musician_effortless_booking.png";
import m_expand_fanbase from "../../../assets/features_imgs/musician/musician_expand_fanbase.png";
import m_get_discovered from "../../../assets/features_imgs/musician/musician_get_discovered.png";
import m_safe_and_secure_communication from "../../../assets/features_imgs/musician/musician_safe_and_secure_communication.png";
import m_smart_calendar from "../../../assets/features_imgs/musician/musician_smart_calendar.png";

// VENUE PROTOTYPE IMGS
import v_automated_event_generation from "../../../assets/features_imgs/venue/venues_automated_event_generation.png";
import v_competitive_insights from "../../../assets/features_imgs/venue/venues_competitive_insights.png";
import v_discover from "../../../assets/features_imgs/venue/venues_discover.png";
import v_effortless_booking from "../../../assets/features_imgs/venue/venues_effortless_booking.png";
import v_personalized_recommendation from "../../../assets/features_imgs/venue/venues_personalized_recommendation.png";
import v_safe_and_secure_communication from "../../../assets/features_imgs/venue/venues_safe_and_secure_communication.png";
import v_smart_calendar from "../../../assets/features_imgs/venue/venues_smart_calendar.png";
import v_venue_review from "../../../assets/features_imgs/venue/venues_venue_review.png";

// FAN PROTOTYPE IMGS
import f_affordable_ticket_pricing from "../../../assets/features_imgs/fan/fanbase_affordable_ticket_pricing.png";
import f_easy_ticket_purchasing from "../../../assets/features_imgs/fan/fanbase_easy_ticket_purchasing.png";
import f_gig_notification from "../../../assets/features_imgs/fan/fanbase_gig_notification.png";
import f_more_gigs_more_fun from "../../../assets/features_imgs/fan/fanbase_more_gigs_more_fun.png";
import f_new_music from "../../../assets/features_imgs/fan/fanbase_new_music.png";

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
          picture={m_ekpimg}
          className="-mt-[3rem]"
          text="We're proud to offer a reliable and user-friendly interface for your electronic press kit (EPK) needs. Our platform is designed to adapt and evolve based on your actions, feedback from listeners, and your past and upcoming performances, ensuring that your EPK is always up-to-date and accurate."
        />,
        <FeaturesCard
          label="Perfect Match"
          picture={m_get_booked}
          className="-mt-[4rem] sm:-mt-[5rem]"
          text="We understand that getting your gig booked by venues can be quite challenging and time-consuming. But don't worry, we've got your back! Our app is here to recommend venues to you based on your electronic press kit (EPK), which can significantly increase your chances of getting booked. Once you've created your profile, our app will match you with prospective venues that are a good fit for your style and requirements. This means that you could land a booking almost immediately! Let us help you make your booking process stress-free and enjoyable."
        />,
        <FeaturesCard
          label="Smart Calender"
          picture={m_smart_calendar}
          className="-mt-[0.5rem]"
          text="With regular updates, our system takes into account your availability and suggests suitable venues for you to consider. Plus, venues can see your availability and propose booking slots, making the process even more streamlined and efficient."
        />,
        <FeaturesCard
          label="Seamless Booking"
          picture={m_effortless_booking}
          className="-mt-[0.9rem]"
          text="Once you've found the perfect match, you can start a conversation with them via our user-friendly chat interface and organize everything from the time and date of the event to the booking price, additional requests, contracts, chats, and secure payments - all in one place!"
        />,
        <FeaturesCard
          label="Discover"
          picture={m_discover}
          className="-mt-[3rem]"
          text="No worries if our venue recommendations don't quite match what you're looking for. Our platform offers extensive search options, allowing you to easily find and discover the perfect venues that fit your unique style and requirements. We want you to have the freedom and flexibility to take control of your music career and choose the venues that best suit your needs.!"
        />,
        <FeaturesCard
          label="Safe and secure communication"
          picture={m_safe_and_secure_communication}
          className="-mt-[2.6rem]"
          text="You can effortlessly connect and communicate with anyone in the community, with full control over who can contact you directly. Plus, our user-friendly chat functionality ensures that you can network and collaborate with others in the music industry while feeling safe and secure."
        />,
        <FeaturesCard
          label="Trustworthy insights"
          picture={m_actionable_insights}
          className="-mt-[2rem]"
          text="Get valuable insights on your music career with our user-friendly dashboard. Keep track of your progress, identify areas for improvement, and make informed decisions to achieve your music career aspirations. Easily see what audiences and venues are saying about you and use this information to take action and reach your goals. Trust us to provide you with actionable insights to advance your music career."
        />,
        <FeaturesCard
          label="Expanding fanbase"
          picture={m_expand_fanbase}
          className="mt-[1rem]"
          text="Expand your fan base and grow your music career with our platform. Keep your EPK up-to-date to showcase your best work and easily connect with your audience. Receive valuable feedback and reviews to help you improve and build a loyal fan base. Join us today and get discovered by music enthusiasts!"
        />,
        <FeaturesCard
          label="Get discovered"
          picture={m_get_discovered}
          className="-mt-[2.7rem]"
          text="Looking to connect with other music professionals? Our platform is the perfect place for networking opportunities, mentorship, or finding new band members. Designed to make it easy for you to connect and collaborate with like-minded individuals, trust us to provide a safe and user-friendly environment to help you achieve your goals and advance your music career. Get discovered by other industry professionals today!"
        />,
      ],
      HowItWorks1: "Set up your profile.",
      HowItWorks2: "Reach out to venues for your next gig.",
      HowItWorks3: "Discuss everything about the gig.",
      HowItWorks4: "Time to perform - Have fun!",
    },
    {
      type: "venue",
      advantages: [
        <FeaturesCard
          label="Personalized Recommendation"
          picture={v_personalized_recommendation}
          className="-mt-[2rem] sm:-mt-[3rem]"
          text="Our extensive search options allow you to discover talented grassroot artists who match your specific requirements. In addition to that, our system considers your availability and suggests suitable musicians for you to consider, making the process even more streamlined and efficient."
        />,
        <FeaturesCard
          label="Seamless Booking"
          picture={v_effortless_booking}
          className="mt-[2rem]"
          text="Once you have found the perfect match, you can start a conversation with them via our user-friendly chat interface. There you can organize everything from the time and date of the event to the booking price, additional requests, contracts, chats, and secure payments - all from one platform!"
        />,
        <FeaturesCard
          label="Discover"
          picture={v_discover}
          className="-mt-[2rem] sm:-mt-[3rem]"
          text="We offer extensive search options that allow you to discover talented artists who match your specific requirements. Whether you're looking for a particular genre or style, or simply want to browse through a wide range of options, our platform makes it easy to find the musicians that are right for you. Once you've found the perfect match, you can start a conversation with them through our user-friendly chat interface."
        />,
        <FeaturesCard
          label="Smart Calender"
          picture={v_smart_calendar}
          className="-mt-[2rem] sm:-mt-[3rem]"
          text="With this feature, you can set your availability preferences in your profile and receive recommendations based on your requirements. Additionally, musicians can also see your availability and propose booking slots directly, making the booking process more efficient. Our goal is to simplify the process and conveniently help you connect with the right musicians for your events."
        />,
        <FeaturesCard
          label="Automatically Generated"
          picture={v_automated_event_generation}
          className="-mt-[1rem] sm:-mt-[3rem]"
          text="When you confirm a booking with one of our talented musicians, our platform automatically generates an event for your upcoming show. This event is then promoted on the app and recommended to audiences who share similar preferences to your target audience - maximizing your chances of a successful turnout."
        />,
        <FeaturesCard
          label="Venue Reviews"
          picture={v_venue_review}
          className="-mt-[1rem]"
          text="Musicians and audiences can leave reviews about your venue, which will help improve your reputation and inspire future visitors to attend events you are hosting. A reputable venue ensures that you are a reliable option for talented musicians, who may be interested in reaching out to you regarding a collaboration for their next performance."
        />,
        <FeaturesCard
          label="Competitive Insights"
          picture={v_competitive_insights}
          className="mt-[7.7rem]"
          text="We gather valuable intelligence that provides quick insight about the local live music scene."
        />,
        <FeaturesCard
          label="Safe and Secure Communication"
          picture={v_safe_and_secure_communication}
          className="mt-[1rem]"
          text="You can effortlessly connect and communicate with anyone in the community, and you have full control over who can directly contact you. Plus, our user-friendly chat functionality assures that you can safely and securely network and collaborate with others in the music industry."
        />,
      ],
      HowItWorks1: "Set up your profile.",
      HowItWorks2: "Reach out to musicians you like.",
      HowItWorks3: "Discuss your gigs.",
      HowItWorks4: "It's time for your event - Have fun!",
    },
    {
      type: "audience",
      advantages: [
        <FeaturesCard
          label="More Gigs - More Fun"
          picture={f_more_gigs_more_fun}
          className="mt-[3rem]"
          text="Plan your gig calendar ahead of time with our diverse selection of small and medium-scale gigs featuring talented grassroots musicians. Choose the music that speaks to you and enjoy a night of unforgettable live entertainment."
        />,
        <FeaturesCard
          label="Easy Ticket Purchasing"
          picture={f_easy_ticket_purchasing}
          className="mt-[0.3rem]"
          text="Once you've found an event you're interested in, you can easily buy your ticket with just a few clicks. You'll have your ticket on your mobile, ready for the event!"
        />,
        <FeaturesCard
          label="Affordable Ticket Pricing"
          picture={f_affordable_ticket_pricing}
          className="mt-[3rem]"
          text="We make sure our ticket pricing is affordable for all. Our focus is on true music devotees, making it attainable for everyone to attend the events they love."
        />,
        <FeaturesCard
          label="Gig Notifications"
          picture={f_gig_notification}
          className="mt-[3rem]"
          text="Never miss a great event again! Just activate your 'gig notification' to stay alert for upcoming shows that match your preferences."
        />,
        <FeaturesCard
          label="New Music"
          picture={f_new_music}
          className="-mt-[1rem]"
          text="Get ready to discover new music that perfectly fits your taste! Our platform will suggest emerging artists based on your preferences. Simply browse through their profiles, listen to their music, and follow them to stay informed about their latest work."
        />,
      ],
      HowItWorks1: "Set up your profile.",
      HowItWorks2: "Discover events and new music.",
      HowItWorks3: "Buy tickets for gigs.",
      HowItWorks4: "Enjoy great music and make new memeories!",
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
          <div className="flex flex-row whitespace-nowrap bg-white px-2 py-1 rounded-full gap-5 items-center my-10">
            {targetTypes.map((targetType, targetIndex) => (
              <div
                key={targetIndex}
                onClick={() => goToTarget(targetIndex)}
                className={
                  targetIndex === currentIndex
                    ? "bg-secondaryColor_darkPurple text-white p-1 sm:p-2 w-[5.5rem] mobile:w-[7rem] sm:w-[9rem] rounded-full transition duration-500"
                    : "bg-white text-black p-1 sm:p-2 w-[5.5rem] mobile:w-[7rem] sm:w-[9rem] rounded-full"
                }
              >
                <h1
                  className="text-md sm:text-xl cursor-pointer"
                  key={targetIndex}
                >
                  {targetType.type}
                </h1>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center text-center mt-10 gap-12 lg:gap-[5rem] my-5">
            {targetTypes[currentIndex].advantages}
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-10 mt-[10rem] mx-1 mobile:mx-0"
          data-aos="fade-up"
        >
          <h1 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
            How it works
          </h1>
          <div
            className="mt-[3rem] stroke-transparent bg-contain bg-center bg-no-repeat relative w-full"
            style={{ backgroundImage: `url(${line})` }}
          >
            <div className="flex flex-col mobile:grid grid-cols-2 grid-rows-4 gap-y-1 md:gap-y-[4rem] gap-x-[3rem]">
              <div className="col-span-1 row-span-1">
                <FeaturesHowTo
                  text={targetTypes[currentIndex].HowItWorks1}
                  number="1."
                />
              </div>
              <div className="col-start-2 col-end-2 row-start-2">
                <FeaturesHowTo
                  text={targetTypes[currentIndex].HowItWorks2}
                  number="2."
                />
              </div>
              <div className="col-start-1 col-end-1 row-start-3">
                <FeaturesHowTo
                  text={targetTypes[currentIndex].HowItWorks3}
                  number="3."
                />
              </div>
              <div className="col-start-2 col-end-2 row-start-4">
                <FeaturesHowTo
                  text={targetTypes[currentIndex].HowItWorks4}
                  number="4."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturesSection;

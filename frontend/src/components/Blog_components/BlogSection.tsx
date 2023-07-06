import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BlogCard from "./BlogCard";
import blogimg2 from "../../../assets/blog_imgs/blog_test_img.png";
import blogimg1 from "../../../assets/blog_imgs/blogPost_img.png";
import blogimg3 from "../../../assets/blog_imgs/blog_3.png";

function BlogSection() {
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
          Blog
        </h1>

        <div className="mt-10 gap-[7rem] flex flex-col text-left mx-[2rem] mobile:mx-[5rem] md:mx-[10rem] lg:mx-[15rem] xl:mx-[20rem]">
          <BlogCard
            selectedId="1"
            blog_title="SLOVE EPK"
            date="16 May, 2023"
            image={blogimg1}
            description="We're proud to offer a reliable and user-friendly interface for your electronic press kit (EPK) needs. Our platform is designed to adapt and evolve based on your actions, feedback from listeners, and your past and upcoming performances, ensuring that your EPK is always up-to-date and accurate."
          />
          <BlogCard
            selectedId="2"
            blog_title="Booking process"
            date="26 May, 2023"
            image={blogimg2}
            description="Here are the guidelines for how musicians and venues can use our seamless booking feature when arranging a gig and signing contracts."
          />
          <BlogCard
            selectedId="3"
            blog_title="Create a gig"
            date="3 July, 2023"
            image={blogimg3}
            description="As for venues and musicians who have booked a collaboration, follow our step-by-step guide for creating the gig and making it visible on our platform. This enhances all your chances of getting a big audience, so be sure to make good use of this action! As for the audience, let us help you navigate in this section so that you can easily find where the best local gigs are playing!  "
          />
        </div>
      </div>
    </>
  );
}

export default BlogSection;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BlogCard from "./BlogCard";
import testimg from "../../../assets/blog_imgs/blog_test_img.png";

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

        <div className="border border-primaryColor_lightBlue rounded-xl p-10 mt-[5rem] mx-[3rem] sm:mx-[10rem] lg:mx-[20rem]">
          <h1 className="text-[1rem] lg:text-[2rem] text-white">
            No blog post are available
          </h1>
        </div>

        <div className="mt-10 hidden flex-col text-left mx-[20rem]">
          <BlogCard
            blog_title="SLOVE EPK"
            date="1 Feb, 2023"
            image={testimg}
            description="We're proud to offer a reliable and user-friendly interface for your electronic press kit (EPK) needs. Our platform is designed to adapt and evolve based on your actions, feedback from listeners, and your past and upcoming performances, ensuring that your EPK is always up-to-date and accurate."
          />
        </div>
      </div>
    </>
  );
}

export default BlogSection;

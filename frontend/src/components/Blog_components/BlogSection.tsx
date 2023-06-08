import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BlogCard from "./BlogCard";
import blogimg2 from "../../../assets/blog_imgs/blog_test_img.png";
import blogimg1 from "../../../assets/blog_imgs/blogPost_img.png";

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
            blog_title="SLOVE EPK"
            date="1 Feb, 2023"
            image={blogimg2}
            description="We're proud to offer a reliable and user-friendly interface for your electronic press kit (EPK) needs. Our platform is designed to adapt and evolve based on your actions, feedback from listeners, and your past and upcoming performances, ensuring that your EPK is always up-to-date and accurate."
          />
        </div>
      </div>
    </>
  );
}

export default BlogSection;

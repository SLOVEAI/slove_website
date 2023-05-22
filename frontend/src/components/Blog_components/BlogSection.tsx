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
      <div
        className="font-clashDisplay text-center py-[3rem]"
        data-aos="fade-left"
      >
        <h1 className="text-primaryColor_lightBlue text-[4rem]">Coming Soon</h1>
        <h1 className="text-[2rem] text-white">Blog page</h1>

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

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BlogCard from "./BlogCard";

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

        {/* <BlogCard /> */}
      </div>
    </>
  );
}

export default BlogSection;

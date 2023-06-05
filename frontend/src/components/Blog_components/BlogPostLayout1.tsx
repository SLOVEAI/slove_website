import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BlogPost from "./BlogPost";

function BlogPostLayout1() {
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
      <div className="text-white text-center font-manrope" data-aos="fade-left">
        <BlogPost />
      </div>
    </>
  );
}

export default BlogPostLayout1;

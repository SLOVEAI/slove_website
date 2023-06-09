import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import Button from "../Shared_components/Button";
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

  let navigate = useNavigate();
  const goToAllBlogs = () => {
    let path = `/blog`;
    navigate(path);
  };

  return (
    <>
      <div
        className="text-white flex flex-col my-0 md:my-10 gap-8 font-manrope"
        data-aos="fade-left"
      >
        <Button
          label="Back"
          onClick={goToAllBlogs}
          className="ml-[2rem] md:ml-[7rem] whitespace-nowrap self-start mt-2 py-1 mobile:py-2 px-6 mobile:px-10 text-[1rem] xl:text-[1vw] rounded-full bg-white text-black hover:bg-gray-300 transition ease-in-out"
        />
        <BlogPost />
      </div>
    </>
  );
}

export default BlogPostLayout1;

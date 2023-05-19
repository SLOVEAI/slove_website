import { useEffect } from "react";
import CollapseDiv from "../Shared_components/CollapseDiv";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlinePlus } from "react-icons/hi";

function FaqSection() {
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
        className="font-manrope text-white mt-10 gap-5 mobile:gap-10 flex flex-col items-center"
        data-aos="fade-left"
      >
        <h1 className="font-clashDisplay text-[3rem] mobile:text-[4rem]">
          Help & FAQ
        </h1>
        <span className="px-[2rem] sm:px-[10rem] lg:px-[20rem] xl:px-[30rem] mb-[2rem]">
          We put together the most common questions. If you can’t find your
          question here, please don’t be a stranger and contact us!
        </span>

        <div className="flex flex-col gap-5 w-3/4 mobile:w-1/2 lg:w-1/3">
          <CollapseDiv
            question="Can I return tickets?"
            icon={<HiOutlinePlus />}
            answer="Will add the answer soon"
          />
          <CollapseDiv
            question="Can I return tickets?"
            icon={<HiOutlinePlus />}
            answer="Will add the answer soon"
          />
          <CollapseDiv
            question="Can I return tickets?"
            icon={<HiOutlinePlus />}
            answer="Will add the answer soon"
          />
        </div>
      </div>
    </>
  );
}

export default FaqSection;

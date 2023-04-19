import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function HomeSection3() {
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
        className="font-manrope mt-[5rem] flex flex-col md:flex-row text-white justify-center items-center gap-5 md:gap-[6rem] py-[3rem] p-10 mx-[5rem] rounded-br-[6rem] 2xl:rounded-br-[12rem] rounded-bl-3xl rounded-tl-3xl rounded-tr-3xl bg-gradient-to-r from-secondaryColor_darkPurple to-primaryColor_turquoise"
        data-aos="fade-left"
      >
        <h3 className="font-clashDisplay text-[2rem]">Powered by AI</h3>
        <p className="font-bold px-0 mobile:px-6 md:px-0">
          we make the booking experience smooth as a charm through simply
          connecting the right people!
        </p>
      </div>
    </>
  );
}

export default HomeSection3;

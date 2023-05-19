import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactSection() {
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
        className="font-manrope text-white gap-5 mobile:gap-10 flex flex-col items-center"
        data-aos="fade-left"
      >
        <h1 className="font-clashDisplay text-[4rem]">Contact</h1>
        <span className="px-[2rem] sm:px-[10rem] lg:px-[20rem] xl:px-[30rem] mb-[2rem]">
          Please contact us through the form or mail us to contact@slove.live.
        </span>
        <form
          action="https://formsubmit.co/2031a6e59570361b610ba0001395ee70"
          className="flex flex-col gap-2"
          method="POST"
        >
          <label htmlFor="name">Name*</label>
          <div className="relative group mt-2">
            <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              className="relative border w-[20rem] sm:w-[25rem] px-4 py-2 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
              required
            />
          </div>

          <label htmlFor="email" className="mt-4">
            Email address*
          </label>
          <div className="relative group mt-2">
            <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="relative border w-[20rem] sm:w-[25rem] px-4 py-2 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
              required
            />
          </div>

          <label htmlFor="text" className="mt-4">
            Your question*
          </label>
          <div className="relative group mt-2">
            <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <textarea
              name="message"
              id="text"
              rows={7}
              cols={40}
              placeholder="Ask your question here"
              className="relative border w-[20rem] sm:w-[25rem] px-4 py-4 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
              required
            />
          </div>

          <input
            type="hidden"
            name="_next"
            value="https://www.slove.io/thanks"
          ></input>

          <input type="hidden" name="_captcha" value="false" />

          <button
            type="submit"
            className="mt-10 py-4 px-10 rounded-full bg-secondaryColor_lilac text-black hover:bg-secondaryColor_purple transition ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactSection;

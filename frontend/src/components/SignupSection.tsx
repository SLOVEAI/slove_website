import React from "react";
import { useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function SignupSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  let navigate = useNavigate();
  const goToHome = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <>
      <div
        className="flex flex-col text-white text-2xl m-auto w-full md:w-4/5 xl:w-1/2 py-[8rem] mobile:py-[5rem]"
        data-aos="fade-left"
      >
        <HiOutlineArrowLeft
          onClick={goToHome}
          className="cursor-pointer text-[3rem] ml-12 md:ml-0 mb-[2rem] hover:text-secondaryColor_purple transition ease-in-out"
        />
        <h1 className="self-center font-clashDisplay text-[4rem] text-primaryColor_lightBlue mt-[4rem] mobile:mt-0 mb-0 mobile:mb-[5rem]">
          Sign Up
        </h1>
        <form
          action="#"
          className="flex flex-col gap-2 mt-[4rem] mobile:mt-0 px-[5rem] sm:px-[10rem]"
        >
          <label htmlFor="email" className="ml-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Put your email"
            className="text-[1rem] text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="password" className="ml-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Put your password"
            className="text-[1rem] text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <span className="text-sm text-center text-gray-400 mt-5">
            In order to start using Slove, please first agree to our{" "}
            <a
              href={`/terms`}
              className="cursor-pointer underline hover:text-white transition ease-in-out"
            >
              Terms & Conditions.
            </a>
          </span>
          <div className="flex flex-row items-center justify-center gap-2 text-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              required
              className="w-4 h-4"
            />
            <label htmlFor="agree" className="text-sm">
              I agree to Slove’s Terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="text-[1rem] mt-10 py-2 rounded-full bg-primaryColor_turquoise text-white hover:bg-primaryColor_darkTurquoise transition ease-in-out"
          >
            Creat account
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupSection;

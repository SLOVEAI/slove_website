import { useEffect } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function LoginSection() {
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
        className="flex flex-col text-white text-2xl m-auto w-full md:w-4/5 xl:w-1/2 pt-[8rem]"
        data-aos="fade-left"
      >
        <HiOutlineArrowLeft
          onClick={goToHome}
          className="cursor-pointer text-[3rem] ml-12 md:ml-0 mb-[2rem] hover:text-secondaryColor_purple transition ease-in-out"
        />
        <h1 className="self-center font-clashDisplay text-[4rem] text-primaryColor_lightBlue m-0 mt-[4rem] mobile:mt-0 mobile:mb-[5rem]">
          Login
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

          <span
            onClick={() => alert("Not ready")}
            className="cursor-pointer text-sm text-gray-400 hover:text-white transition ease-in-out"
          >
            Forgot your password?
          </span>

          <button
            type="submit"
            className="text-[1rem] mt-10 py-2 rounded-full bg-primaryColor_turquoise text-white hover:bg-primaryColor_darkTurquoise transition ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginSection;

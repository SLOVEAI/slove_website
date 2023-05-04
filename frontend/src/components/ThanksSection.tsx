import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";

function ThanksSection() {
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
        className="flex flex-col text-white text-center text-2xl m-auto w-4/5 md:w-1/2 xl:w-2/5 py-[13rem] mobile:py-[10rem]"
        data-aos="fade-left"
      >
        <h1 className="font-clashDisplay text-[3rem] mb-10">Thank you!</h1>
        <p className="md:whitespace-nowrap">
          Your form has been submited successfully!
        </p>
        <p className="md:whitespace-nowrap">
          We will get back to you as soon as possible.
        </p>
        <Button
          label="Go to home"
          className="mt-10 py-4 rounded-full bg-secondaryColor_lilac text-black hover:bg-secondaryColor_purple transition ease-in-out"
          onClick={goToHome}
        />
      </div>
    </>
  );
}

export default ThanksSection;

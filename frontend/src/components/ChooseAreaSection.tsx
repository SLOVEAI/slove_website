import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import artistVector from "../assets/vector1.png";
import fanVector from "../assets/vector2.png";
import venueVector from "../assets/vector3.png";
import { HiOutlineArrowLeft } from "react-icons/hi";

function ChooseAreaSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  let navigate = useNavigate();
  const goBack = () => {
    let path = `/signup`;
    navigate(path);
  };

  const goToMusicianProfile = () => {
    let path = `/musicianProfile`;
    navigate(path);
  };

  const goToFanProfile = () => {
    let path = `/fanProfile`;
    navigate(path);
  };

  const goToVenueProfile = () => {
    let path = `/venueProfile`;
    navigate(path);
  };

  return (
    <>
      <div
        className="flex flex-col gap-[3rem] text-white font-manrope text-center text-2xl m-auto w-full md:w-4/5 xl:w-1/2 py-[8rem] mobile:py-[6rem]"
        data-aos="fade-right"
      >
        <HiOutlineArrowLeft
          onClick={goBack}
          className="cursor-pointer text-[3rem] ml-12 md:ml-0 hover:text-secondaryColor_purple transition ease-in-out"
        />
        <span className="text-neutralColor_grayDark">Step 1</span>
        <h1 className="font-clashDisplay text-[3.5rem] text-primaryColor_lightBlue">
          Choose your area
        </h1>
        <span className="text-md">
          Connect, promote, network with music lovers and get a gig at live
          performance venue today!
        </span>
        <div className="flex flex-col gap-5 px-[4rem] text-left">
          <div
            className="cursor-pointer flex flex-row items-end justify-between h-[9rem] px-5 bg-neutralColor_grayDarkest hover:bg-zinc-900 transition ease-in-out rounded-3xl overfow-hidden"
            onClick={goToMusicianProfile}
          >
            <h2 className="mb-8 ml-4">Artist</h2>
            <img src={artistVector} alt="vector1" className="mr-[3rem]" />
          </div>

          <div
            className="cursor-pointer flex flex-row items-end justify-between w-[39.5rem] py-5 bg-neutralColor_grayDarkest hover:bg-zinc-900 transition ease-in-out rounded-3xl overfow-hidden"
            onClick={goToFanProfile}
          >
            <h2 className="mb-3 ml-10">Fan</h2>
            <img src={fanVector} alt="vector2" />
          </div>

          <div
            className="cursor-pointer flex flex-row items-end justify-between h-[9rem] px-5 bg-neutralColor_grayDarkest hover:bg-zinc-900 transition ease-in-out rounded-3xl overfow-hidden"
            onClick={goToVenueProfile}
          >
            <h2 className="mb-8 ml-4">Venue</h2>
            <img src={venueVector} alt="vector3" className="mr-[5rem]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseAreaSection;

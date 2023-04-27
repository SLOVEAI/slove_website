import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineArrowLeft } from "react-icons/hi";

function MusicianProfileSection() {
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
    let path = `/chooseArea`;
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
        <span>Step 2</span>
        <h1 className="font-clashDisplay text-[3.5rem] text-primaryColor_lightBlue">
          Profile
        </h1>
        <form action="#" className="flex flex-col text-left gap-5">
          <div className="flex flex-col items-center">
            <input type="file" name="profileImage" id="profileImage" />
            <label htmlFor="profileImage">Choose profile image</label>
          </div>
          <label htmlFor="bandName">Band name</label>
          <input
            type="text"
            name="bandName"
            id="bandName"
            placeholder="Put your band name"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Put the city name"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            id="bio"
            placeholder="Put your bio"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="experience">How long have you been active?</label>
          <input
            type="number"
            name="experience"
            id="experience"
            placeholder="Number of active years"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="gigs">How many gigs did you have?</label>
          <input
            type="number"
            name="gigs"
            id="gigs"
            placeholder="Number of gigs"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />
        </form>
      </div>
    </>
  );
}

export default MusicianProfileSection;

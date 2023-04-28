import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiOutlineArrowLeft, HiOutlinePlus } from "react-icons/hi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

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

  // const [imageFile, setImageFile] = useState<File | null>(null);
  // const [imagePreview, setImagePreview] = useState<string | null>(null);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImageFile(file);
  //       setImagePreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <div
        className="flex flex-col gap-[3rem] text-white font-manrope text-center text-2xl m-auto w-full md:w-4/5 xl:w-1/2 py-[8rem] mobile:py-[6rem]"
        data-aos="fade-left"
      >
        <HiOutlineArrowLeft
          onClick={goBack}
          className="cursor-pointer text-[3rem] ml-12 md:ml-0 hover:text-secondaryColor_purple transition ease-in-out"
        />
        <span>Step 2</span>
        <h1 className="font-clashDisplay text-[3.5rem] text-primaryColor_lightBlue">
          Profile
        </h1>
        <form
          action="#"
          className="flex flex-col text-left gap-5 bg-[#121212] p-10 rounded-3xl"
        >
          <div className="flex flex-col items-center">
            {/* {imagePreview ? (
              <div className="rounded-full p-10 border border-white object-fill">
                <img
                  src={imagePreview}
                  alt="Image preview"
                  className="object-fill"
                />
              </div>
            ) : (
              <div className="rounded-full p-10 border border-white">img</div>
            )}
            <input type="file" onChange={handleImageChange} accept="image/*" /> */}
            <label htmlFor="profileImage">Choose profile image</label>
          </div>
          <h2 className="text-primaryColor_lightBlue">General Information</h2>
          <label htmlFor="bandName">Band name</label>
          <input
            type="text"
            name="bandName"
            id="bandName"
            placeholder="Put your band name"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="Country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Put the country name"
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
          <textarea
            name="message"
            id="text"
            rows={4}
            cols={40}
            placeholder="Ask your question here"
            className="text-white text-sm p-4 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <h2 className="text-primaryColor_lightBlue">Music career</h2>

          <Popup
            trigger={
              <div className="flex flex-row items-center justify-between rounded-lg p-4 bg-neutralColor_grayDarkest">
                <h1 className="text-[1.2rem]">Musician type</h1>
                <HiOutlinePlus className="cursor-pointer text-[2rem] ml-12 md:ml-0 hover:text-secondaryColor_purple transition ease-in-out" />
              </div>
            }
            position="right center"
            modal
            nested
          >
            <div>Will add the musician type later</div>
          </Popup>

          <Popup
            trigger={
              <div className="flex flex-row items-center justify-between rounded-lg p-4 bg-neutralColor_grayDarkest">
                <h1 className="text-[1.2rem]">Musician genre</h1>
                <HiOutlinePlus className="cursor-pointer text-[2rem] ml-12 md:ml-0 hover:text-secondaryColor_purple transition ease-in-out" />
              </div>
            }
            position="right center"
            modal
            nested
          >
            <div>Will add the musician genre later</div>
          </Popup>

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
          <label htmlFor="price">Average booking price?</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Ticket pricing"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <h2 className="text-primaryColor_lightBlue">
            Contact & Social media
          </h2>
          <label htmlFor="sns">Social media links</label>
          <input
            type="url"
            name="sns"
            id="sns"
            placeholder="Link 1"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />
          <input
            type="url"
            name="sns"
            id="sns"
            placeholder="Link 2"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="steamingLink">Steaming links</label>
          <input
            type="url"
            name="steamingLink"
            id="steamingLink"
            placeholder="Link 1"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />
          <input
            type="url"
            name="steamingLink"
            id="steamingLink"
            placeholder="Link 2"
            className="text-sm text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <button
            type="submit"
            className="mt-10 py-4 px-10 rounded-full bg-primaryColor_turquoise text-white hover:bg-primaryColor_darkTurquoise transition ease-in-out"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
}

export default MusicianProfileSection;

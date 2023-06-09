import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

enum FormType {
  FORM1 = "musicianForm",
  FORM2 = "venueForm",
  FORM3 = "fanForm",
}

const MusicianForm = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="musician_name" className="mt-4">
        Band/Solo name*
      </label>
      <div className="relative group mt-2">
        <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
        <input
          type="text"
          name="musician_name"
          id="musician_name"
          placeholder="Your Band/Solo name"
          className="relative border w-[20rem] sm:w-[25rem] px-4 py-2 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
          required
        />
      </div>
    </div>
  );
};

const VenueForm = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="venue_name" className="mt-4">
        Venue name*
      </label>
      <div className="relative group mt-2">
        <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
        <input
          type="text"
          name="venue_name"
          id="venue_name"
          placeholder="Your venue name"
          className="relative border w-[20rem] sm:w-[25rem] px-4 py-2 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
          required
        />
      </div>
    </div>
  );
};

const FanForm = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="fan_name" className="mt-4">
        Name*
      </label>
      <div className="relative group mt-2">
        <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
        <input
          type="text"
          name="fan_name"
          id="fan_name"
          placeholder="Your name"
          className="relative border w-[20rem] sm:w-[25rem] px-4 py-2 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
          required
        />
      </div>
    </div>
  );
};

function TestAppSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const [type, setType] = useState<FormType>(FormType.FORM1);

  const handleFormTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setType(event.target.value as FormType);
  };
  return (
    <>
      <div
        className="font-manrope text-white mt-10 gap-5 mobile:gap-10 flex flex-col items-center"
        data-aos="fade-left"
      >
        <h1 className="font-clashDisplay text-[4rem]">Join Us</h1>
        <span className="px-[2rem] sm:px-[10rem] lg:px-[20rem] xl:px-[30rem] mb-[2rem]">
          We're thrilled to have you on board for the beta testing phase of our
          platform. Rest assured; we'll send you an email with further
          instructions shortly.
        </span>
        <form
          action="https://formsubmit.co/2031a6e59570361b610ba0001395ee70"
          className="flex flex-col gap-2"
          method="POST"
        >
          <label htmlFor="userType">Select your user type*</label>
          <div className="relative group mt-2">
            <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
            <select
              name="userType"
              id="userType"
              onChange={handleFormTypeChange}
              className="relative border w-[20rem] sm:w-[25rem] px-4 py-2 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
            >
              <option value={FormType.FORM1}>Musician</option>
              <option value={FormType.FORM2}>Venue owner/manager</option>
              <option value={FormType.FORM3}>Fan</option>
            </select>
          </div>
          {type === FormType.FORM1 && <MusicianForm />}
          {type === FormType.FORM2 && <VenueForm />}
          {type === FormType.FORM3 && <FanForm />}

          <label htmlFor="email" className="mt-4">
            Email address*
          </label>
          <div className="relative group mt-2">
            <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
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
            Additional information
          </label>
          <div className="relative group mt-2">
            <div className="absolute -inset-1 w-[21rem] sm:w-[26rem] bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
            <textarea
              name="message"
              id="text"
              rows={7}
              cols={40}
              placeholder="Write important additional information"
              className="relative border w-[20rem] sm:w-[25rem] px-4 py-4 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
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

export default TestAppSection;

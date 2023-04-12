import React from "react";

function ContactSection() {
  return (
    <>
      <div className="font-manrope text-white gap-10 flex flex-col items-center">
        <h1 className="font-clashDisplay text-[4rem] text-primaryColor_lightBlue mb-[1rem]">
          Contact
        </h1>
        <span className="px-[30rem] mb-[2rem]">
          If you want to be one of our app testers or ask questions we are happy
          to answer them! Please contact us through the form or at
          contact@slove.live.
        </span>
        <form
          action="https://formsubmit.co/60cde7f61f3d8e8b9e071d8010a7e953"
          className="flex flex-col gap-2"
          method="POST"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Name"
            className="text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="text-white px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <label htmlFor="text">Your question</label>
          <textarea
            name="message"
            id="text"
            rows={4}
            cols={40}
            placeholder="Ask your question here"
            className="text-white p-4 rounded-lg bg-neutralColor_grayDarkest"
            required
          />

          <button
            type="submit"
            className="mt-10 py-4 px-10 rounded-full bg-primaryColor_turquoise text-white"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactSection;

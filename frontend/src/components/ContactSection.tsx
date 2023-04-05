import React from "react";
import Button from "./Button";

function ContactSection() {
  return (
    <>
      <div className="font-manrope text-white gap-10 flex flex-col items-center">
        <h1 className="font-clashDisplay text-[4rem] text-primaryColor_lightBlue mb-[1rem]">
          Contact
        </h1>
        <span className="px-[30rem] mb-[2rem]">
          Questions are a human thing and we are happy to answer them! Please
          contact us through the form or at contact@slove.live.
        </span>
        <form action="/" className="flex flex-col gap-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="Email"
            id="email"
            value="Email adress"
            className="text-neutralColor_grayDark px-4 py-2 rounded-lg bg-neutralColor_grayDarkest"
          />

          <label htmlFor="text">Your question</label>
          <textarea
            name="text"
            id="text"
            rows={4}
            cols={40}
            value="Ask your question here"
            className="text-neutralColor_grayDark p-4 rounded-lg bg-neutralColor_grayDarkest"
          />

          <Button
            label="Send"
            className="mt-10 py-4 px-10 rounded-full bg-primaryColor_turquoise text-white"
          />
        </form>
      </div>
    </>
  );
}

export default ContactSection;

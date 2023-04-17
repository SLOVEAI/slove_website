import React from "react";

function CookiesSection() {
  return (
    <>
      <div className="font-manrope flex flex-col items-center gap-10 text-white mt-5 mb-[5rem] mobile:mb-[10rem]">
        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h1 className="font-clashDisplay text-[2.8rem] mobile:text-[3.5rem] text-primaryColor_lightBlue mb-[4rem] self-center">
            Cookie Policy
          </h1>
          <p>
            This Cookie Policy explains how slove.ai ("we", "us", or "our") uses
            cookies and similar technologies to collect and store information
            about your use of our website. By using our website, you consent to
            our use of cookies and other tracking technologies as described in
            this policy.
          </p>
        </section>

        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h2 className="font-clashDisplay text-[2rem] mb-[4rem] self-center">
            What are Cookies?
          </h2>
          <p>
            Cookies are small data files that are placed on your device
            (computer, tablet, or mobile phone) when you visit a website.
            Cookies help websites remember your preferences and activities,
            allowing them to provide a more personalized experience for you.
            Cookies can also be used to track your usage of a website and gather
            information about your browsing habits.
          </p>
        </section>

        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h2 className="font-clashDisplay text-[2rem] mb-[4rem] self-center">
            What Cookies do we use?
          </h2>
          <span>We use the following types of cookies on our website:</span>
          <ul className="list-disc ml-8 flex flex-col gap-2">
            <li>
              Necessary Cookies: These cookies are essential for the operation
              of our website and enable you to navigate our site and use its
              features.
            </li>
            <li>
              Performance Cookies: These cookies allow us to measure and analyze
              how visitors use our website. They help us improve the
              functionality and performance of our site.
            </li>
            <li>
              Functional Cookies: These cookies allow our website to remember
              your preferences and provide enhanced features.
            </li>
            <li>
              Advertising Cookies: These cookies are used to deliver
              personalized ads to you based on your interests and browsing
              behavior.
            </li>
          </ul>
        </section>

        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h2 className="font-clashDisplay text-[2rem] mb-[4rem] self-center">
            Third-Party Cookies
          </h2>
          <p>
            We may also use third-party cookies on our website. These cookies
            are placed by third-party service providers to help us analyze
            website usage, deliver ads tailored to your interests, and provide
            social media features.
          </p>
        </section>
      </div>
    </>
  );
}

export default CookiesSection;

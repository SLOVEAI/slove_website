import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function PrivacySection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div
        className="font-manrope flex flex-col items-center gap-10 text-white mt-5 mb-[5rem] mobile:mb-[10rem]"
        data-aos="fade-left"
      >
        <section className="flex flex-col gap-2 px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h1 className="font-clashDisplay text-[2.8rem] mobile:text-[3.5rem] mb-[4rem] self-center">
            Privacy Policy
          </h1>
          <p>
            Slove.ai respects your privacy and is committed to protecting your
            personal data. This privacy statement will inform you about how we
            handle your personal information when you use our website.
            Collection and Use of Personal Information
          </p>
          <p>
            We may collect and process personal information that you provide to
            us when you use our website, such as your name, email address,
            postal address, phone number, and other contact details. We may use
            this information to:
          </p>
          <ul className="list-disc ml-8 flex flex-col gap-2">
            <li>
              Provide you with the products, services, or information that you
              request;
            </li>
            <li>Respond to your inquiries or comments;</li>
            <li>Analyze and improve our website and services;</li>
            <li>
              Communicate with you about our products, services, and promotions.
            </li>
          </ul>
          <p>
            We may also collect certain technical information when you use our
            website, such as your IP address, browser type, and operating
            system. This information is used to analyze how visitors use our
            website and to improve the user experience.
          </p>
        </section>

        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h2 className="font-clashDisplay text-[2rem] mb-[4rem] self-center">
            Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to collect
            information about your browsing behavior on our website. Cookies are
            small text files that are stored on your device when you visit our
            website. They enable us to remember your preferences and to
            personalize your experience on our website. You can control the use
            of cookies through your browser settings. Please note that disabling
            cookies may limit your access to certain features of our website.
          </p>
        </section>

        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h2 className="font-clashDisplay text-[2rem] mb-[4rem] self-center">
            Third-Party Websites and Services
          </h2>
          <p>
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices of these websites
            or services. We encourage you to read the privacy statements of
            these websites or services before providing any personal
            information.
          </p>
        </section>

        <section className="flex flex-col px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[15rem]">
          <h2 className="font-clashDisplay text-[2rem] mb-[4rem] self-center">
            Security
          </h2>
          <span>
            We take reasonable measures to protect your personal information
            from unauthorized access, disclosure, or use. However, no data
            transmission over the Internet or storage system can be guaranteed
            to be 100% secure.
          </span>
        </section>
      </div>
    </>
  );
}

export default PrivacySection;

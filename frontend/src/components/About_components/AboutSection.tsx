import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import sloveLocation from "../../../assets/about_imgs/location.png";
import sloveMap from "../../../assets/about_imgs/map.png";
import siva from "../../../assets/about_imgs/siva_2.png";
import text1 from "../../../assets/about_imgs/text1_img.svg";
import text2 from "../../../assets/about_imgs/text2_img.svg";
import text3 from "../../../assets/about_imgs/text3_img.svg";
import Button from "../Shared_components/Button";

function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  let navigate = useNavigate();
  const goToTestApp = () => {
    let path = `/testApp`;
    navigate(path);
  };

  return (
    <>
      <div
        className="font-manrope text-center text-white flex flex-col gap-[7rem] items-center py-[3rem]"
        data-aos="fade-left"
      >
        <h1 className="font-clashDisplay text-[3rem] text-white mb-[-3rem]">
          About
        </h1>
        {/* SECTION 1 */}
        <div className="relative group mt-2 w-3/4">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
          <div className="relative border gap-10 px-[3rem] md:px-[6rem] py-[4rem] border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start">
            <h2 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
              About Us
            </h2>
            <div className="flex flex-col-reverse lg:flex-row pr-0 xl:pr-[4rem] gap-10 lg:gap-[5rem] items-center text-justify">
              <p className="leading-7">
                At SLOVE, we're a tech company based in beautiful Umeå, Sweden.
                Our goal is to create an eco-system that connects independent
                musicians with the perfect venues and audiences for their live
                gigs. We're all about supporting local music scenes and helping
                grassroots artists grow their fanbase. Join us in making live
                gigs more accessible for all!
              </p>
              <img
                src={sloveLocation}
                alt="slove_location"
                className="hidden sm:block"
              />
              <img
                src={sloveMap}
                alt="slove_location"
                className="sm:hidden block"
              />
            </div>
          </div>
        </div>
        {/* SECTION 2 */}
        <div className="relative group mt-2 w-3/4">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
          <div className="relative border gap-10 px-[3rem] md:px-[6rem] py-[4rem] border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start">
            <h2 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
              About Siva
            </h2>
            <div className="flex flex-col-reverse lg:flex-row pr-0 xl:pr-[4rem] gap-10 lg:gap-[5rem] items-center text-justify">
              <p className="leading-7">
                Hey there! It's great to virtually meet you. I'm Siva Kumar
                Mokkapati, a passionate AI expert, former Senior Leader at JP
                Morgan Chase, trance DJ, and entrepreneur who calls Umeå, Sweden
                “home”. <br />
                As someone who's passionate about music and has extensive
                corporate and international AI experience, I'm here to support
                musicians and help them reach new heights. I've heard your
                concerns about the challenges of getting gigs, finding new
                listeners, managing administrative tasks, and networking within
                the industry. <br />
                That's why I've dedicated myself to this project and I'm excited
                to work with grassroots and independent musicians to create a
                technology platform that complements your needs. I've identified
                a unique way to apply deep tech to solve many of these issues,
                and I can't wait to see the impact it has on the music scene.
              </p>
              <img
                src={siva}
                alt="siva_picture"
                className="rounded-[3rem] w-[22rem]"
              />
            </div>
          </div>
        </div>
        {/* SECTION 3 */}
        <div className="relative group mt-2 w-3/4">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
          <div className="relative border gap-10 px-[3rem] md:px-[6rem] py-[4rem] border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start">
            <h2 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
              We support
            </h2>
            <p className="leading-7 text-justify">
              Check out our platform to see how we connect the right musicians
              with the right venues and audience. We're here to make it easier
              for everyone to enjoy live music!
            </p>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5rem] items-start text-center">
              <div className="flex-1 flex flex-col items-center gap-7">
                <img src={text1} alt="musician" />
                <p className="leading-7 text-justify">
                  As a musician, we understand that you might not have enough
                  time or experience to network and find the right venues to
                  perform at. We know that you just want to share your music
                  with the world!
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-7">
                <img src={text2} alt="venue" />
                <p className="leading-7 text-justify">
                  As for venues, we know that it can be tough to find the right
                  local or grassroots bands and musicians with the perfect vibe
                  for your place and playing at the right time.
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-7">
                <img src={text3} alt="fan" />
                <p className="leading-7 text-justify">
                  And for the audience, we get it - discovering a spot that
                  plays great music or finding a new musician to love can feel
                  like finding a hidden treasure. Unfortunately, it doesn't
                  happen often enough. That's why we're here to change that and
                  help you discover new music gems more frequently!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 4 */}
        <div className="relative group mt-2 w-3/4">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
          <div className="relative border gap-10 px-[3rem] md:px-[6rem] py-[4rem] border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start">
            <h2 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
              Our Approach
            </h2>
            <p className="leading-7 text-justify">
              At SLOVE, we're passionate about connecting musicians with the
              right venues and audiences. Our smart algorithm (which, yes, we're
              pretty proud of) takes into account the preferences of the three
              major players in the live music industry to make sure that
              everyone benefits. That means more gigs for you, with less hassle
              and stress. <br />
              Thanks to our deep tech (AI) expertise, we can make gig booking
              98% faster and easier. That means you can spend more time doing
              what you love – making music – and less time on admin work. <br />
              We believe in transparency at SLOVE, and we want you to know that
              our platform is designed with you in mind. If you have any
              questions or concerns, don't hesitate to get in touch with us. You
              can find our FAQ and contact form linked below. <br />
              For more information on how our platform works for musicians,
              venues, and audiences, check out our 'Features' page. It's full of
              useful info that we hope you'll find helpful!
            </p>
          </div>
        </div>
        {/* SECTION 5 */}
        <div className="relative group mt-2 w-3/4">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
          <div className="relative border gap-10 px-[3rem] md:px-[6rem] py-[4rem] border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top justify-start">
            <h2 className="font-clashDisplay text-[2rem] sm:text-[3rem] text-white">
              How to Join
            </h2>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-[5rem] items-start text-center">
              <div className="flex-1 flex flex-col items-center gap-7">
                <p className="leading-7 text-justify">
                  We're thrilled to have you onboard for the beta testing phase
                  of our platform! We are currently offering exclusive access to
                  our app through an invite only option. If you are eager to
                  join and try the app, simply sign up below for access. From
                  there, we'll send you an email shortly with further
                  instructions.
                </p>
                <Button
                  label="Sign up"
                  onClick={goToTestApp}
                  className="mr-0 xl:mr-[5rem] py-3 px-7 w-[12rem] mobile:w-[17rem] xl:w-[20rem] text-[1rem] xl:text-[1vw] whitespace-nowrap rounded-full bg-white text-black items-center hover:bg-gray-100 ease-in-out"
                />
              </div>
              <div className="flex-1 flex flex-col items-center gap-7 lg:gap-[5.2rem]">
                <p className="leading-7 text-justify">
                  If you want to stay up to date with what is happening at
                  SLOVE, please feel free to sign up for our newsletter! We
                  promise we won’t spam you and only inform you about relevant
                  things we think you shouldn’t miss.
                </p>
                <Button
                  label="Get our newsletter"
                  onClick={() => alert("Coming soon!")}
                  className="py-3 px-7 w-[12rem] mobile:w-[17rem] xl:w-[20rem] text-[1rem] xl:text-[1vw] whitespace-nowrap rounded-full bg-white text-black items-center hover:bg-gray-100 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;

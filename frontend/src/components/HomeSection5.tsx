import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let testimonialIndex = 0;

const testimonials = [
  {
    name: "Linda",
    type: "singer songwriter",
    text: "This is gonna help me fall asleep big time!",
  },
  {
    name: "Smith",
    type: "Fan",
    text: "This platform will make the local booking experience easier!",
  },
  {
    name: "Mary",
    type: "Venue owner",
    text: "This will help bring back the live music!",
  },
];

function HomeSection5() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
    const startSlider = () => {
      setInterval(() => {
        handleOnNextClick();
      }, 3000);
    };
    startSlider();
  }, []);

  const handleOnNextClick = () => {
    const sliderLength = testimonials.length;
    testimonialIndex = (sliderLength + testimonialIndex - 1) % sliderLength;
    setCurrentIndex(testimonialIndex);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTarget = (testimonialIndex: any) => {
    setCurrentIndex(testimonialIndex);
  };

  return (
    <>
      <div
        className="flex flex-col items-center py-10 font-clashDisplay my-[10rem] mx-[5rem] rounded-bl-[6rem] lg:rounded-bl-[12rem] rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-gradient-to-l from-secondaryColor_darkPurple to-primaryColor_turquoise"
        data-aos="fade-left"
      >
        <div className="flex flex-row gap-5 mb-[5rem] items-center">
          {testimonials.map((testimonial, testimonialIndex) => (
            <div
              key={testimonialIndex}
              onClick={() => goToTarget(testimonialIndex)}
              className={
                testimonialIndex === currentIndex
                  ? "bg-secondaryColor_purple w-4 h-4 rounded-full duration-700 ease-in-out fade"
                  : "border bg-transparent border-white w-3 h-3 rounded-full"
              }
            >
              <button></button>
            </div>
          ))}
        </div>

        <div
          className="duration-700 ease-in-out text-[2rem] md:text-[3rem] text-white mb-8 px-10 md:px-[17rem] text-center"
          data-carousel-item
        >
          "{testimonials[currentIndex].text}"
        </div>

        <div
          className="duration-700 ease-in-out flex flex-col items-center mobile:flex-row gap-1 self-end text-[1rem] md:text-[2rem] ml-[2rem] mr-[2rem] mobile:mr-[4rem] text-secondaryColor_lilac"
          data-carousel-item
        >
          <span>{testimonials[currentIndex].name},</span>
          <span>{testimonials[currentIndex].type}</span>
        </div>
      </div>
    </>
  );
}

export default HomeSection5;

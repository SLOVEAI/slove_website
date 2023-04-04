import { useState } from "react";

function HomeSection4() {
  const testimonials = [
    {
      name: "Linda",
      type: "singer songwriter",
      text: "This is gonna help me fall asleep big time!",
    },
    {
      name: "Smith",
      type: "Fan",
      text: "This is gonna help me fall asleep big time!",
    },
    {
      name: "Mary",
      type: "Venue owner",
      text: "This is gonna help me fall asleep big time!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTarget = (testimonialIndex: any) => {
    setCurrentIndex(testimonialIndex);
  };

  return (
    <>
      <div className="flex flex-col items-center font-clashDisplay mt-[10rem]">
        <div className="flex flex-row gap-5 mb-[5rem] items-center">
          {testimonials.map((testimonial, testimonialIndex) => (
            <div
              key={testimonialIndex}
              onClick={() => goToTarget(testimonialIndex)}
              className={
                testimonialIndex === currentIndex
                  ? "bg-secondaryColor_purple w-4 h-4 rounded-full"
                  : "border bg-transparent border-white w-3 h-3 rounded-full"
              }
            >
              <button></button>
            </div>
          ))}
        </div>

        <div className="text-[4rem] text-white mb-8 px-[17rem] text-center">
          "{testimonials[currentIndex].text}"
        </div>

        <div className="flex flex-row gap-1 self-end text-[2rem] mr-[4rem] text-secondaryColor_lilac">
          <span>{testimonials[currentIndex].name},</span>
          <span>{testimonials[currentIndex].type}</span>
        </div>
      </div>
    </>
  );
}

export default HomeSection4;

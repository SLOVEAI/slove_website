import { useState, useCallback, useEffect } from "react";
import { Collapse } from "react-collapse";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  question: string;
  icon?: any;
  answer: string;
};

function CollapseDiv(props: Props) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      debounceDelay: 50,
      mirror: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const accessibilityIds = {
    button: "accessible-marker",
  };

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );

  return (
    <div className="">
      <div
        aria-controls={accessibilityIds.button}
        aria-expanded={isButtonCollapseOpen}
        onClick={onClick}
        className="flex flex-row items-center justify-between rounded-lg p-4 border border-secondaryColor_lilac"
      >
        <h4>{props.question}</h4>
        <span className="cursor-pointer hover:text-secondaryColor_purple transition ease-in-out">
          {props.icon}
        </span>
      </div>

      <Collapse
        isOpened={isButtonCollapseOpen}
        className="transition ease-in-out"
      >
        <div className="relative group mt-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-lg blur opacity-25"></div>
          <div
            id={accessibilityIds.button}
            className="relative border px-4 py-5 border-secondaryColor_purple bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start"
          >
            {props.answer}
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseDiv;

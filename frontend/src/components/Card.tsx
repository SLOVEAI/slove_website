import React from "react";

type Props = {
  label: string;
  icon?: any;
};

function Card(props: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-[#1A1A1A] ring-1 ring-gray-900/5 rounded-3xl leading-none flex items-top justify-start space-x-6">
          <div className="space-y-2 flex flex-col items-center py-5 gap-5">
            <img src={props.icon} alt="test" />
            <p className="text-white">{props.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";

type Props = {
  blog_title: string;
  image: string;
  description: string;
  date: string;
};

function BlogCard(props: Props) {
  return (
    <>
      <div className="mx-auto">
        <div className="relative group text-white">
          <div className="absolute -inset-1 bg-gradient-to-r from-secondaryColor_lilac to-secondaryColor_purple rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div
            className="bg-cover bg-center bg-no-repeat relative px-7 py-6 ring-1 ring-gray-900/5 rounded-3xl leading-none flex items-top justify-start space-x-6"
            style={{ backgroundImage: `url(${props.image})` }}
          >
            <div className="whitespace-wrap font-manrope space-y-2 grid grid-cols-2 items-start py-5 gap-5">
              <div className="col-span-1 flex flex-col ml-10 gap-6">
                <div className="flex flex-row justify-between">
                  <h1 className="font-bold">{props.blog_title}</h1>
                  <span>{props.date}</span>
                </div>
                <p>{props.description}</p>
                <div className="flex flex-row gap-2 self-end">
                  <AiOutlineHeart />
                  <p>127</p>
                  <GoComment />
                  <p>27</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;

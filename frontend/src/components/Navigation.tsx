import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Features",
    to: "/features",
  },
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Blog",
    to: "/blog",
  },
  {
    title: "Events",
    to: "/events",
  },
];

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  return (
    <>
      <nav className="py-12 px-10">
        <div className="flex flex-row justify-between items-start lg:items-center">
          <div>
            <svg
              width="151"
              height="39"
              viewBox="0 0 151 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.1448 29.0018C68.5142 29.0018 70.9943 26.1087 70.9943 22.8469C70.9943 20.4076 69.7542 18.0251 65.1322 17.3444L59.2137 16.4651C58.1991 16.3233 57.8609 16.0396 57.8609 15.444C57.8609 14.6215 58.4528 14.2527 61.1584 14.2527C64.7094 14.2527 65.3013 14.7065 65.3013 16.068V16.4935H70.5997V16.3233C70.5997 12.0687 67.725 9.43091 61.722 9.43091C54.9017 9.43091 52.5625 12.6076 52.5625 15.6425C52.5625 18.7058 54.338 20.6062 57.8609 21.0884L63.7794 21.8825C65.3295 22.0811 65.6958 22.3647 65.6958 23.0455C65.6958 23.8964 65.3576 24.1516 62.1448 24.1516C58.5937 24.1516 58.1428 23.8113 58.1428 22.5349V21.9393H52.8443V22.1095C52.8443 26.9313 56.3672 29.0018 62.1448 29.0018Z"
                fill="white"
              />
              <path
                d="M88.4564 28.7182V23.9247H77.5495V9.71454H72.2511V28.7182H88.4564Z"
                fill="white"
              />
              <path
                d="M100.04 29.0018C106.775 29.0018 110.608 25.1444 110.608 19.2164C110.608 13.2884 106.775 9.43091 100.04 9.43091C93.473 9.43091 89.5837 13.2884 89.5837 19.2164C89.5837 25.1444 93.473 29.0018 100.04 29.0018ZM100.04 23.8964C96.2067 23.8964 95.2203 22.9887 95.2203 19.2164C95.2203 15.444 96.2067 14.5364 100.04 14.5364C103.873 14.5364 104.972 15.444 104.972 19.2164C104.972 22.9887 103.873 23.8964 100.04 23.8964Z"
                fill="white"
              />
              <path
                d="M126.085 28.7182L133.666 9.71454H127.297L122.534 23.3291H122.167L117.291 9.71454H110.894L118.475 28.7182H126.085Z"
                fill="white"
              />
              <path
                d="M151.001 28.7182V23.9247H139.53V21.5422H150.578V16.7771H139.53V14.508H151.001V9.71454H134.232V28.7182H151.001Z"
                fill="white"
              />
              <path
                d="M4.57976 28.0091C2.05043 28.0091 -6.53531e-08 25.9455 -1.4597e-07 23.4L-3.92997e-07 15.6C-4.73614e-07 13.0545 2.05043 10.9909 4.57976 10.9909C7.10909 10.9909 9.15952 13.0545 9.15952 15.6L9.15952 23.4C9.15952 25.9455 7.10909 28.0091 4.57976 28.0091Z"
                fill="white"
              />
              <path
                d="M33.1149 32.9727C30.5856 32.9727 28.5352 30.9092 28.5352 28.3636L28.5352 10.6364C28.5352 8.09082 30.5856 6.02726 33.1149 6.02726C35.6442 6.02726 37.6947 8.09082 37.6947 10.6364L37.6947 28.3636C37.6947 30.9092 35.6443 32.9727 33.1149 32.9727Z"
                fill="white"
              />
              <path
                d="M18.6716 39C16.1422 39 14.0918 36.9364 14.0918 34.3909L14.0918 4.60909C14.0918 2.06356 16.1422 -1.22703e-07 18.6716 -2.74064e-07C21.2009 -4.25426e-07 23.2513 2.06356 23.2513 4.60909L23.2513 34.3909C23.2513 36.9364 21.2009 39 18.6716 39Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="flex flex-col items-end gap-5">
            <div
              className="block lg:hidden"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <FiMenu className="text-white text-[2rem] mobile:text-[2.5rem]" />
            </div>

            <div
              className={
                isNavExpanded
                  ? "hidden lg:flex"
                  : "flex z-40 fixed right-0 top-0 h-screen"
              }
            >
              <ul className="flex flex-col lg:flex-row gap-12 text-right p-[4rem] bg-black lg:bg-transparent lg:p-0 items-end lg:items-center">
                <div
                  className="block self-start lg:hidden"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  <MdClose className="text-white text-2xl" />
                </div>
                <li className="flex flex-col lg:flex-row gap-12 text-secondaryColor_lilac text-manrope">
                  {navItems.map((item, i) => {
                    return (
                      <Link to={item.to} key={i}>
                        <h3 className="text-xl font-clashDisplay">
                          {item.title}
                        </h3>
                      </Link>
                    );
                  })}
                </li>

                <div className="flex flex-row gap-5">
                  <li>
                    <Button
                      label="Login"
                      onClick={() => alert("Not Available Now")}
                      className="py-1 px-4 rounded-xl bg-transparent border border-secondaryColor_lilac text-white"
                    />
                  </li>
                  <li>
                    <Button
                      label="Signin"
                      onClick={() => alert("Not Available Now")}
                      className="py-1 px-4 rounded-xl bg-secondaryColor_lilac"
                    />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

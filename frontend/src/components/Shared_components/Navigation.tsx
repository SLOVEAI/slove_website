import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../constants";

import logo from "../../../assets/shared_components_imgs/Slove_logo.svg";

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

  let navigate = useNavigate();
  const goToHome = () => {
    let path = `/`;
    navigate(path);
  };

  const goToLogin = () => {
    let path = `/login`;
    navigate(path);
  };

  const goToSignup = () => {
    let path = `/signup`;
    navigate(path);
  };

  const goToTestApp = () => {
    let path = `/testApp`;
    navigate(path);
  };

  const handleButtonClick = async () => {
    await axios
      .get(`${BACKEND_URL}`)
      .then((response) => {
        // Handle the successful response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.log(error);
      });

    // const testdata = {
    //   name: "test this app !!!",
    // };
    // try {
    //   const response = await axios.post(`${BACKEND_URL}/`, testdata);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <nav className="py-12 px-10">
        <div className="flex flex-row justify-between items-start lg:items-center">
          <button onClick={goToHome}>
            <img src={logo} alt="SLOVE_logo" />
          </button>

          <div className="flex flex-col items-end gap-5">
            <div
              className="block lg:hidden"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              <FiMenu className="cursor-pointer text-white text-[2rem] mobile:text-[2.5rem] hover:text-secondaryColor_purple transition ease-in-out" />
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
                  <MdClose className="cursor-pointer text-white text-2xl hover:text-secondaryColor_purple transition ease-in-out" />
                </div>
                <div className="flex flex-col lg:flex-row gap-12 text-secondaryColor_lilac text-manrope">
                  {navItems.map((item, i) => {
                    return (
                      <Link to={item.to} key={i}>
                        <li className="text-xl font-clashDisplay hover:text-white transition ease-in-out">
                          {item.title}
                        </li>
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-row gap-5">
                  <li>
                    <Button
                      label="Join Us"
                      onClick={goToTestApp}
                      className="py-1 px-4 rounded-xl bg-secondaryColor_lilac hover:bg-secondaryColor_lightLilac transition ease-in-out"
                    />
                  </li>
                  <li>
                    <button onClick={handleButtonClick}>text</button>
                  </li>
                  <li className="hidden">
                    <Button
                      label="Login"
                      onClick={goToLogin}
                      className="py-1 px-4 rounded-xl bg-transparent border border-secondaryColor_lilac text-white hover:border-white transition ease-in-out"
                    />
                  </li>
                  <li className="hidden">
                    <Button
                      label="Sign up"
                      onClick={goToSignup}
                      className="py-1 px-4 rounded-xl bg-secondaryColor_lilac hover:bg-secondaryColor_lightLilac transition ease-in-out"
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

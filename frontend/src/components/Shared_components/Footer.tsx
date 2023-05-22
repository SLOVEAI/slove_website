import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/shared_components_imgs/Slove_logo.svg";

const generalFooterItems = [
  {
    title: "Help & FAQ",
    to: "/faq",
  },
  {
    title: "Contact",
    to: "/contact",
  },
  {
    title: "Career",
    to: "/career",
  },
];

const legalFooterItems = [
  {
    title: "Terms & Conditions",
    to: "/terms",
  },
  {
    title: "Cookie Policy",
    to: "/cookies",
  },
  {
    title: "Privacy Policy",
    to: "/privacy",
  },
];

function Footer() {
  return (
    <>
      <footer className="py-[5rem] mt-[5rem] md:mt-0 mb-[3rem] px-[7rem] flex flex-col gap-[4rem] md:gap-0 md:flex-row justify-center sm:justify-between items-center">
        <div>
          <img src={logo} alt="SLOVE_logo" />
        </div>

        <div className="flex flex-row text-center sm:text-left flex-wrap gap-12 items-center font-manrope text-white">
          <section>
            <ul>
              <li className="font-bold pb-6">General</li>
              <li className="mb-2">
                {generalFooterItems.map((item, i) => {
                  return (
                    <Link to={item.to} key={i}>
                      <h3 className="mb-2 hover:text-secondaryColor_purple transition ease-in-out">
                        {item.title}
                      </h3>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </section>
          <section>
            <ul>
              <li className="font-bold pb-8">Legal</li>
              <li className="mb-2">
                {legalFooterItems.map((item, i) => {
                  return (
                    <Link to={item.to} key={i}>
                      <h3 className="mb-2 hover:text-secondaryColor_purple transition ease-in-out">
                        {item.title}
                      </h3>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </section>
          <section>
            <ul className="flex flex-row gap-10 align-center sm:gap-0 sm:flex-col items-center">
              <li className="font-bold pb-6 whitespace-nowrap">Follow us</li>
              <a href="https://www.instagram.com/slove.io/">
                <li>
                  <AiFillInstagram className="text-3xl text-secondaryColor_lilac mb-2 hover:text-secondaryColor_purple transition ease-in-out" />
                </li>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091346455842">
                <li>
                  <FaFacebook className="text-2xl text-secondaryColor_lilac mb-2 hover:text-secondaryColor_purple transition ease-in-out" />
                </li>
              </a>
              <a href="https://www.linkedin.com/company/sloveai/">
                <li>
                  <FaLinkedinIn className="text-3xl text-secondaryColor_lilac mb-2 hover:text-secondaryColor_purple transition ease-in-out" />
                </li>
              </a>
            </ul>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;

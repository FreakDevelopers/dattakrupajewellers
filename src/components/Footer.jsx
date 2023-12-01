import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "/",
          name: "Partners",
        },
        {
          href: "/",
          name: "Blog",
        },
        {
          href: "/",
          name: "Team",
        },
        {
          href: "/",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "/",
          name: "Contact",
        },
        {
          href: "/",
          name: "Support",
        },
        {
          href: "/",
          name: "Docs",
        },
        {
          href: "/",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "/",
          name: "Terms",
        },
        {
          href: "/",
          name: "License",
        },
        {
          href: "/",
          name: "Privacy",
        },
        {
          href: "/",
          name: "About",
        },
      ],
    },
  ];
  return (
    <footer className="text-gray-300 bg-gray-800 px-4 py-8 mx-auto md:px-24">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-full md:max-w-md">
            <Link to={"/"} className="flex items-center">
              <img
                src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                className="h-12 w-12 inline"
              />
              <span className="text-gray-100 lg:text-lg ml-1 font-bold uppercase">
                Dattakrupa Jewellers
              </span>
            </Link>
            <p className="leading-relaxed px-2 mt-2 text-[15px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
        <div className="flex-1 ml-2 sm:ml-0 mt-10 items-center justify-evenly sm:flex md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 mb-4" key={idx}>
              <h4 className="text-gray-300 mr-2 font-medium text-lg">
                {item.label}
                <div className="w-8 h-[2px] bg-yellow-500"></div>
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <Link
                    to={el.href}
                    className="text-gray-400 hover:pl-1 transition-all ease-linear duration-300 hover:text-yellow-500"
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {year} Dattakrupa Jewellers. All rights reserved. Designed &
          Developed by{" "}
          <a
            href="https://freakdevelopers.com"
            target="_blank"
            className="ml-1 text-yellow-500 bg-gray-700 rounded px-1 py-[1px] hover:bg-gray-600"
          >
            FreakDevs
          </a>
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="/" target="_blank">
                <FaTwitter className="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>

            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="/" target="_blank">
                <FaFacebookF className="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>

            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="https://instagram.com/dattakrupa_jewellers_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                <FaInstagram className="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>

            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="https://api.whatsapp.com/send/?phone=%2B919130842940&text&type=phone_number&app_absent=0" target="_blank">
                <FaWhatsapp className="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

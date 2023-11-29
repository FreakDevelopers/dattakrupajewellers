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
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Docs",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About",
        },
      ],
    },
  ];
  return (
    <footer className="text-gray-300 bg-gray-800 px-4 py-5 mx-auto md:px-24">
      <div className="gap-6 justify-between md:flex">
        <div className="flex-1">
          <div className="max-w-xs">
            <Link to={"/"} className="flex items-center">
              <img
                src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                className="h-12 w-12 inline"
              />
              <span className="text-gray-100 text-xl ml-1 font-semibold">
                Dattakrupa Jewellers
              </span>
            </Link>
            <p className="leading-relaxed mt-2 text-[15px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-gray-300 font-medium text-lg">
                {item.label}
              </h4>
              <div className="w-8 h-1 bg-yellow-500"></div>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="text-gray-400 hover:pl-1 transition-all ease-linear duration-300 hover:text-yellow-500"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022-{year} Dattakrupa Jewellers All rights reserved. Made with
          ❤ by{" "}
          <a
            href="https://freakdevelopers.com"
            target="_blank"
            className="ml-1 text-gray-300 bg-gray-700 rounded px-1 py-[1px] hover:bg-gray-600"
          >
            FreakDevs
          </a>
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <FaTwitter class="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>

            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <FaFacebookF class="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>

            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <FaInstagram class="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>

            <li className="w-10 h-10 bg-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center">
              <a href="javascript:void()">
                <FaWhatsapp class="svg-icon w-6 h-6 text-gray-300 hover:text-gray-700" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
}

export default Footer;

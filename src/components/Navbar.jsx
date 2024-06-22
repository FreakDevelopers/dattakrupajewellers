import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Collections",
    link: "/collections",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <nav className="bg-gray-900 sticky top-0 z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center" onClick={() => setOpen(false)}>
            <Link to={"/"} className="flex items-center text-white">
              <img
                src={
                  "https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                }
                alt="DJ_LOGO"
                srcSet=""
                className="h-14 w-14"
              />
              <span className="ml-1 lg:text-lg font-bold uppercase">
                Dattakrupa Jewellers
              </span>
            </Link>
          </div>
          {/* navLinks */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  className={`${
                    pathname == link.link ? "border-b-2 border-b-red-500" : ""
                  } text-gray-300 hover:text-white px-3 py-1 text-md font-medium`}
                  key={index}
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          {/* Hamburger Button */}
          <div className="flex -mr-2 md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center mr-4 p-3 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {/* <hr /> */}
            {navLinks.map((link, index) => (
              <>
                <Link
                  key={index}
                  to={link.link}
                  onClick={handleMenu}
                  className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.title}
                  <div className="w-6 h-[2px] bg-yellow-500 mx-auto"></div>
                </Link>
              </>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;

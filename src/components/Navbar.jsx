import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Collections", link: "/collections" },
  { title: "About Us", link: "/about" },
  { title: "Contact", link: "/contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  // Listen for scroll to toggle transparent/solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center" onClick={() => setOpen(false)}>
            <Link to="/" className="flex items-center group">
              <img
                src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                alt="Dattakrupa Jewellers"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="ml-2">
                <span className="block text-gold font-serif text-lg font-semibold tracking-wide">
                  Dattakrupa
                </span>
                <span className="block text-white/70 font-sans text-[10px] uppercase tracking-[0.3em]">
                  Jewellers
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  className={`relative px-4 py-2 text-sm font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-300
                    ${
                      pathname === link.link
                        ? "text-gold"
                        : "text-white/80 hover:text-gold"
                    }`}
                  key={index}
                  to={link.link}
                >
                  {link.title}
                  {/* Gold underline indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold transition-all duration-300 ${
                      pathname === link.link ? "w-6" : "w-0"
                    }`}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 text-white/80 hover:text-gold transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-brand-black z-50 md:hidden
          transform transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <span className="text-gold font-serif text-lg font-semibold">Menu</span>
          <button
            onClick={handleMenu}
            className="text-white/70 hover:text-gold transition-colors duration-300"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 py-8 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              onClick={handleMenu}
              className={`block py-4 text-base font-sans uppercase tracking-[0.15em] border-b border-white/5
                transition-all duration-300
                ${
                  pathname === link.link
                    ? "text-gold pl-3 border-l-2 border-l-gold"
                    : "text-white/70 hover:text-gold hover:pl-3"
                }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Footer */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="w-12 h-[1px] bg-gold/30 mb-4" />
          <p className="text-white/30 text-xs font-sans uppercase tracking-[0.2em]">
            Crafted with Passion
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

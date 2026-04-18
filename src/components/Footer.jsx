import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const footerNavs = [
    {
      label: "Company",
      items: [
        { href: "/about", name: "About Us" },
        { href: "/collections", name: "Collections" },
        { href: "/contact", name: "Contact" },
        { href: "/", name: "Careers" },
      ],
    },
    {
      label: "Customer Care",
      items: [
        { href: "/contact", name: "Support" },
        { href: "/", name: "Sizing Guide" },
        { href: "/", name: "Shipping" },
        { href: "/", name: "Returns" },
      ],
    },
    {
      label: "Legal",
      items: [
        { href: "/", name: "Terms of Service" },
        { href: "/", name: "Privacy Policy" },
        { href: "/", name: "Cookie Policy" },
        { href: "/about", name: "About" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: FaTwitter,
      href: "/",
      label: "Twitter",
    },
    {
      icon: FaFacebookF,
      href: "/",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/dattakrupa_jewellers_?igshid=OGQ5ZDc2ODk2ZA==",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: "https://api.whatsapp.com/send/?phone=%2B919130842940&text&type=phone_number&app_absent=0",
      label: "WhatsApp",
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // UI-only newsletter — no backend
    setEmail("");
  };

  return (
    <footer className="bg-brand-black text-white">
      {/* Newsletter Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                Stay in the <span className="text-gold italic">Loop</span>
              </h3>
              <p className="font-sans text-sm text-white/40">
                Subscribe for exclusive offers and new collection updates.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 focus:border-gold
                  text-white font-sans text-sm px-5 py-3 outline-none transition-colors duration-300
                  placeholder:text-white/30"
              />
              <button
                type="submit"
                className="bg-gold text-brand-black px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider
                  hover:bg-gold-light transition-colors duration-300 flex items-center gap-2"
              >
                <FaPaperPlane className="w-3 h-3" />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center group mb-6">
              <img
                src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
                alt="Dattakrupa Jewellers"
              />
              <div className="ml-2">
                <span className="block text-gold font-serif text-lg font-semibold tracking-wide">
                  Dattakrupa
                </span>
                <span className="block text-white/50 font-sans text-[10px] uppercase tracking-[0.3em]">
                  Jewellers
                </span>
              </div>
            </Link>
            <p className="font-sans text-white/40 leading-relaxed text-sm max-w-sm mb-6">
              Crafting exquisite jewellery that celebrates life's precious moments.
              Every piece is a testament to our unwavering commitment to elegance,
              quality, and timeless design.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                    text-white/40 hover:text-gold hover:border-gold/50 transition-all duration-300
                    hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {footerNavs.map((item, idx) => (
            <div key={idx}>
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-6">
                {item.label}
              </h4>
              <ul className="space-y-3">
                {item.items.map((el, elIdx) => (
                  <li key={elIdx}>
                    <Link
                      to={el.href}
                      className="font-sans text-sm text-white/40 hover:text-gold hover:pl-1
                        transition-all duration-300 inline-block"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-white/30">
              &copy; {year} Dattakrupa Jewellers. All rights reserved. Designed &
              Developed by{" "}
              <a
                href="https://freakdevelopers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors duration-300"
              >
                FreakDevs
              </a>
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="font-sans text-xs text-white/30 hover:text-gold transition-colors duration-300">
                Privacy
              </Link>
              <Link to="/" className="font-sans text-xs text-white/30 hover:text-gold transition-colors duration-300">
                Terms
              </Link>
              <Link to="/" className="font-sans text-xs text-white/30 hover:text-gold transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

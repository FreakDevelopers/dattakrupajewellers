import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Reveal } from "../ui/Reveal";

const footerLinks = {
  collections: [
    { name: "Rings", to: "/collections" },
    { name: "Necklaces", to: "/collections" },
    { name: "Earrings", to: "/collections" },
    { name: "Bangles", to: "/collections" },
  ],
  company: [
    { name: "Our Story", to: "/about" },
    { name: "Craftsmanship", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Careers", to: "#" },
  ],
  support: [
    { name: "Sizing Guide", to: "#" },
    { name: "Care Instructions", to: "#" },
    { name: "Shipping", to: "#" },
    { name: "Returns", to: "#" },
  ],
};

const socials = [
  { icon: FaInstagram, href: "https://instagram.com/dattakrupa_jewellers_", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=%2B919130842940", label: "WhatsApp" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Top Gold Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-28 grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Reveal>
              <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                <img
                  src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                  alt="Dattakrupa"
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-display text-xl font-semibold tracking-[0.15em] text-gold">
                    DATTAKRUPA
                  </span>
                  <span className="font-body text-[8px] tracking-[0.45em] uppercase text-white/30 -mt-0.5">
                    Jewellers
                  </span>
                </div>
              </Link>
              <p className="font-body text-sm text-white/40 leading-relaxed max-w-sm mb-8">
                Crafting exquisite jewellery that celebrates life's precious moments.
                Every piece is a testament to our unwavering commitment to elegance,
                quality, and timeless design since 1990.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-gold hover:border-gold hover:text-dark transition-all duration-400"
                  >
                    <s.icon size={14} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <div key={title} className="col-span-1 md:col-span-2 lg:col-span-2">
              <Reveal delay={0.1 * (idx + 1)}>
                <h4 className="section-label mb-6">{title.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.to}
                        className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] tracking-wider text-white/25">
            &copy; {new Date().getFullYear()} Dattakrupa Jewellers. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="font-body text-[11px] tracking-wider text-white/25 hover:text-gold transition-colors">Privacy</Link>
            <Link to="#" className="font-body text-[11px] tracking-wider text-white/25 hover:text-gold transition-colors">Terms</Link>
            <span className="font-body text-[11px] tracking-wider text-white/25">
              Crafted by{" "}
              <a href="https://freakdevelopers.com" target="_blank" rel="noreferrer" className="text-gold/50 hover:text-gold transition-colors">
                FreakDevs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

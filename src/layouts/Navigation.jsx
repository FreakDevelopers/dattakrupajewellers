import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Our Story", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-luxury",
          scrolled
            ? "bg-dark/95 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(212,175,55,0.1)]"
            : "bg-transparent py-6 lg:py-8"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-[110] group flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
              alt="Dattakrupa"
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl lg:text-2xl font-semibold tracking-[0.15em] text-gold transition-all">
                DATTAKRUPA
              </span>
              <span className="font-body text-[8px] tracking-[0.45em] uppercase text-white/40 -mt-0.5">
                Jewellers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 py-2",
                  pathname === link.path
                    ? "text-gold"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-[6px] group"
            aria-label="Toggle menu"
          >
            <span className={cn(
              "w-6 h-px bg-white transition-all duration-500",
              mobileOpen && "rotate-45 translate-y-[7px]"
            )} />
            <span className={cn(
              "w-4 h-px bg-gold transition-all duration-300",
              mobileOpen ? "opacity-0 w-0" : "group-hover:w-6"
            )} />
            <span className={cn(
              "w-6 h-px bg-white transition-all duration-500",
              mobileOpen && "-rotate-45 -translate-y-[7px]"
            )} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[99] bg-dark flex flex-col items-center justify-center"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "font-display text-4xl sm:text-5xl transition-colors duration-300",
                      pathname === link.path
                        ? "text-gold"
                        : "text-white/50 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 flex flex-col items-center gap-3"
            >
              <span className="line-accent-long" />
              <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white/20">
                Since 1990
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

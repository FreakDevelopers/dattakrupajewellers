import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const overlay = heroRef.current.querySelector(".hero-overlay");
        if (overlay) {
          overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/dj/dj/jewellery/earring/e-3.jpg?updatedAt=1701258975020"
          alt="Luxury Jewellery"
          className="w-full h-full object-cover object-center scale-110"
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/80" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-[1px] h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Accent Label */}
        <div className="animate-fade-in mb-6">
          <span className="inline-block font-sans text-[11px] uppercase tracking-[0.4em] text-gold/80 border border-gold/20 px-6 py-2">
            Since Generations
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Elevate Your{" "}
          <span className="text-gold-gradient italic">Elegance</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-sans text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Discover exquisite jewellery crafted for moments that last a lifetime.
          Where timeless artistry meets modern sophistication.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Link to="/collections" className="luxury-btn">
            Explore Collection
          </Link>
          <Link to="/about" className="luxury-btn-outline">
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-sans">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/60 to-transparent animate-float" />
      </div>
    </section>
  );
}

export default HeroSection;

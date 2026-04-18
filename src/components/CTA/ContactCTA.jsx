import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

function ContactCTA() {
  return (
    <section className="relative py-20 md:py-24 bg-brand-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        {/* Diamond Decoration */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-[1px] bg-gold/40" />
          <div className="w-2 h-2 rotate-45 border border-gold/60" />
          <div className="w-12 h-[1px] bg-gold/40" />
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
          Let's Create Something{" "}
          <span className="text-gold-gradient italic">Beautiful</span>
        </h3>

        <p className="font-sans text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          At Dattakrupa Jewellers, we value your inquiries and are ready to
          assist you on your journey to find the perfect piece of jewellery.
          Whether you need help with sizing or want a custom design, our
          dedicated team is here for you.
        </p>

        <Link to="/contact" className="luxury-btn group">
          Contact Us
          <FaArrowCircleRight className="inline ml-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}

export default ContactCTA;

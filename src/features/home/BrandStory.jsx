import React from "react";
import { Reveal } from "../../ui/Reveal";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";

export default function BrandStory() {
  return (
    <section className="bg-dark text-white py-section relative overflow-hidden">
      {/* Gold ambient radiants */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] bg-gold/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                  alt="Craftsmanship"
                  className="w-full h-full object-contain bg-dark-50 p-12"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 lg:right-8 bg-gold text-dark p-6 lg:p-8 shadow-2xl">
                <span className="block font-display text-4xl lg:text-5xl font-semibold">30+</span>
                <span className="block font-body text-[10px] uppercase tracking-[0.2em] mt-1">Years of Excellence</span>
              </div>
              {/* Border frame */}
              <div className="absolute -inset-4 lg:-inset-6 border border-gold/10 pointer-events-none" />
            </div>
          </Reveal>

          {/* Text Side */}
          <div className="lg:pl-8">
            <Reveal delay={0.2}>
              <span className="section-label block mb-6">Our Heritage</span>
              <h2 className="font-display text-display-lg text-white mb-8">
                Three Decades of
                <br />
                <em className="gold-text font-light not-italic">Masterful Creation</em>
              </h2>
              <div className="line-accent mb-8" />
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-body text-white/50 leading-relaxed mb-6">
                Every piece from Dattakrupa tells a story of passion and heritage.
                For over thirty years, our master artisans have breathed life into
                precious metals and stones — creating not just jewellery, but
                timeless works of art.
              </p>
              <p className="font-body text-white/50 leading-relaxed mb-10">
                From the selection of the finest materials to the final polish,
                we pour our heart into every detail — because you deserve nothing
                less than extraordinary.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-white/10">
                {[
                  { num: "5000+", label: "Unique Designs" },
                  { num: "100%", label: "Handcrafted" },
                  { num: "10K+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-display text-2xl lg:text-3xl text-gold">{stat.num}</span>
                    <span className="block font-body text-[9px] uppercase tracking-[0.2em] text-white/40 mt-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.8}>
              <Link to="/about">
                <Button variant="outline" className="border-gold/40 text-gold hover:bg-gold hover:text-dark">
                  Discover Our Story
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

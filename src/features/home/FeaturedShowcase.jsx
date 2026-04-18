import React from "react";
import { Reveal } from "../../ui/Reveal";
import { Button } from "../../ui/Button";

export default function FeaturedShowcase() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-cream overflow-hidden">
          {/* Image Side */}
          <Reveal direction="left" className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src="https://ik.imagekit.io/dj/dj/jewellery/rings/r-35.jpg?updatedAt=1701258926911"
                alt="Royal Heritage Ring"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-luxury"
              />
            </div>
          </Reveal>

          {/* Details Side */}
          <div className="p-8 lg:p-16 xl:p-20 flex flex-col justify-center">
            <Reveal delay={0.2}>
              <span className="section-label block mb-4">Featured Piece</span>
              <h2 className="font-display text-display text-dark mb-4">
                The Royal Heritage
                <br />
                <em className="gold-text font-light not-italic">Collection</em>
              </h2>
              <div className="line-accent mb-8" />
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-body text-dark/50 leading-relaxed mb-8">
                A breathtaking convergence of rare artistry and meticulous design.
                Each piece in this collection represents the pinnacle of our high
                jewellery craft, requiring over 400 hours of skilled handwork.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "18K", label: "Pure Gold" },
                  { value: "VVS", label: "Diamond Grade" },
                  { value: "400h", label: "Crafting Time" },
                ].map((spec) => (
                  <div key={spec.label} className="text-center py-4 border border-gold/10">
                    <span className="block font-display text-xl lg:text-2xl text-gold">{spec.value}</span>
                    <span className="block font-body text-[8px] uppercase tracking-[0.2em] text-dark/40 mt-1">{spec.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <Button>Inquire Now</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerReveal, staggerChildVariant } from "../../ui/Reveal";
import { Link } from "react-router-dom";

const collections = [
  { name: "Rings", subtitle: "Symbols of Forever", img: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-98.jpg?updatedAt=1701258943841" },
  { name: "Necklaces", subtitle: "Grace Redefined", img: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-96.jpg?updatedAt=1701258943654" },
  { name: "Earrings", subtitle: "Radiant Beauty", img: "https://ik.imagekit.io/dj/dj/jewellery/earring/JE/je-3.jpg?updatedAt=1701258983769" },
  { name: "Bangles", subtitle: "Timeless Tradition", img: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-37.jpg?updatedAt=1701258927203" },
];

export default function FeaturedCollections() {
  return (
    <section className="py-section bg-ivory relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16 lg:mb-24">
            <span className="section-label block mb-4">Our Collections</span>
            <h2 className="font-display text-display-lg text-dark">
              Curated <em className="gold-text font-light not-italic">Elegance</em>
            </h2>
          </div>
        </Reveal>

        {/* Collection Grid */}
        <StaggerReveal stagger={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {collections.map((item) => (
            <motion.div key={item.name} variants={staggerChildVariant}>
              <Link to="/collections" className="group block relative overflow-hidden bg-cream">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Label - always visible, moves up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-700 ease-luxury group-hover:-translate-y-2">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-white mb-1 drop-shadow-lg">{item.name}</h3>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60">{item.subtitle}</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-dark text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      →
                    </span>
                  </div>
                </div>

                {/* Top-left border accent */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/0 group-hover:border-gold/60 transition-all duration-700 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

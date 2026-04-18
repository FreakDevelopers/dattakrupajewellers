import React from "react";
import { Link } from "react-router-dom";
import { Reveal, StaggerReveal, staggerChildVariant } from "../ui/Reveal";
import { products } from "../data/data";
import { motion } from "framer-motion";

export default function Categories() {
  return (
    <div className="bg-ivory">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/dj/dj/jewellery/rings/r-37.jpg?updatedAt=1701258927203"
            alt="Collections"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark" />
        </div>
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <span className="section-label block mb-4">The Vault</span>
            <h1 className="font-display text-hero text-white">
              Our <em className="gold-text font-light not-italic">Collections</em>
            </h1>
            <p className="font-body text-white/40 text-sm mt-4 max-w-md mx-auto">
              Explore the full spectrum of our artistry, from everyday elegance to statement masterpieces.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-section">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <StaggerReveal stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {products.map((product) => (
              <motion.div key={product.id} variants={staggerChildVariant}>
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-4">
                    <img
                      src={product.path}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="bg-dark/80 backdrop-blur-sm text-white font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2.5">
                        View Details
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-luxury origin-left" />
                  </div>
                  <span className="font-body text-[9px] uppercase tracking-[0.25em] text-gold block mb-1">{product.category}</span>
                  <h3 className="font-display text-lg text-dark group-hover:text-gold transition-colors duration-300 mb-1">{product.name}</h3>
                  <p className="font-body text-sm text-dark/50">₹{product.price.toLocaleString("en-IN")}</p>
                </Link>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, StaggerReveal, staggerChildVariant } from "../../ui/Reveal";
import { products } from "../../data/data";

export default function BestSellers() {
  return (
    <section className="py-section bg-cream relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-6">
          <Reveal>
            <div>
              <span className="section-label block mb-4">Best Sellers</span>
              <h2 className="font-display text-display-lg text-dark">
                Most <em className="gold-text font-light not-italic">Coveted</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase text-dark/60 hover:text-gold transition-colors duration-300"
            >
              View All
              <span className="w-8 h-px bg-gold group-hover:w-12 transition-all duration-500" />
            </Link>
          </Reveal>
        </div>

        {/* Product Grid */}
        <StaggerReveal stagger={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {products.map((product) => (
            <motion.div key={product.id} variants={staggerChildVariant}>
              <Link to={`/product/${product.id}`} className="group block">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-ivory mb-5">
                  <img
                    src={product.path}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-luxury group-hover:scale-105"
                  />
                  {/* Quick View overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="bg-dark/80 backdrop-blur-sm text-white font-body text-[10px] tracking-[0.2em] uppercase px-5 py-2.5">
                      Quick View
                    </span>
                  </div>
                  {/* Gold line bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-luxury origin-left" />
                </div>

                {/* Product Info */}
                <div>
                  <span className="font-body text-[9px] uppercase tracking-[0.25em] text-gold mb-1.5 block">
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg text-dark group-hover:text-gold transition-colors duration-300 mb-1">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-dark/50">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

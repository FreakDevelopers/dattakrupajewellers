import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../../ui/Button";

export default function HeroBanner() {
  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="https://ik.imagekit.io/dj/dj/jewellery/earring/e-3.jpg?updatedAt=1701258975020"
          alt="Luxury Jewellery"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Multi-layer overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/30 to-dark" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-gold/20 m-8 lg:m-12 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-gold/20 m-8 lg:m-12 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-12 h-px bg-gold/60" />
          <span className="section-label text-gold/80">Exclusive Collection 2024</span>
          <span className="w-12 h-px bg-gold/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-hero text-white mb-8"
        >
          Where Artistry
          <br />
          Meets <span className="gold-text-animated italic font-light">Eternity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-white/50 text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Discover handcrafted masterpieces that transcend time. Each jewel tells
          a story of passion, tradition, and extraordinary beauty.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/collections">
            <Button variant="primary" size="lg">Explore Collection</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white hover:text-dark hover:border-white">
              Our Heritage
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

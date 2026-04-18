import React from "react";
import { Reveal, StaggerReveal, staggerChildVariant } from "../../ui/Reveal";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const galleryImages = [
  { src: "https://ik.imagekit.io/dj/dj/jewellery/earring/JE/je-3.jpg?updatedAt=1701258983769", span: "col-span-1 row-span-1" },
  { src: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-37.jpg?updatedAt=1701258927203", span: "col-span-1 row-span-2" },
  { src: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-99.jpg?updatedAt=1701258943920", span: "col-span-1 row-span-1" },
  { src: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-61.jpg?updatedAt=1701258932588", span: "col-span-1 row-span-1" },
  { src: "https://ik.imagekit.io/dj/dj/jewellery/earring/SE/se-1.jpg?updatedAt=1701258976761", span: "col-span-1 row-span-1" },
  { src: "https://ik.imagekit.io/dj/dj/jewellery/rings/r-98.jpg?updatedAt=1701258943841", span: "col-span-1 row-span-1" },
];

export default function InstagramGallery() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Follow Our Journey</span>
            <h2 className="font-display text-display-lg text-dark mb-4">
              @dattakrupa_jewellers
            </h2>
            <a
              href="https://instagram.com/dattakrupa_jewellers_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.15em] uppercase text-gold hover:text-dark transition-colors"
            >
              <FaInstagram size={14} />
              Follow on Instagram
            </a>
          </div>
        </Reveal>

        <StaggerReveal stagger={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
          {galleryImages.map((img, i) => (
            <motion.a
              key={i}
              variants={staggerChildVariant}
              href="https://instagram.com/dattakrupa_jewellers_"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden bg-cream"
            >
              <img
                src={img.src}
                alt="Jewellery showcase"
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500 flex items-center justify-center">
                <FaInstagram
                  size={22}
                  className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500"
                />
              </div>
            </motion.a>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

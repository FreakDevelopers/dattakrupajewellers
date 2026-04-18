import React from "react";
import { FaInstagram } from "react-icons/fa";
import { products } from "../../data/data";

function GallerySection() {
  // Use first 6 product images for gallery
  const galleryImages = products.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-subtitle text-gold/70">Follow Our Journey</span>
          <h2 className="section-title text-white">
            @dattakrupa_jewellers
          </h2>
          <div className="gold-divider" />
          <p className="font-sans text-white/50 max-w-md mx-auto">
            Discover our latest creations and behind-the-scenes artistry
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 reveal">
          {galleryImages.map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com/dattakrupa_jewellers_?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden ${
                idx === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={item.path}
                alt={item.name}
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                  idx === 0 ? "h-full min-h-[200px] md:min-h-full" : "h-48 md:h-56"
                }`}
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-100 scale-75 text-center">
                  <FaInstagram className="w-8 h-8 text-gold mx-auto mb-2" />
                  <p className="text-white font-sans text-xs uppercase tracking-[0.2em]">
                    View on Instagram
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://instagram.com/dattakrupa_jewellers_?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-btn-outline"
          >
            <FaInstagram className="w-4 h-4 mr-3" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;

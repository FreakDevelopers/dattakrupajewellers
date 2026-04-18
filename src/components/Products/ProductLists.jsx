import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { products } from "../../data/data";

function ProductLists() {
  return (
    <section className="py-20 md:py-28 bg-champagne/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-subtitle text-gold">Curated For You</span>
          <h2 className="section-title text-brand-black">
            New <span className="text-gold-gradient italic">Arrivals</span>
          </h2>
          <div className="gold-divider" />
          <p className="font-sans text-gray-500 max-w-md mx-auto">
            Explore our latest collection of handcrafted jewellery designed to
            celebrate your unique style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group reveal"
            >
              <div className="relative bg-white rounded-sm overflow-hidden transition-all duration-500
                border border-transparent hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)]">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-50">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    src={product.path}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-500" />

                  {/* Wishlist Icon */}
                  <button
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm 
                      flex items-center justify-center opacity-0 group-hover:opacity-100 
                      translate-y-2 group-hover:translate-y-0 transition-all duration-300
                      hover:bg-gold hover:text-white text-gray-400"
                    onClick={(e) => e.preventDefault()}
                  >
                    <FaHeart className="w-3.5 h-3.5" />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 
                    translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="bg-brand-black/80 backdrop-blur-sm text-white font-sans text-[10px] uppercase tracking-[0.15em] px-3 py-1.5">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                    {product.category}
                  </h3>
                  <h2 className="font-serif text-lg text-brand-black group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h2>
                  <div className="flex items-center justify-between mt-3">
                    <p className="font-serif text-lg font-semibold text-gold">
                      ₹{product.price.toLocaleString()}
                    </p>
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-gray-400 group-hover:text-gold transition-colors duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductLists;

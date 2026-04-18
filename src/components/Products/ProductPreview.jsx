import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function ProductPreview() {
  return (
    <>
      {/* Page Hero Banner */}
      <section className="page-hero !py-14">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black" />
        <div className="relative z-10">
          <span className="section-subtitle text-gold/70">Product Details</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-white mt-2">
            Collection <span className="text-gold-gradient italic">Piece</span>
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-10 font-sans text-sm uppercase tracking-[0.15em]
              text-brand-black/60 hover:text-gold transition-colors duration-300 group"
          >
            <FaArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Product Image */}
            <div className="relative group reveal">
              <div className="overflow-hidden rounded-sm bg-champagne">
                <img
                  alt="Product-Preview"
                  className="w-full h-[400px] lg:h-[500px] object-cover object-center
                    transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://ik.imagekit.io/dj/dj/jewellery/rings/r-96.jpg?updatedAt=1701258943654"
                />
              </div>
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold pointer-events-none" />
            </div>

            {/* Product Details */}
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              {/* Category */}
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold">
                Women Ring
              </span>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl text-brand-black font-medium mt-2 mb-4">
                The Silver Ring
              </h1>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-gold"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-gold"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-2 font-sans text-sm text-gray-400">4 Reviews</span>
              </div>

              <div className="w-full h-[1px] bg-gray-200 mb-6" />

              {/* Description */}
              <p className="font-sans text-gray-500 leading-relaxed mb-8">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>

              <div className="w-full h-[1px] bg-gray-200 mb-8" />

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-gray-400">
                    Price
                  </span>
                  <p className="font-serif text-3xl font-semibold text-gold">
                    ₹58.00
                  </p>
                </div>
                <button className="luxury-btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPreview;

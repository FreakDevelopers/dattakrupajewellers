import React from "react";

const stats = [
  { number: "30+", label: "Years of Legacy" },
  { number: "5000+", label: "Unique Designs" },
  { number: "100%", label: "Handcrafted" },
  { number: "10K+", label: "Happy Customers" },
];

function CraftsmanshipSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="reveal relative">
            <div className="relative overflow-hidden">
              <img
                src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                alt="Craftsmanship"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-sm bg-champagne"
              />
              {/* Gold Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-brand-black text-white px-6 py-4 shadow-xl">
              <p className="text-gold font-serif text-2xl font-semibold">30+</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/60">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <span className="section-subtitle text-gold">Our Legacy</span>
            <h2 className="section-title text-brand-black mb-6">
              The Art of <br />
              <span className="text-gold-gradient italic">Craftsmanship</span>
            </h2>
            <div className="gold-divider-left" />
            <p className="font-sans text-gray-600 leading-relaxed mb-6">
              At Dattakrupa Jewellers, every piece tells a story. Our master artisans
              blend time-honoured techniques with contemporary design, creating
              jewellery that transcends generations. Each creation is a testament to
              our unwavering commitment to perfection.
            </p>
            <p className="font-sans text-gray-600 leading-relaxed mb-10">
              From the selection of the finest metals to the final polish, we pour
              our heart into every detail — because you deserve nothing less than
              extraordinary.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-gold">
                    {stat.number}
                  </p>
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CraftsmanshipSection;

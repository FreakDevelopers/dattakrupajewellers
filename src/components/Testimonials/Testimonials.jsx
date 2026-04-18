import React, { useEffect, useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin Escobar",
      title: "Loyal Customer",
      quote:
        "Exceptional craftsmanship and timeless designs! Dattakrupa Jewellers is my go-to for elegance.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela Stian",
      title: "Fashion Enthusiast",
      quote:
        "Dattakrupa Jewellers transforms moments into memories. Each piece tells a story of elegance and sophistication. I cherish every piece I own.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim Ahmed",
      title: "Collector",
      quote:
        "From classic to contemporary, Dattakrupa Jewellers has a piece for every occasion. I've never been disappointed with the stunning designs and impeccable quality.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prevTestimonal) =>
        prevTestimonal < testimonials.length - 1 ? prevTestimonal + 1 : 0
      );
    }, 4000);
    return () => clearInterval(intervalId);
  });

  return (
    <section className="py-20 md:py-28 bg-champagne relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 text-gold/10 font-serif text-[200px] leading-none select-none hidden lg:block">
        "
      </div>
      <div className="absolute bottom-12 right-12 text-gold/10 font-serif text-[200px] leading-none select-none rotate-180 hidden lg:block">
        "
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 reveal">
          <span className="section-subtitle text-gold">Testimonials</span>
          <h2 className="section-title text-brand-black">
            What Our Clients <span className="text-gold-gradient italic">Say</span>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Testimonial Card */}
        <div className="relative min-h-[300px] reveal">
          {testimonials.map((item, idx) =>
            currentTestimonial === idx ? (
              <div
                key={idx}
                className="text-center animate-fade-in"
              >
                <figure>
                  {/* Quote */}
                  <blockquote className="mb-10">
                    <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-black/80 italic leading-relaxed max-w-2xl mx-auto">
                      "{item.quote}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                      />
                      {/* Gold ring around avatar */}
                      <div className="absolute -inset-1 rounded-full border border-gold/20" />
                    </div>
                    <span className="font-serif text-lg text-brand-black font-medium">
                      {item.name}
                    </span>
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mt-1">
                      {item.title}
                    </span>
                  </div>
                </figure>
              </div>
            ) : null
          )}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`transition-all duration-500 rounded-full ${
                currentTestimonial === idx
                  ? "w-8 h-2 bg-gold"
                  : "w-2 h-2 bg-gold/30 hover:bg-gold/50"
              }`}
              onClick={() => setCurrentTestimonial(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

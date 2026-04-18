import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "../../ui/Reveal";

const reviews = [
  {
    name: "Priya S.",
    location: "Mumbai",
    text: "The craftsmanship is absolutely extraordinary. My engagement ring from Dattakrupa receives compliments everywhere I go. Truly a masterpiece.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    location: "Pune",
    text: "We chose Dattakrupa for our wedding jewellery and couldn't be happier. Their attention to detail and personal service made the experience unforgettable.",
    rating: 5,
  },
  {
    name: "Ananya P.",
    location: "Bangalore",
    text: "The necklace I received is beyond anything I imagined. Each stone is perfectly placed. You can feel the passion in every curve and facet.",
    rating: 5,
  },
];

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-section bg-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-[900px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <span className="section-label block mb-4">Testimonials</span>
          <h2 className="font-display text-display-lg text-white mb-16 lg:mb-20">
            Words of <em className="gold-text font-light not-italic">Trust</em>
          </h2>
        </Reveal>

        {/* Review Cards with Crossfade */}
        <div className="min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(reviews[current].rating)].map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl italic text-white/80 leading-relaxed mb-10 max-w-2xl">
                "{reviews[current].text}"
              </blockquote>

              {/* Author */}
              <div className="line-accent-long mb-6" />
              <span className="font-body text-xs tracking-[0.2em] uppercase text-white font-medium">
                {reviews[current].name}
              </span>
              <span className="font-body text-[10px] tracking-[0.15em] text-white/30 mt-1">
                {reviews[current].location}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-px transition-all duration-500 ${
                i === current ? "w-8 bg-gold" : "w-4 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

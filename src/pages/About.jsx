import React from "react";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-ivory">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/dj/dj/jewellery/earring/e-3.jpg?updatedAt=1701258975020"
            alt="Heritage"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark" />
        </div>
        <div className="relative z-10 text-center px-6">
          <Reveal>
            <span className="section-label block mb-4">About Us</span>
            <h1 className="font-display text-hero text-white mb-4">
              Our <em className="gold-text font-light not-italic">Story</em>
            </h1>
            <p className="font-body text-white/50 max-w-lg mx-auto">
              A legacy of elegance, precision, and timeless design since 1990.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-section">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal direction="left">
              <div className="relative">
                <img
                  src="https://ik.imagekit.io/dj/dj/logo/logo.png?updatedAt=1701258840163"
                  alt="Dattakrupa Jewellers"
                  className="w-full aspect-square object-contain bg-cream p-12"
                />
                <div className="absolute -inset-4 border border-gold/10 pointer-events-none" />
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.2}>
                <span className="section-label block mb-6">Who We Are</span>
                <h2 className="font-display text-display text-dark mb-8">
                  Elegance Meets
                  <br />
                  <em className="gold-text font-light not-italic">Craftsmanship</em>
                </h2>
                <div className="line-accent mb-8" />
              </Reveal>

              <Reveal delay={0.4}>
                <p className="font-body text-dark/60 leading-relaxed mb-6">
                  Dattakrupa Jewellers invites you to explore a world where
                  elegance meets craftsmanship. From captivating rings to
                  statement necklaces, our curated collections redefine
                  sophistication.
                </p>
                <p className="font-body text-dark/60 leading-relaxed mb-10">
                  Every piece is meticulously crafted to celebrate your unique
                  style. From the finest metals to the most brilliant stones,
                  nothing escapes our quest for perfection.
                </p>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="grid grid-cols-2 gap-4">
                  {["Bespoke Design", "Ethical Sourcing", "Hand Finished", "Lifetime Quality"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="text-gold text-sm">✦</span>
                      <span className="font-body text-sm text-dark/70">{f}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-section bg-dark">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-label block mb-4">Our Values</span>
              <h2 className="font-display text-display-lg text-white">
                What Defines <em className="gold-text font-light not-italic">Us</em>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: "Artistry", desc: "Every piece is a canvas where our master artisans paint with precious metals and stones, creating wearable art that transcends trends." },
              { title: "Integrity", desc: "We source only ethically mined materials and maintain transparent practices in every aspect of our craft." },
              { title: "Legacy", desc: "We create jewellery meant to be treasured for generations — pieces that carry memories, emotions, and stories forward." },
            ].map((val, i) => (
              <Reveal key={val.title} delay={i * 0.15}>
                <div className="text-center p-8 lg:p-12 border border-white/5 hover:border-gold/20 transition-colors duration-500">
                  <span className="font-display text-5xl text-gold/20 block mb-6">0{i + 1}</span>
                  <h3 className="font-display text-2xl text-white mb-4">{val.title}</h3>
                  <p className="font-body text-white/40 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-cream text-center">
        <Reveal>
          <h2 className="font-display text-display text-dark mb-8">
            Ready to Find Your <em className="gold-text font-light not-italic">Masterpiece</em>?
          </h2>
          <Link to="/contact">
            <Button size="lg">Get In Touch</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

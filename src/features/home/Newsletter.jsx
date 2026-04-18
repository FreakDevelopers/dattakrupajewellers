import React, { useState } from "react";
import { Reveal } from "../../ui/Reveal";
import { Button } from "../../ui/Button";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to the inner circle!");
      setEmail("");
    }
  };

  return (
    <section className="relative py-section overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/dj/dj/jewellery/rings/r-96.jpg?updatedAt=1701258943654"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <Reveal>
          <span className="section-label block mb-4">The Inner Circle</span>
          <h2 className="font-display text-display-lg text-white mb-6">
            Stay <em className="gold-text font-light not-italic">Inspired</em>
          </h2>
          <p className="font-body text-white/40 text-sm leading-relaxed mb-12">
            Subscribe to receive exclusive invitations, early access to new
            collections, and stories from our master craftsmen.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/5 border border-white/10 focus:border-gold text-white font-body text-sm px-6 py-4 outline-none transition-colors duration-300 placeholder:text-white/20"
            />
            <Button type="submit" variant="primary" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="font-body text-[10px] text-white/20 mt-4 tracking-wider">
            No spam, ever. Unsubscribe at any time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

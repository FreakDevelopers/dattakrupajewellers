import React from "react";
import { Link, useParams } from "react-router-dom";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { products } from "../data/data";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];

  return (
    <div className="bg-ivory pt-28 lg:pt-32 pb-section">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <Reveal>
          <div className="flex items-center gap-2 mb-12 font-body text-[10px] tracking-[0.15em] uppercase text-dark/40">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-dark/60">{product.name}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <Reveal direction="left">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden bg-cream group">
              <img
                src={product.path}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-luxury group-hover:scale-105"
              />
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/30 pointer-events-none" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-gold/30 pointer-events-none" />
            </div>
          </Reveal>

          {/* Details */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal delay={0.2}>
              <span className="section-label block mb-3">
                {product.category}
              </span>
              <h1 className="font-display text-4xl lg:text-5xl text-dark mb-4">
                {product.name}
              </h1>
              <p className="font-display text-2xl text-gold mb-8">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <div className="line-accent mb-8" />
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-body text-dark/50 text-sm leading-relaxed mb-8">
                A masterpiece of subtle elegance, meticulously crafted from premium
                materials by our master artisans. This piece captures light from
                every angle, embodying the perfect balance between contemporary
                design and timeless sophistication.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "Material", value: "18K Gold" },
                  { label: "Finish", value: "Hand Polished" },
                  { label: "Availability", value: "In Stock" },
                  { label: "SKU", value: `DK-${String(product.id).padStart(4, "0")}` },
                ].map((spec) => (
                  <div key={spec.label} className="py-3 border-b border-dark/5">
                    <span className="font-body text-[9px] uppercase tracking-[0.2em] text-dark/30 block mb-1">{spec.label}</span>
                    <span className="font-body text-sm text-dark">{spec.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button className="flex-1">Inquire Now</Button>
                <Button variant="outline" className="flex-1">Book Appointment</Button>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="space-y-4 border-t border-dark/5 pt-8">
                {["Complimentary Gift Packaging", "Lifetime Maintenance", "Certificate of Authenticity"].map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <span className="text-gold text-xs">✦</span>
                    <span className="font-body text-sm text-dark/50">{perk}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

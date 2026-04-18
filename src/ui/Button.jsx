import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function Button({
  children,
  variant = "primary",
  size = "default",
  className,
  disabled,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-body font-medium tracking-[0.15em] uppercase transition-all duration-500 ease-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 whitespace-nowrap cursor-pointer";

  const variants = {
    primary:
      "bg-gold text-dark hover:bg-gold-600 active:bg-gold-700 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30",
    secondary:
      "bg-dark text-cream border border-gold/30 hover:bg-gold hover:text-dark hover:border-gold",
    outline:
      "bg-transparent text-gold border border-gold/40 hover:bg-gold hover:text-dark",
    ghost:
      "bg-transparent text-white/70 hover:text-gold",
    white:
      "bg-white text-dark hover:bg-cream",
  };

  const sizes = {
    sm: "h-10 px-6 text-[10px]",
    default: "h-12 px-8 text-[11px]",
    lg: "h-14 px-10 text-xs",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, variants[variant], sizes[size], disabled && "opacity-40 cursor-not-allowed pointer-events-none", className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}

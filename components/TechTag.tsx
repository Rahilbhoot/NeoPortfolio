"use client";

import { motion } from "framer-motion";

interface TechTagProps {
  name: string;
  variant?: "default" | "yellow" | "green" | "purple";
  index?: number;
}

const variantStyles = {
  default: "bg-white",
  yellow: "bg-yellow",
  green: "bg-green",
  purple: "bg-purple text-white",
};

export default function TechTag({
  name,
  variant = "default",
  index = 0,
}: TechTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className={`inline-flex items-center gap-2 px-4 py-2 font-body font-bold text-sm uppercase tracking-wide
        border-[3px] border-black shadow-brutal-sm
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
        transition-all duration-150 cursor-default
        ${variantStyles[variant]}
      `}
    >
      {name}
    </motion.span>
  );
}

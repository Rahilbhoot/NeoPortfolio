"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  children: React.ReactNode;
  color?: "yellow" | "green" | "purple";
  rotation?: number;
  className?: string;
}

const colorStyles = {
  yellow: "bg-yellow text-black",
  green: "bg-green text-black",
  purple: "bg-purple text-white",
};

export default function Badge({
  children,
  color = "green",
  rotation = -3,
  className = "",
}: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
      animate={{ opacity: 1, rotate: rotation, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.5 }}
      whileHover={{ scale: 1.1, rotate: rotation + 5 }}
      className={`
        inline-block px-4 py-2 font-body font-bold text-sm uppercase tracking-wider
        border-[3px] border-black shadow-brutal-sm
        ${colorStyles[color]}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

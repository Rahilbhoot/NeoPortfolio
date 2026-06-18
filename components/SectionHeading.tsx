"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export default function SectionHeading({
  children,
  accent = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`mb-10 ${className}`}
    >
      <h2 className="font-headline text-4xl sm:text-5xl relative inline-block">
        {children}
        {accent && (
          <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-yellow" />
        )}
      </h2>
    </motion.div>
  );
}

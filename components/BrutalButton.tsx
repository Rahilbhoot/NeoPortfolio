"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BrutalButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "yellow" | "purple" | "green" | "white";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

const variantStyles = {
  yellow: "bg-yellow text-black",
  purple: "bg-purple text-white",
  green: "bg-green text-black",
  white: "bg-white text-black",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function BrutalButton({
  children,
  href,
  onClick,
  variant = "yellow",
  size = "md",
  external = false,
  className = "",
}: BrutalButtonProps) {
  const baseClasses = `
    inline-flex items-center gap-2 font-headline font-bold uppercase tracking-wide
    border-[3px] border-black shadow-brutal
    hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm
    active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
    transition-all duration-150 cursor-pointer
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileTap={{ scale: 0.97 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClasses}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}

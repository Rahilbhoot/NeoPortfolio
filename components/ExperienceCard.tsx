"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  type?: string;
  responsibilities: string[];
  index?: number;
}

export default function ExperienceCard({
  role,
  company,
  duration,
  type,
  responsibilities,
  index = 0,
}: ExperienceCardProps) {
  const typeColors: Record<string, string> = {
    Internship: "bg-yellow",
    Volunteer: "bg-green",
    Leadership: "bg-purple text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="border-[3px] border-black bg-white shadow-brutal p-6 relative"
    >
      {/* Timeline connector dot */}
      <div className="absolute -left-[14px] top-6 w-6 h-6 bg-yellow border-[3px] border-black rotate-45" />

      {/* Type badge */}
      {type && (
        <span
          className={`inline-block px-3 py-1 text-xs font-body font-bold uppercase tracking-wide border-[2px] border-black mb-3 rotate-[-2deg] ${
            typeColors[type] || "bg-offwhite"
          }`}
        >
          {type}
        </span>
      )}

      <h3 className="font-headline text-xl mb-1">{role}</h3>
      <p className="font-body font-bold text-black/80 mb-1">{company}</p>
      <p className="font-body text-sm text-black/50 mb-4 uppercase tracking-wide">
        {duration}
      </p>

      <ul className="space-y-2">
        {responsibilities.map((item, i) => (
          <li key={i} className="font-body text-black/70 flex items-start gap-2">
            <span className="inline-block w-2 h-2 bg-yellow border-[2px] border-black mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

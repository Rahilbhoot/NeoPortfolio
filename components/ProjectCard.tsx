"use client";

import { motion } from "framer-motion";
import BrutalButton from "./BrutalButton";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  index = 0,
}: ProjectCardProps) {
  // Generate project-specific SVG based on tags
  const getProjectSvg = () => {
    // Check for web technologies (HTML/CSS)
    if (tags.some(tag => ['HTML5', 'HTML', 'CSS3', 'CSS', 'Tailwind CSS'].includes(tag))) {
      return (
        <svg className="w-14 h-14" viewBox="0 0 100 100">
          {/* Laptop screen */}
          <rect x="15" y="20" width="70" height="60" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Screen content - brackets */}
          <text x="50" y="50" textAnchor="middle" fontSize="16" fontWeight="bold" stroke="currentColor" strokeWidth="2" fill="none">&lt;/&gt;</text>
          {/* Keyboard */}
          <rect x="20" y="85" width="60" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      );
    }

    // Check for JavaScript/TypeScript
    if (tags.some(tag => ['JavaScript', 'TypeScript', 'JS', 'TS'].includes(tag))) {
      return (
        <svg className="w-14 h-14" viewBox="0 0 100 100">
          {/* Code console */}
          <rect x="15" y="25" width="70" height="60" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Code lines */}
          <line x1="25" y1="40" x2="75" y2="40" stroke="currentColor" strokeWidth="2.5" />
          <line x1="25" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="2.5" />
          <line x1="25" y1="60" x2="70" y2="60" stroke="currentColor" strokeWidth="2.5" />
          {/* Cursor */}
          <rect x="62" y="58" width="2" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        </svg>
      );
    }

    // Check for backend/server technologies
    if (tags.some(tag => ['Node.js', 'Express.js', 'FastAPI', 'Python', 'Java', 'PHP'].includes(tag))) {
      return (
        <svg className="w-14 h-14" viewBox="0 0 100 100">
          {/* Server tower */}
          <rect x="30" y="30" width="40" height="50" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Antenna */}
          <line x1="50" y1="30" x2="50" y2="15" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="50" cy="15" r="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
          {/* Blinking light */}
          <circle cx="40" cy="45" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
          <circle cx="60" cy="45" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
        </svg>
      );
    }

    // Check for database technologies
    if (tags.some(tag => ['MySQL', 'MongoDB', 'PostgreSQL', 'Oracle', 'SQL', 'Database'].includes(tag))) {
      return (
        <svg className="w-14 h-14" viewBox="0 0 100 100">
          {/* Database cylinder */}
          <ellipse cx="50" cy="30" rx="35" ry="12" stroke="currentColor" strokeWidth="3" fill="none" />
          <line x1="15" y1="30" x2="85" y2="30" stroke="currentColor" strokeWidth="3" />
          <line x1="15" y1="70" x2="85" y2="70" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="50" cy="70" rx="35" ry="12" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Data lines */}
          <line x1="35" y1="40" x2="65" y2="40" stroke="currentColor" strokeWidth="2" />
          <line x1="40" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="35" y1="60" x2="65" y2="60" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    }

    // Check for DevOps/Cloud technologies
    if (tags.some(tag => ['AWS', 'Docker', 'Kubernetes', 'Cloud', 'DevOps'].includes(tag))) {
      return (
        <svg className="w-14 h-14" viewBox="0 0 100 100">
          {/* Cloud */}
          <path d="M30,40 Q25,35 30,30 T40,25 T50,30 T60,25 T70,30"
            stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Server under cloud */}
          <rect x="40" y="35" width="20" height="30" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
          {/* WiFi signals */}
          <path d="M50,20 Q45,15 50,10 T55,15 Q50,10 T45,15"
            stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
        </svg>
      );
    }

    // Check for C++ or low-level programming
    if (tags.some(tag => ['C++', 'C', 'Assembly'].includes(tag))) {
      return (
        <svg className="w-14 h-14" viewBox="0 0 100 100">
          {/* Terminal window */}
          <rect x="15" y="20" width="70" height="70" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
          {/* Code prompt */}
          <text x="25" y="35" fontSize="12" fill="currentColor">root@rahil:~$</text>
          {/* Code lines */}
          <text x="25" y="50" fontSize="12" fill="currentColor">#include &lt;iostream&gt;</text>
          <text x="25" y="65" fontSize="12" fill="currentColor">int main() &lcub;</text>
          <text x="25" y="80" fontSize="12" fill="currentColor">  return 0;</text>
          <text x="25" y="95" fontSize="12" fill="currentColor">&rcub;</text>
        </svg>
      );
    }

    // Default fallback - generic code brackets
    return (
      <svg className="w-14 h-14" viewBox="0 0 100 100">
        {/* Bracket hearts */}
        <text x="30" y="40" fontSize="20" fontWeight="bold" stroke="currentColor" strokeWidth="2" fill="none">&lt;</text>
        <text x="50" y="40" fontSize="20" fontWeight="bold" stroke="currentColor" strokeWidth="2" fill="none">/</text>
        <text x="70" y="40" fontSize="20" fontWeight="bold" stroke="currentColor" strokeWidth="2" fill="none">&gt;</text>
        {/* Heart in between */}
        <path d="M50,35 Q45,30 40,35 Q35,40 35,45 Q40,50 50,55 Q60,50 65,40 Q70,35 65,30 Q60,25 50,35 Z"
          stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    );
  };

  // Maps project to a funny, high-quality cartoon/pixel Giphy sticker
  const getProjectGif = () => {
    const t = title.toLowerCase();
    if (t.includes("sandbox") || t.includes("environment")) {
      return "https://i.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.webp";
    }
    if (t.includes("netflix")) {
      return "https://i.giphy.com/media/Xfmqj2aWB9d4VAWXFs/giphy.webp";
    }
    if (t.includes("dice")) {
      return "https://i.giphy.com/media/XppQF7pbkNxyXf6M7y/giphy.webp";
    }
    if (t.includes("dental") || t.includes("clinic")) {
      return "https://i.giphy.com/media/9GOtKNsQ2zFLCZYJb6/giphy.webp";
    }
    if (t.includes("bank") || t.includes("bankist") || t.includes("transaction")) {
      return "https://i.giphy.com/media/HWhlNhHNN7zGwMfGV4/giphy.webp";
    }
    if (t.includes("rental") || t.includes("car")) {
      return "https://i.giphy.com/media/3zbEvc3jLZpTROf0Np/giphy.webp";
    }
    return "https://i.giphy.com/media/Vf3ZKdillTMOOaOho0/giphy.webp";
  };

  // Pick a gradient based on the primary tag category
  const getThumbGradient = () => {
    if (tags.some(t => ['React', 'TypeScript', 'Next.js'].includes(t)))
      return 'from-[#FFE500] via-[#00FF85] to-[#7B2FFF]';
    if (tags.some(t => ['Node.js', 'Express.js', 'FastAPI', 'Docker', 'AWS'].includes(t)))
      return 'from-[#00FF85] via-[#00C9FF] to-[#FFE500]';
    if (tags.some(t => ['JavaScript', 'JS'].includes(t)))
      return 'from-[#FFE500] via-[#FF6B35] to-[#FF3860]';
    if (tags.some(t => ['HTML', 'HTML5', 'CSS', 'CSS3', 'Tailwind CSS'].includes(t)))
      return 'from-[#7B2FFF] via-[#FF6AC1] to-[#FFE500]';
    if (tags.some(t => ['MySQL', 'MongoDB', 'SQL'].includes(t)))
      return 'from-[#00C9FF] via-[#7B2FFF] to-[#00FF85]';
    return 'from-[#FFE500] via-[#7B2FFF] to-[#00FF85]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-[3px] border-black bg-white shadow-brutal hover:shadow-brutal-lg transition-all duration-150 flex flex-col"
    >
      {/* Project-Specific Cartoon Thumbnail */}
      <div className={`h-48 border-b-[3px] border-black flex items-center justify-center overflow-hidden relative bg-gradient-to-br ${getThumbGradient()}`}>
        {/* Dot grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0A0A0A 1.5px, transparent 1.5px)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Project-specific SVG icon — large and centered */}
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-30">
          <div className="w-20 h-20 text-black/80 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            {/* {getProjectSvg()} */}
          </div>
        </div>

        {/* Cartoon GIF sticker layered in center */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <motion.img
            src={getProjectGif()}
            alt={title}
            className="w-28 h-28 object-contain"
            animate={{
              y: [0, -6, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating decorative shapes */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-white/60 border-[3px] border-black rotate-[45deg] animate-[bounce_2s_ease_in_out_infinite]" />
        <div className="absolute bottom-3 right-3 w-6 h-6 bg-white/60 border-[2px] border-black rounded-full animate-[spin_3s_linear_infinite]" />
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/40 border-[2px] border-black rotate-[60deg] animate-[float_4s_ease_in_out_infinite]" />

        {/* Project title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm px-4 py-2 z-20">
          <p className="font-headline text-sm text-white truncate">{title}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-headline text-xl mb-2">{title}</h3>
        <p className="font-body text-black/70 mb-4 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-body font-bold uppercase tracking-wide border-[2px] border-black bg-offwhite"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <BrutalButton href={githubUrl} variant="white" size="sm" external>
              GitHub →
            </BrutalButton>
          )}
          {liveUrl && (
            <BrutalButton href={liveUrl} variant="yellow" size="sm" external>
              Live Demo →
            </BrutalButton>
          )}
        </div>
      </div>
    </motion.div>
  );
}
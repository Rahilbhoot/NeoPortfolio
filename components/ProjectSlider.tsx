"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectSliderProps {
  projects: Array<{
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
  }>;
  showNav?: boolean;
}

export default function ProjectSlider({
  projects,
  showNav = true,
}: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [isPaused, goToNext, projects.length]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide counter badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 text-xs font-body font-bold uppercase tracking-wider bg-yellow border-[3px] border-black">
            {currentIndex + 1} / {projects.length}
          </span>
          {!isPaused && (
            <span className="text-xs font-body text-black/40 uppercase tracking-wide">
              Auto-scrolling
            </span>
          )}
        </div>
      </div>

      {/* Carousel viewport */}
      <div className="overflow-hidden relative min-h-[420px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
            }}
            className="w-full max-w-2xl mx-auto"
          >
            {projects[currentIndex] && (
              <ProjectCard
                title={projects[currentIndex].title}
                description={projects[currentIndex].description}
                tags={projects[currentIndex].tags}
                githubUrl={projects[currentIndex].githubUrl}
                liveUrl={projects[currentIndex].liveUrl}
                index={0}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`group relative transition-all duration-200 ${
              currentIndex === index
                ? "scale-110"
                : "hover:scale-105"
            }`}
            aria-label={`Go to project: ${project.title}`}
          >
            <div
              className={`w-10 h-3 border-[2px] border-black transition-all duration-200 ${
                currentIndex === index
                  ? "bg-yellow shadow-brutal-sm"
                  : "bg-offwhite hover:bg-yellow/30"
              }`}
            />
            {/* Tooltip on hover */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-[10px] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
              {project.title}
            </div>
          </button>
        ))}
      </div>

      {/* Navigation arrows */}
      {showNav && projects.length > 1 && (
        <>
          <motion.button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white border-[3px] border-black w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-brutal-sm hover:shadow-none hover:translate-x-0 hover:translate-y-[-48%] transition-all duration-150 z-10"
            whileTap={{ scale: 0.9 }}
            aria-label="Previous project"
          >
            ←
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white border-[3px] border-black w-12 h-12 flex items-center justify-center text-2xl font-bold shadow-brutal-sm hover:shadow-none hover:translate-x-0 hover:translate-y-[-48%] transition-all duration-150 z-10"
            whileTap={{ scale: 0.9 }}
            aria-label="Next project"
          >
            →
          </motion.button>
        </>
      )}
    </div>
  );
}
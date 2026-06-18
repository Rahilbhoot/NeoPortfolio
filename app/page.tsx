"use client";

import { motion } from "framer-motion";
import BrutalButton from "@/components/BrutalButton";
import ProjectSlider from "@/components/ProjectSlider";
import SectionHeading from "@/components/SectionHeading";
import TechTag from "@/components/TechTag";
import Badge from "@/components/Badge";

// TODO: Replace with real content
const featuredProjects = [
  {
    title: "Secure Sandbox Environment Manager",
    description:
      "A full-stack platform enabling users to spin up isolated Ubuntu desktop containers accessible via a browser using noVNC.",
    tags: ["React", "TypeScript", "Node.js", "Docker", "MySQL", "AWS"],
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix clone built with HTML and CSS, featuring movie browsing, responsive design, and UI mimicking the Netflix interface.",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Dental Clinic Website",
    description:
      "A professional dental clinic website built with HTML and Tailwind CSS, featuring service sections, appointment booking form, and responsive design.",
    tags: ["HTML", "Tailwind CSS"],
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "JavaScript Bank App",
    description:
      "A bank simulation app with transaction features, account management, and dynamic DOM manipulation using vanilla JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Rahilbhoot",
  },
];

const techSnapshot = [
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "FastAPI",
  "MySQL",
  "Docker",
  "AWS",
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow border-[3px] border-black rotate-12 opacity-20 hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-green border-[3px] border-black -rotate-6 opacity-20 hidden lg:block" />
        <div className="absolute top-40 right-1/3 w-16 h-16 bg-purple border-[3px] border-black rotate-45 opacity-10 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Text Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-body font-bold text-lg uppercase tracking-widest mb-4 text-black/60">
                  Full-Stack Developer
                </p>
                <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl leading-none mb-6">
                  Hi, I&apos;m{" "}
                  <span className="accent-block-yellow">
                    Rahil Bhoot
                  </span>
                  .
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-headline text-2xl sm:text-3xl text-black/80 mb-6"
              >
                Builder. Problem Solver.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg text-black/60 max-w-xl mb-8 leading-relaxed"
              >
                Passionate web developer specializing in JavaScript, React, and full-stack
                applications. Currently pursuing Computer Science at Symbiosis Institute of
                Technology with hands-on experience in modern web technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <BrutalButton href="/projects" variant="yellow" size="lg">
                  View My Work
                </BrutalButton>
                <BrutalButton href="/contact" variant="white" size="lg">
                  Get In Touch
                </BrutalButton>
              </motion.div>
            </div>

            {/* Right side: Badge + Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Large decorative block with real image */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 border-[3px] border-black bg-offwhite shadow-brutal-lg flex items-center justify-center relative">
                <div className="w-48 h-48 border-[3px] border-black overflow-hidden relative">
                  <img
                    src="/profile.jpg"
                    alt="Rahil Bhoot"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4">
                  <Badge color="green" rotation={-5}>
                    ✨ Open to Work
                  </Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="py-20 bg-offwhite border-t-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Featured Projects</SectionHeading>

          <ProjectSlider
            projects={featuredProjects}
            showNav={true}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <BrutalButton href="/projects" variant="white">
              See All Projects →
            </BrutalButton>
          </motion.div>
        </div>
      </section>

      {/* ============ TECH STACK SNAPSHOT ============ */}
      <section className="py-20 border-t-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Tech I Work With</SectionHeading>

          <div className="flex flex-wrap gap-3">
            {techSnapshot.map((tech, i) => (
              <TechTag key={tech} name={tech} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <BrutalButton href="/techstack" variant="white" size="sm">
              View Full Stack →
            </BrutalButton>
          </motion.div>
        </div>
      </section>


      {/* ============ ACHIEVEMENTS & BADGES ============ */}
      <section className="py-20 border-t-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>Achievements & Recognition</SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-black/60 mb-8 max-w-2xl"
          >
            Recognized for contributions to open source and developer community engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <span className="px-4 py-2 font-body font-bold text-sm uppercase tracking-wide
              border-[3px] border-black bg-yellow shadow-brutal-sm">
              GSSoC 2026 Contributor
            </span>
            <span className="px-4 py-2 font-body font-bold text-sm uppercase tracking-wide
              border-[3px] border-black bg-green shadow-brutal-sm">
              Open Source Track
            </span>
            <span className="px-4 py-2 font-body font-bold text-sm uppercase tracking-wide
              border-[3px] border-black bg-purple shadow-brutal-sm">
              Pull Shark ×2
            </span>
            <span className="px-4 py-2 font-body font-bold text-sm uppercase tracking-wide
              border-[3px] border-black bg-yellow shadow-brutal-sm">
              YOLO Achiever
            </span>
            <span className="px-4 py-2 font-body font-bold text-sm uppercase tracking-wide
              border-[3px] border-black bg-green shadow-brutal-sm">
              Developer Program Member
            </span>
          </motion.div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="py-16 bg-yellow border-t-[3px] border-b-[3px] border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-headline text-3xl sm:text-4xl mb-4">
              Let&apos;s Build Something Together.
            </h2>
            <p className="font-body text-lg text-black/70 mb-8 max-w-lg mx-auto">
              Got a project idea, internship opportunity, or just want to chat? Reach out.
            </p>
            <BrutalButton href="/contact" variant="white" size="lg">
              Get In Touch →
            </BrutalButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}

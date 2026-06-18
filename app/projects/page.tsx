"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

// TODO: Replace with real content
const allProjects = [
  {
    title: "Secure Sandbox Environment Manager",
    description:
      "Built a full-stack platform enabling users to spin up isolated Ubuntu desktop containers accessible via a browser using noVNC — eliminating any local setup requirement.",
    tags: ["React", "TypeScript", "Node.js", "Docker", "MySQL", "AWS"],
    category: "Full-Stack",
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Netflix Clone",
    description:
      "Created a responsive Netflix clone using HTML and CSS, featuring movie browsing capabilities, responsive design principles, and UI elements that closely mimic the Netflix interface.",
    tags: ["HTML", "CSS"],
    category: "Web",
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Dice Game",
    description:
      "Developed a two-player browser-based dice game with real-time score tracking, turn-based gameplay logic, and a win condition at 100 points.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Web",
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Dental Clinic Website",
    description:
      "Designed and developed a professional dental clinic website using HTML and Tailwind CSS, featuring service showcases, doctor profiles, appointment booking form, and full responsiveness across devices.",
    tags: ["HTML", "Tailwind CSS"],
    category: "Web",
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "JavaScript Bank App",
    description:
      "Created a bank simulation application with JavaScript featuring transaction processing, account balance tracking, deposit/withdrawal functionality, and interactive user interface.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Web",
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Car Rental Microproject",
    description:
      "Developed a C++ based microproject for car rental system as part of Government Polytechnic Jamnagar curriculum, featuring vehicle inventory management, booking system, and basic UI.",
    tags: ["C++"],
    category: "Software",
    githubUrl: "https://github.com/Rahilbhoot",
  },
  {
    title: "Array Bankist",
    description:
      "Built a JavaScript application focusing on array manipulation methods to simulate bank operations like transactions, balance inquiries, and customer data management.",
    tags: ["JavaScript"],
    category: "Web",
    githubUrl: "https://github.com/Rahilbhoot",
  },
];

const filterOptions = ["All", "Web", "Full-Stack", "Software"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading>Projects</SectionHeading>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-black/60 mb-8 max-w-2xl"
        >
          A selection of real-world and academic projects I have built, showcasing full-stack capabilities, cloud deployments, and core JavaScript fundamentals.
        </motion.p>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 font-body font-bold text-sm uppercase tracking-wide
                border-[3px] border-black transition-all duration-150
                ${
                  activeFilter === filter
                    ? "bg-yellow shadow-brutal-sm"
                    : "bg-white shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="border-[3px] border-dashed border-black/20 p-12 text-center mt-6">
            <p className="font-headline text-xl text-black/40">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

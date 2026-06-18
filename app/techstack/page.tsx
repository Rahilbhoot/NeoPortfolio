"use client";

import { motion } from "framer-motion";
import TechTag from "@/components/TechTag";
import SectionHeading from "@/components/SectionHeading";

// TODO: Replace with real content
const techCategories = [
  {
    label: "Frontend",
    color: "yellow" as const,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    label: "Backend & APIs",
    color: "green" as const,
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "RESTful API Design",
    ],
  },
  {
    label: "Databases & Cloud",
    color: "purple" as const,
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "SQL",
      "Amazon Web Services (AWS)",
    ],
  },
  {
    label: "DevOps & Tools",
    color: "default" as const,
    items: ["Git", "GitHub", "Docker"],
  },
  {
    label: "Programming Languages",
    color: "green" as const,
    items: ["Python", "Java", "C++", "C", "PHP"],
  },
  {
    label: "Currently Learning",
    color: "green" as const,
    items: ["System Design", "GraphQL"],
  },
];

export default function TechStackPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <SectionHeading>Tech Stack</SectionHeading>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-black/60 mb-12 max-w-2xl"
        >
          The languages, libraries, databases, and DevOps tools I specialize in to build stable, robust web apps.
        </motion.p>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-4 h-4 border-[2px] border-black ${
                  category.color === "yellow" ? "bg-yellow" :
                  category.color === "green" ? "bg-green" :
                  category.color === "purple" ? "bg-purple" :
                  "bg-offwhite"
                }`} />
                <h3 className="font-headline text-2xl">{category.label}</h3>
                {category.label === "Currently Learning" && (
                  <span className="px-3 py-1 text-xs font-body font-bold uppercase tracking-wider bg-green border-[2px] border-black rotate-[-2deg]">
                    🚀 In Progress
                  </span>
                )}
              </div>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <TechTag
                    key={item}
                    name={item}
                    variant={category.color}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 border-[3px] border-black bg-yellow p-8 shadow-brutal relative"
        >
          <div className="absolute -top-3 -right-3 bg-white border-[3px] border-black px-3 py-1 font-body font-bold text-xs uppercase rotate-[3deg]">
            Fun Fact
          </div>
          <p className="font-headline text-xl mb-2">
            {/* TODO: Replace with real content */}
            I wrote my first line of code in 2020.
          </p>
          <p className="font-body text-black/70">
            Since then, I&apos;ve shipped projects, contributed to open source, and never
            stopped exploring new technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

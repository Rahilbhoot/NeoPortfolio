"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";

// TODO: Replace with real content
const experiences = [
  {
    role: "Summer Intern",
    company: "7Span (On-site), Ahmedabad",
    duration: "Jun 2024 – Aug 2024",
    type: "Internship",
    responsibilities: [
      "Built 8+ responsive UI components using React.js and Tailwind CSS for a production-grade web application — components are actively used by end-users.",
      "Translated Figma mockups into pixel-perfect React components with less than 5% design deviation as validated by the senior design team.",
      "Collaborated with 3 senior developers in a Git-based agile workflow, raising 10+ pull requests, resolving merge conflicts, and maintaining a clean commit history.",
    ],
  },
  {
    role: "Technical Executive",
    company: "CodeX SIT",
    duration: "2025 – Present",
    type: "Leadership",
    responsibilities: [
      "Led technical workshops, maintained GitHub repositories, and mentored peers in JavaScript and full-stack web development.",
    ],
  },
  {
    role: "B.Tech Computer Science Student",
    company: "Symbiosis Institute of Technology (SIT), Pune",
    duration: "Jul 2025 – Present",
    type: "Academic",
    responsibilities: [
      "Pursuing B.Tech in Computer Science & Engineering with a current CGPA of 7.9/10.",
      "Engaged in hands-on building of web applications, database schema design, and microservices architecture.",
      "Secured practical exposure to DevOps tools (Git, GitHub, Docker) and AWS cloud deployments.",
      "Active participant in college coding competitions and hackathons, securing top 3 positions in 2+ events.",
      "Member of the Computer Science Club, organizing weekly coding sessions and peer learning workshops.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub",
    duration: "Jan 2024 – Present",
    type: "Volunteer",
    responsibilities: [
      "Maintains 5+ public repositories showcasing full-stack development skills.",
      "Recognized as GSSoC 2026 Contributor for meaningful contributions to open source projects.",
      "Earned Pull Shark ×2 achievement for consistent high-quality pull requests.",
      "Active contributor to developer community through code reviews and issue resolutions.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Freelance / Self-initiated",
    duration: "Mar 2023 – May 2024",
    type: "Internship",
    responsibilities: [
      "Developed responsive websites for local businesses using HTML, CSS, and JavaScript.",
      "Created interactive web applications including a Netflix clone and dental clinic website.",
      "Implemented modern UI/UX principles to enhance user engagement and accessibility.",
      "Managed client requirements gathering, project delivery, and post-launch support.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex items-start gap-4 mb-4">
          <SectionHeading className="mb-0">Experience</SectionHeading>
          <Badge color="yellow" rotation={3}>
            5 Roles
          </Badge>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-black/60 mb-12 max-w-2xl"
        >
          A timeline of my professional and academic journey — internships, leadership roles, and academic milestones.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black hidden md:block" />

          <div className="space-y-8 md:pl-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={`${exp.role}-${exp.company}`} {...exp} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-[3px] border-dashed border-black/20 p-8 text-center"
        >
          <p className="font-headline text-xl mb-2">Education Background</p>
          <p className="font-body text-black/70 max-w-lg mx-auto">
            Prior to my B.Tech studies, I completed a <strong>Diploma in Computer Science & Information Technology</strong> from Government Polytechnic Jamnagar (Jan 2022 – Jun 2025) with a CGPA of 9.57/10.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

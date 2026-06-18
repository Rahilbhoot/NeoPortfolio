"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import Badge from "@/components/Badge";

// TODO: Replace with real content
const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Rahilbhoot",
    icon: FaGithub,
    color: "bg-white",
    description: "github.com/Rahilbhoot",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahilbhoot/",
    icon: FaLinkedin,
    color: "bg-white",
    description: "www.linkedin.com/in/rahilbhoot/",
  },
  {
    label: "Email",
    href: "mailto:rahilbhoot7@gmail.com",
    icon: FaEnvelope,
    color: "bg-yellow",
    description: "rahilbhoot7@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Page Header */}
        <SectionHeading>Let&apos;s Connect.</SectionHeading>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-black/60 mb-12 max-w-xl"
        >
          Whether it&apos;s a project, an internship opportunity, or just to say hi — my inbox
          is open. Pick your preferred platform below.
        </motion.p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 2, y: 2 }}
                className={`flex flex-col items-center text-center gap-4 p-6 border-[3px] border-black shadow-brutal
                  hover:shadow-brutal-sm transition-all duration-150 ${link.color}`}
              >
                <div className="w-14 h-14 border-[3px] border-black bg-offwhite flex items-center justify-center shrink-0">
                  <Icon size={28} />
                </div>
                <div>
                  <p className="font-headline text-lg">{link.label}</p>
                  <p className="font-body text-sm text-black/60 mt-1 break-all">
                    {link.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Location & Phone Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Badge color="yellow" rotation={-3}>
              📍 Based in Pune, India
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Badge color="green" rotation={2}>
              📞 +91-7016597468
            </Badge>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 border-[3px] border-dashed border-black/20 p-8 text-center"
        >
          <p className="font-headline text-xl mb-2">Prefer email?</p>
          <p className="font-body text-black/50">
            Send me a message at{" "}
            <a
              href="mailto:rahilbhoot7@gmail.com"
              className="font-bold text-black yellow-underline hover:bg-yellow transition-colors duration-150"
            >
              rahilbhoot7@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

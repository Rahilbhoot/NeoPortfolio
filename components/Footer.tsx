import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name + tagline */}
          <div className="text-center md:text-left">
            <p className="font-headline text-lg">
              {"<RahilBhoot />"}
            </p>
            <p className="font-body text-sm text-black/60 mt-1">
              Built with Next.js, Tailwind & a love for brutalism.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="flex items-center gap-4 font-body font-bold text-sm uppercase">
            <Link href="/projects" className="hover:bg-yellow px-2 py-1 transition-colors duration-150">
              Projects
            </Link>
            <Link href="/experience" className="hover:bg-yellow px-2 py-1 transition-colors duration-150">
              Experience
            </Link>
            <Link href="/contact" className="hover:bg-yellow px-2 py-1 transition-colors duration-150">
              Contact
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Rahilbhoot"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-black p-2 bg-white shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rahilbhoot"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[3px] border-black p-2 bg-white shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:rahilbhoot7@gmail.com"
              className="border-[3px] border-black p-2 bg-white shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t-[3px] border-black/10 text-center">
          <p className="font-body text-sm text-black/50">
            © {new Date().getFullYear()}{" "}
            Rahil Bhoot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

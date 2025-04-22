"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full mt-32 px-6 py-10 bg-white/5 backdrop-blur-md border-t border-white/10 text-white/80 text-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Copyright */}
        <p className="text-body text-center md:text-left">
          © {new Date().getFullYear()} ACE. Built by Stylianos & Viktorya.
        </p>

        {/* Quick Links */}
        <div className="space-x-4 text-body">
          <Link href="#work" className="hover:text-white transition">
            Work
          </Link>
          <Link href="#services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/components/Magnetic"; // ✅ import the magnetic wrapper

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-white/10 border-b border-white/10 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Magnetic>
          <motion.div whileHover={{ rotate: [0, 5, -5, 3, 0], scale: 1.05 }}>
            <Link
              href="/"
              className="text-heading text-2xl font-bold tracking-tight"
            >
              ACE
            </Link>
          </motion.div>
        </Magnetic>
        {/* Nav links */}
        <nav className="space-x-6 hidden md:flex">
          {["Home", "Work", "Services", "About", "Contact"].map((item) => (
            <Magnetic key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative text-body hover:text-primary transition group"
              >
                {item}
                {/* Underline hover animation */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </Magnetic>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

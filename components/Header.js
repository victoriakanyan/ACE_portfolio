"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold tracking-tight"
        >
          ACE
        </motion.h1>

        <nav className="space-x-6 hidden md:flex">
          {["Home", "Packages"].map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              className="relative inline-block"
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-primary transition"
              >
                {item}
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

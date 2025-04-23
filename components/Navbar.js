"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import Magnetic from "@/components/Magnetic";
import Link from "next/link";


const NAV_ITEMS = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-6 py-4 rounded-3xl border transition-all ${
        scrolled
          ? "bg-white/5 backdrop-blur-xl border-white/10 shadow-md"
          : "bg-white/0 border-transparent"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Left: Logo */}
        <Magnetic>
          <motion.div whileHover={{ rotate: [0, 5, -5, 3, 0], scale: 1.05 }}>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-heading text-2xl font-bold tracking-tight cursor-pointer"
            >
              <span className="font-mono">ACE</span>
            </ScrollLink>
          </motion.div>
        </Magnetic>

        {/* Center: Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {NAV_ITEMS.map((item) => (
            <Magnetic key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                onSetActive={() => setActiveLink(item.toLowerCase())}
                className="relative cursor-pointer text-body hover:text-purple transition-colors duration-300"
              >
                <span
                  className={`px-1 ${
                    activeLink === item.toLowerCase()
                      ? "text-glow font-semibold"
                      : ""
                  }`}
                >
                  {item}
                  {activeLink === item.toLowerCase() && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </span>
              </ScrollLink>
            </Magnetic>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-body">
          <Link href="/packages">Packages</Link>

        </div>
      </div>
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import { useState } from "react";

function LinkedInHover(props) {
    const { name, href, image, title } = props;
  
  const [showInfo, setShowInfo] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center gap-1 hover:text-white transition"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {name}
      <Linkedin className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {showInfo && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-2 rounded-xl text-xs bg-white/10 backdrop-blur-sm text-white shadow-lg z-10">
          <div className="flex items-center gap-2">
            <Image
              src={image}
              alt={name}
              width={24}
              height={24}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-[10px] text-white/70">{title}</div>
            </div>
          </div>
        </div>
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full mt-32 px-6 py-10 bg-white/5 backdrop-blur-md border-t border-white/10 text-white/80 text-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-body text-center md:text-left">
          © {new Date().getFullYear()} ACE. Built by{" "}
          <LinkedInHover
            name="Stylianos"
            href="https://www.linkedin.com/in/stylianos-nicolaou-4b00a3304/"
            image="/stylianos.jpg"
            title="Computer Science Student & CO-Founder of ACE"
          />{" "}
          &{" "}
          <LinkedInHover
            name="Viktorya"
            href="https://www.linkedin.com/in/victoria-voskanyan-38a67b1a2/"
            image="/viktorya.jpg"
            title="Computer Science Student & CO-Founder of ACE"
          />
        </p>

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

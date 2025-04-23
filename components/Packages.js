"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const features = [
  "Pages Included",
  "Backend Functionality",
  "Design",
  "Mobile Responsive",
  "Basic SEO Setup",
  "Social Media Integration",
  "E-Commerce Ready",
  "Animations & Effects",
  "Maintenance (Year 1)",
  "Ongoing Maintenance",
];

const packages = [
  {
    name: "Base Website",
    price: "€200",
    values: [
      "1 – 3 static pages",
      "No backend",
      "Simple layout",
      "✔",
      "✔",
      "✔",
      "-",
      "-",
      "✔",
      "€50/year",
    ],
  },
  {
    name: "Medium Scale",
    price: "€250 – €350",
    values: [
      "1 - 5 pages",
      "Contact form / Light CMS",
      "Custom or themed",
      "✔",
      "✔",
      "✔",
      "-",
      "Optional",
      "✔",
      "€70/year",
    ],
  },
  {
    name: "Full Scale",
    price: "€500 – €1500+",
    values: [
      "Unlimited",
      "Advanced backend / Admin panel",
      "Fully custom",
      "✔",
      "✔",
      "✔",
      "✔",
      "✔",
      "✔",
      "20% of price",
    ],
  },
];

export default function PackagesPage() {
  return (
    <motion.div
      id="packages"
      className="min-h-screen w-full bg-[#c1c8e4] py-20 text-glow"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionWrapper>
        <h2 className="text-heading text-3xl md:text-4xl font-extrabold text-center mb-12 text-heading">
          Website Development Packages
        </h2>

        <div className="relative overflow-auto mx-auto max-w-5xl rounded-2xl backdrop-blur-2xl bg-white/10 border border-white/30 shadow-[0_25px_50px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Animated Reflection Layer */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute w-1/2 h-full bg-gradient-to-br from-white/50 to-transparent opacity-20 animate-glint" />
          </div>

          {/* Table content goes here */}

          <table className="w-full text-left text-sm text-body border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="p-4">Features</th>
                {packages.map((pkg, i) => (
                  <th key={i} className="p-4 text-center">
                    <div className="font-semibold text-base text-glow">
                      {pkg.name}
                    </div>
                    <div className="mt-2 inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-body text-base">
                      {pkg.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/20 transition-colors duration-300"
                >
                  <td className="p-4 text-md font-bold text-glow">{feature}</td>
                  {packages.map((pkg, i) => (
                    <td key={i} className="p-4 text-center">
                      {pkg.values[idx] === "✔" ? (
                        <FaCheck className="text-green-400 mx-auto text-glow" />
                      ) : pkg.values[idx] === "-" ? (
                        <span className="text-white/30">—</span>
                      ) : (
                        <span>{pkg.values[idx]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add-ons */}
        <h3 className="text-2xl font-bold mt-12 mb-4 text-glow">
          Add-on Services
        </h3>
        <ul className="list-disc list-inside text-sm space-y-2 text-glow">
          <li>
            <strong>SEO Optimization</strong> – €300 / €200 (for full sites)
          </li>
          <li>
            <strong>Extra Page</strong> – €30 - €100
          </li>
          <li>
            <strong>Multilingual Support</strong> – €100/language (3 pages)
          </li>
          <li>
            <strong>Extra Multilingual Page</strong> – €20 - €50
          </li>
          <li>
            <strong>Custom Animations & Effects</strong> – €50
          </li>
        </ul>
      </SectionWrapper>
    </motion.div>
  );
}

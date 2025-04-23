"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const packages = [
  {
    title: "Base Website",
    price: "€200",
    description:
      "Ideal for individuals or small businesses looking for a simple, clean online presence.",
    features: [
      "1–3 static pages",
      "No backend / Minimal interactivity",
      "Informative or portfolio-style layout",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Social media integration",
      "First year maintenance included",
      "Ongoing maintenance: €50/year",
    ],
  },
  {
    title: "Medium Scale Website",
    price: "€250–€350",
    description:
      "Great for growing businesses needing some backend features.",
    features: [
      "1–5 pages",
      "Minor backend (contact forms, light CMS)",
      "Custom or themed design",
      "Mobile-responsive layout",
      "Basic SEO setup",
      "First year maintenance included",
      "Ongoing maintenance: €70/year",
    ],
  },
  {
    title: "Full Scale Website",
    price: "€500–€1500+",
    description:
      "For businesses needing a fully custom, feature-rich web platform.",
    features: [
      "Unlimited pages",
      "Advanced backend (admin panel, databases)",
      "E-commerce integration (optional)",
      "Custom animations & effects (included)",
      "On-page basic SEO",
      "First year maintenance included",
      "Ongoing maintenance: 20% of final product price",
    ],
  },
];

const addons = [
  { title: "SEO Optimization", price: "€300 / €200 (for full sites)" },
  { title: "Extra Page", price: "€30 - €100" },
  { title: "Multilingual Support", price: "€100/language (3 pages)" },
  { title: "Extra Multilingual Page", price: "€20 - €50" },
  { title: "Custom Animations & Effects", price: "€50" },
];

export default function PackagesPage() {
  return (
    <motion.div
      id="packages"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionWrapper>
        <h2 className="text-heading text-4xl md:text-5xl font-extrabold text-center mb-16">
          Website Development Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="border p-6 rounded-2xl shadow-md bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <p className="text-gray-600 font-semibold mb-2">{pkg.price}</p>
              <p className="text-sm mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {pkg.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4">Add-on Services</h3>
        <ul className="list-disc list-inside text-sm space-y-2">
          {addons.map((addon, i) => (
            <li key={i}>
              <span className="font-medium">{addon.title}</span> – {addon.price}
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </motion.div>
  );
}

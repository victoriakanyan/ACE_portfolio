"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

// Scroll animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  {
    title: "Starter Website",
    description:
      "A sleek landing page built for small businesses or personal brands. Responsive, fast, and beautiful.",
  },
  {
    title: "Business Website",
    description:
      "Multi-page site with services, testimonials, and contact forms. Perfect for growing companies.",
  },
  {
    title: "Custom Solutions",
    description:
      "Advanced builds with booking, e-commerce, dashboards or APIs. Tailored to your business needs.",
  },
];

export default function Services() {
  return (
    <motion.div
      id="services"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionWrapper>
        <h2 className="text-heading text-4xl md:text-5xl font-extrabold text-center mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transform transition duration-500"
            >
              <h3 className="text-heading text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </motion.div>
  );
}

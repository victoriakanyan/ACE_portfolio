"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submit
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-heading text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Contact Us
      </motion.h2>

      {/* Success Message */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 text-glow font-medium"
          >
            🎉 Your message has been sent successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-xl"
      >
        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-heading focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-heading focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray"
            placeholder="john@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="text-body block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-heading focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition"
        >
          Send Message
        </button>
      </motion.form>
    </SectionWrapper>
  );
}

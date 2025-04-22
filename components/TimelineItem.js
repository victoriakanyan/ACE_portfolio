"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function TimelineItem({
  title,
  year,
  description,
  side,
  isActive,
  isInactive,
  onHover,
  onLeave,
}) {
  const isLeft = side === "left";
  const align = isLeft ? "justify-start" : "justify-end";
  const textAlign = isLeft ? "text-left ml-8" : "text-right mr-8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative w-full flex ${align} mb-20`}
    >
      <motion.div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        animate={{
          opacity: isInactive ? 0 : 1,
          scale: isInactive ? 0.95 : 1,
        }}
        transition={{ duration: 0.3 }}
        className={`relative z-10 group max-w-sm transition-all ${textAlign}`}
      >
        <div className="text-lg font-semibold text-body cursor-pointer">
          {year} — {title}
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
              className={`mt-3 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 text-sm text-body shadow-xl ${
                isLeft ? "origin-left" : "origin-right"
              }`}
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

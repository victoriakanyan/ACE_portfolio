"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    window.addEventListener("mouseenter", show);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
      window.removeEventListener("mouseenter", show);
    };
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none mix-blend-difference bg-peach rounded-full"
      style={{
        width: 64,
        height: 64,
        top: pos.y,
        left: pos.x,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}

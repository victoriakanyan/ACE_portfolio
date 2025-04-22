"use client";

import { motion } from "framer-motion";

const blobVariants = {
  animate: {
    d: [
      "M43.1,-70.5C56.4,-60.6,67.2,-47.5,72.8,-32.8C78.4,-18.1,78.9,-1.8,75.2,13.3C71.4,28.4,63.5,42.3,52.4,54.6C41.3,66.9,27.1,77.6,11.2,78.7C-4.7,79.7,-21.3,71.1,-37.6,62.4C-53.9,53.7,-69.9,44.8,-73.7,32.5C-77.6,20.2,-69.2,4.6,-63.4,-10.7C-57.6,-26,-54.3,-40.9,-45.2,-52.3C-36.1,-63.7,-21.1,-71.6,-4.3,-67.4C12.6,-63.3,25.2,-47.2,43.1,-70.5Z",
      "M42.6,-67.1C56.2,-58.4,69,-47.1,72.4,-33.5C75.9,-20,69.9,-4.3,65.7,12.9C61.4,30,58.9,48.7,48.2,60.3C37.6,71.9,18.8,76.4,2.2,73.5C-14.4,70.6,-28.8,60.4,-41.6,49.3C-54.4,38.2,-65.6,26.2,-70.7,11.3C-75.9,-3.6,-75.1,-21.3,-67.6,-34.2C-60.2,-47.2,-46.2,-55.5,-32.4,-63.1C-18.6,-70.7,-9.3,-77.6,3.1,-82.1C15.5,-86.7,30.9,-88.9,42.6,-67.1Z",
      "M53.1,-67.3C67.8,-58.7,77.4,-42.7,79.8,-26.3C82.2,-9.8,77.4,7.1,68.5,20.4C59.6,33.7,46.5,43.5,33.3,53.3C20,63.1,6.7,72.9,-5.8,76.5C-18.2,80.1,-36.4,77.4,-51.5,68.1C-66.5,58.8,-78.3,42.9,-82.6,26C-86.8,9.1,-83.6,-9,-75.6,-25.3C-67.6,-41.6,-54.9,-56.1,-40.3,-65.6C-25.6,-75.1,-8.9,-79.7,7.5,-82.2C24,-84.7,47.9,-85.8,53.1,-67.3Z",
    ],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function MorphingBlob({
  color1 = "#84CEEB",
  color2 = "#8860D0",
  size = 600,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient
          id={`blobGradient-${color1.slice(-3)}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>

        <filter
          id={`blobShadow-${color1.slice(-3)}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="10"
            floodColor={color2}
            floodOpacity="0.2"
          />
        </filter>
      </defs>

      <motion.path
        variants={blobVariants}
        animate="animate"
        fill={`url(#blobGradient-${color1.slice(-3)})`}
        filter={`url(#blobShadow-${color1.slice(-3)})`}
        transform="translate(100 100)"
        className="opacity-50"
      />
    </svg>
  );
}

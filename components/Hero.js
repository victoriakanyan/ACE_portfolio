import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative text-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/duckduck.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 py-48 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
        >
          We build websites that grow your business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
        >
          ACE is a digital studio run by Stylianos & Viktorya focused on modern,
          effective, and elegant websites for small businesses.
        </motion.p>

        {/* Call-to-action button */}
        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block mt-10 px-6 py-3 bg-white text-black font-medium text-lg rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Discover Our Work
        </motion.a>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="animate-bounce w-6 h-6 text-white" />
      </motion.div>
    </section>
  );
}

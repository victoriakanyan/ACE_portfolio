import { motion } from "framer-motion";

export default function PortfolioCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group block rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-lg border border-gray-200 hover:shadow-2xl transform transition duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 md:h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </motion.a>
  );
}

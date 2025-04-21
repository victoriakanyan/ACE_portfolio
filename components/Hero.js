import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-primary to-accent text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        We build websites that grow your business.
      </motion.h2>
      <p className="mt-6 text-lg max-w-xl mx-auto">
        ACE is a digital studio run by Stylianos & Viktorya focused on modern, effective, and elegant websites for small businesses.
      </p>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative text-center py-48 text-white"
    style=
    {{
        backgroundImage: "url('/duckduck.png')",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        We build websites that grow your business.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 text-lg max-w-xl mx-auto"
      >
        ACE is a digital studio run by Stylianos & Viktorya focused on modern, effective, and elegant websites for small businesses.
      </motion.p>
    </section>
  )
}

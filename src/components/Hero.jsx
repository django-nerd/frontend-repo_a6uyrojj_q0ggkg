import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400"
        >
          Building intelligence that builds with you
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg text-white/80"
        >
          I’m Astra Nova — a data scientist and engineer blending machine learning, systems design,
          and visual computing. Explore an AI-native blog where posts are analyzed, summarized and tagged
          by models the moment they’re published.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#lab" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 backdrop-blur hover:bg-white/20 transition">
            <span>Enter the AI Lab</span>
          </a>
          <a href="#blog" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-fuchsia-500/90 px-5 py-3 hover:bg-fuchsia-500 transition text-black font-semibold">
            <span>Read the Blog</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

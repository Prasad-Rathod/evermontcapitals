import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { hero } from '../data/content'
import { EASE_OUT_EXPO } from '../utils/animations'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.3 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
}

const labelVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-bg" />
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/85 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a96e]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={labelVariants} className="flex items-center gap-4 mb-8">
            <div className="h-0.5 w-10 bg-[#c9a96e] shrink-0" />
            <span className="text-[#c9a96e] text-sm font-semibold tracking-widest uppercase font-sans">
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] text-white font-light leading-[1.05] mb-8 tracking-tight"
          >
            Building the Backbone of the Digital and{' '}
            <em className="not-italic text-[#c9a96e]">Sustainable</em>{' '}
            Economy
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-xl lg:text-2xl leading-relaxed mb-4 max-w-2xl font-sans font-light"
          >
            A global private equity platform investing at the convergence of{' '}
            <strong className="text-white font-medium">data infrastructure</strong> and{' '}
            <strong className="text-white font-medium">energy transition</strong>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg leading-relaxed mb-12 max-w-xl font-sans"
          >
            {hero.body}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#0f172a] text-sm font-bold tracking-widest uppercase font-sans hover:bg-[#e0c490] transition-colors duration-300"
            >
              {hero.ctaPrimary.label}
              <ArrowRight size={16} />
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/25 text-white text-sm font-semibold tracking-widest uppercase font-sans hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl lg:text-4xl text-[#c9a96e] font-light leading-none mb-2">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm font-sans tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 inset-x-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}

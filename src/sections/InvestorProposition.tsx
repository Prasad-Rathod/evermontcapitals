import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { investorProposition } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'

export function InvestorProposition() {
  return (
    <section id="investors" className="bg-[#0f172a] py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#c9a96e]/3 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel label={investorProposition.sectionLabel} variant="light" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-serif text-4xl lg:text-5xl text-white font-light leading-tight max-w-xl"
            >
              {investorProposition.headline}
            </motion.h2>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {investorProposition.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a96e]/40 p-8 transition-all duration-300"
            >
              <p className="font-serif text-4xl lg:text-5xl text-[#c9a96e] font-light leading-none mb-3 group-hover:text-[#e0c490] transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm font-sans tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-5"
          >
            {investorProposition.points.map((point) => (
              <motion.li key={point} variants={staggerItem} className="flex items-start gap-4">
                <div className="mt-0.5 w-6 h-6 border border-[#c9a96e]/50 bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-[#c9a96e]" strokeWidth={2.5} />
                </div>
                <p className="text-slate-300 text-base leading-relaxed font-sans">{point}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="border-l-4 border-[#c9a96e]/40 pl-8"
          >
            <p className="font-serif text-xl lg:text-2xl text-white/70 font-light leading-relaxed italic mb-8">
              "{investorProposition.closingNote}"
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9a96e] text-[#0f172a] text-sm font-bold tracking-widest uppercase font-sans hover:bg-[#e0c490] transition-colors duration-300"
            >
              Request Fund Information
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { differentiators } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'

export function Differentiators() {
  return (
    <section className="bg-[#0f172a] py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#c9a96e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label={differentiators.sectionLabel} variant="light" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif text-5xl lg:text-7xl text-white font-light leading-none tracking-tight"
          >
            {differentiators.headline}
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10"
        >
          {differentiators.items.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="group bg-[#0f172a] hover:bg-[#1e293b] p-10 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-0.5 w-8 bg-[#c9a96e]/50 group-hover:w-12 group-hover:bg-[#c9a96e] transition-all duration-400 mt-4 shrink-0" />
                <h3 className="font-serif text-2xl text-white font-medium leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 text-base leading-relaxed font-sans pl-12 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Server, Sun, Zap, Building2, type LucideProps } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { fundOverview } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'
import type { ComponentType } from 'react'

const iconMap: Record<string, ComponentType<LucideProps>> = { Server, Sun, Zap, Building2 }

export function FundOverview() {
  return (
    <section id="strategy" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label={fundOverview.sectionLabel} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
          >
            {fundOverview.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed font-sans"
          >
            {fundOverview.description}
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {fundOverview.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <motion.div
                key={pillar.title}
                variants={staggerItem}
                className="group border border-gray-200 hover:border-[#c9a96e] bg-white hover:bg-amber-50/30 p-8 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg cursor-default"
              >
                {/* Icon box */}
                <div className="w-12 h-12 bg-amber-50 border border-[#c9a96e]/30 flex items-center justify-center group-hover:bg-[#c9a96e]/10 group-hover:border-[#c9a96e]/60 transition-all duration-300">
                  <Icon size={20} className="text-[#c9a96e]" />
                </div>

                <h3 className="font-serif text-xl text-gray-900 font-medium leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed font-sans flex-1">
                  {pillar.description}
                </p>

                <div className="h-0.5 w-0 group-hover:w-10 bg-[#c9a96e] transition-all duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

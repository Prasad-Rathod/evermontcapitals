import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { portfolioStrategy } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'

export function PortfolioStrategy() {
  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label={portfolioStrategy.sectionLabel} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
          >
            {portfolioStrategy.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed font-sans"
          >
            {portfolioStrategy.description}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {portfolioStrategy.strategies.map((strategy, i) => (
            <motion.div
              key={strategy.title}
              variants={staggerItem}
              className="group relative border border-gray-200 hover:border-[#c9a96e] bg-gray-50 hover:bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#c9a96e] text-sm font-bold tracking-widest uppercase font-sans">
                    0{i + 1}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-gray-300 group-hover:text-[#c9a96e] group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 font-medium mb-4 leading-snug">
                  {strategy.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed font-sans">
                  {strategy.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

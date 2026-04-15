import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { investmentThesis } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'

export function InvestmentThesis() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* Left (2/5) — intro */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel label={investmentThesis.sectionLabel} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
            >
              {investmentThesis.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed font-sans"
            >
              {investmentThesis.description}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="mt-8 h-1 w-16 bg-[#c9a96e] origin-left"
            />
          </div>

          {/* Right (3/5) — thesis points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-3 flex flex-col"
          >
            {investmentThesis.points.map((point) => (
              <motion.div
                key={point.number}
                variants={staggerItem}
                className="group flex gap-6 py-8 border-b border-gray-200 first:border-t hover:bg-white transition-colors duration-300 -mx-4 px-4 rounded-sm"
              >
                <span className="font-serif text-5xl text-[#c9a96e]/20 font-light leading-none shrink-0 group-hover:text-[#c9a96e]/40 transition-colors duration-300 pt-1">
                  {point.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-gray-900 font-medium mb-3 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed font-sans">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { MapPin, ChevronRight } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { pipeline } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'

export function Pipeline() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label={pipeline.sectionLabel} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
          >
            {pipeline.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed font-sans"
          >
            {pipeline.description}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col"
        >
          {pipeline.opportunities.map((opp) => (
            <motion.div
              key={opp.index}
              variants={staggerItem}
              className="group flex items-start gap-8 py-8 border-b border-gray-100 first:border-t hover:bg-gray-50 -mx-6 px-6 transition-colors duration-300"
            >
              {/* Index */}
              <span className="font-serif text-5xl text-[#c9a96e]/20 font-light leading-none shrink-0 group-hover:text-[#c9a96e]/40 transition-colors duration-300 hidden lg:block w-14 text-right">
                {opp.index}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-serif text-2xl text-gray-900 font-medium leading-snug">
                    {opp.title}
                  </h3>
                  <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full">
                    <MapPin size={11} className="text-[#c9a96e]" />
                    <span className="text-xs text-amber-700 font-sans font-medium tracking-wide">{opp.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed font-sans">
                  {opp.description}
                </p>
              </div>

              <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-[#c9a96e] group-hover:translate-x-1 transition-all duration-300 shrink-0 mt-2"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

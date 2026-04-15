import { motion } from 'framer-motion'
import { Check, Leaf } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { esgImpact } from '../data/content'
import { staggerContainer, staggerItem } from '../utils/animations'

export function ESGImpact() {
  return (
    <section id="esg" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel label={esgImpact.sectionLabel} variant="eco" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
            >
              {esgImpact.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed font-sans mb-10"
            >
              {esgImpact.description}
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-4"
            >
              {esgImpact.points.map((point) => (
                <motion.li key={point} variants={staggerItem} className="flex items-start gap-4">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-green-100 border border-green-200 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-green-700" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed font-sans">{point}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right — impact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative"
          >
            <div className="bg-white border border-gray-200 shadow-xl p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-green-50 border border-green-200 flex items-center justify-center">
                  <Leaf size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="text-green-700 text-sm font-bold tracking-widest uppercase font-sans">
                    ESG Framework
                  </p>
                  <p className="text-gray-500 text-sm font-sans">Embedded at every stage</p>
                </div>
              </div>

              <div className="flex flex-col gap-0">
                {[
                  { metric: 'Net-Zero', desc: 'Alignment with global climate targets across all portfolio assets' },
                  { metric: 'Clean Power', desc: '100% renewable energy sourcing for data centre operations' },
                  { metric: 'Measurable', desc: 'Quantified ESG KPIs embedded in every investment mandate' },
                ].map((item, i) => (
                  <div key={item.metric} className={`py-7 ${i < 2 ? 'border-b border-gray-100' : ''}`}>
                    <p className="font-serif text-2xl text-gray-900 font-medium mb-2">{item.metric}</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-green-300/60" />
            <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-green-300/60" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

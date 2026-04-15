import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod/v4'
import { SectionLabel } from '../components/ui/SectionLabel'
import { contactContent } from '../data/content'
import { useState } from 'react'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  organisation: z.string().min(2, 'Organisation is required'),
  role: z.string().min(2, 'Role is required'),
  email: z.email('Please enter a valid email'),
  enquiryType: z.string().min(1, 'Please select an enquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const inputClass =
  'w-full bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 px-4 py-3 text-base font-sans focus:outline-none focus:border-[#c9a96e] focus:ring-1 focus:ring-[#c9a96e]/20 transition-all duration-300 rounded-sm'

const labelClass =
  'block text-xs tracking-widest uppercase font-sans text-gray-500 mb-2 font-semibold'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel label={contactContent.sectionLabel} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
            >
              {contactContent.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed font-sans mb-10"
            >
              {contactContent.description}
            </motion.p>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-6 bg-[#c9a96e]/60 shrink-0" />
              <a
                href={`mailto:${contactContent.email}`}
                className="text-[#c9a96e] text-base font-sans hover:text-[#a8843a] transition-colors duration-300 tracking-wide"
              >
                {contactContent.email}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-gray-500 text-sm leading-relaxed font-sans"
            >
              All enquiries are treated with strict confidentiality. We respond to qualified
              institutional investors within 2–3 business days.
            </motion.p>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <div className="border border-[rgba(0,0,0,0.08)] bg-white p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="w-12 h-12 border border-[#c9a96e]/40 bg-[#c9a96e]/5 flex items-center justify-center mx-auto mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#c9a96e]" />
                </div>
                <h3 className="font-serif text-2xl text-gray-900 font-light mb-3">
                  Enquiry Received
                </h3>
                <p className="text-gray-600 text-base font-sans leading-relaxed">
                  Thank you for reaching out. A member of our investor relations team will
                  be in contact shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>

                {/* Row: Name + Organisation */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Name</label>
                    <input {...register('name')} type="text" placeholder="Full name" className={inputClass} />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Organisation</label>
                    <input {...register('organisation')} type="text" placeholder="Firm / Institution" className={inputClass} />
                    {errors.organisation && (
                      <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.organisation.message}</p>
                    )}
                  </div>
                </div>

                {/* Row: Role + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Role / Title</label>
                    <input {...register('role')} type="text" placeholder="e.g. CIO, Partner" className={inputClass} />
                    {errors.role && (
                      <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.role.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input {...register('email')} type="email" placeholder="your@email.com" className={inputClass} />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Enquiry type */}
                <div>
                  <label className={labelClass}>Nature of Enquiry</label>
                  <select
                    {...register('enquiryType')}
                    className={`${inputClass} cursor-pointer appearance-none`}
                    defaultValue=""
                  >
                    <option value="" disabled className="text-[#b8b0a8]">Select type</option>
                    {contactContent.enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.enquiryType && (
                    <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.enquiryType.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    {...register('message')}
                    placeholder="Brief description of your interest or enquiry…"
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 font-sans">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 px-8 py-4 bg-[#0f172a] text-white text-sm font-bold tracking-widest uppercase font-sans hover:bg-[#1e2d42] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 self-start"
                >
                  {isSubmitting ? 'Sending…' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

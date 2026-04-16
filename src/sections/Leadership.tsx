import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { leadership } from '../data/content'

import shyamPhoto from '../assets/shyam.png'
import mandeepPhoto from '../assets/mandeep.jpeg'
import rajeshPhoto from '../assets/CherukuriRajesh.jpeg'
import bdsharmaPhoto from '../assets/bdsharma.jpeg'

const photoMap: Record<string, string> = {
  'Dr. B D Sharma': bdsharmaPhoto,
  'Shyam Mishra': shyamPhoto,
  'Mandeep Singh': mandeepPhoto,
  'Cherukuri Rajesh': rajeshPhoto,
}

type Member = typeof leadership.members[0]

// ─── Regular member card ────────────────────────────────────────────────────
function MemberCard({ member }: { member: Member }) {
  const photo = photoMap[member.name]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="group bg-white border border-gray-200 hover:border-[#c9a96e] hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={member.name}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
              member.name === 'Shyam Mishra' ? 'object-center' : 'object-top'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] flex items-center justify-center">
            <span className="font-serif text-7xl text-[#c9a96e]/50 font-light select-none">
              {member.initials}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#c9a96e]/0 group-hover:bg-[#c9a96e] transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="mb-4">
          <h3 className="font-serif text-2xl text-gray-900 font-medium leading-snug mb-1">
            {member.name}
          </h3>
          <p className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase font-sans mb-0.5">
            {member.role}
          </p>
          <p className="text-gray-400 text-sm font-sans">{member.roleDetail}</p>
        </div>

        <p className="text-gray-600 text-base leading-relaxed font-sans mb-5 flex-1">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {member.credentials.map((cred) => (
            <span
              key={cred}
              className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-500 text-xs font-sans group-hover:border-[#c9a96e]/20 transition-colors duration-300"
            >
              {cred}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
          <GraduationCap size={13} className="text-[#c9a96e] shrink-0" />
          <p className="text-gray-500 text-sm font-sans">{member.education}</p>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Featured card for Dr. B D Sharma ──────────────────────────────────────
function FeaturedCard() {
  const f = leadership.featured
  const photo = photoMap[f.name]

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className="group bg-white border border-gray-200 hover:border-[#c9a96e] hover:shadow-2xl transition-all duration-500 overflow-hidden mb-10"
    >
      <div className="flex flex-col lg:flex-row">

        {/* Photo */}
        <div className="relative w-full lg:w-[480px] shrink-0 aspect-[4/3] lg:aspect-[3/4] bg-white-100 overflow-hidden">
          {photo ? (
            <img
              src={photo}
              alt={f.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] flex items-center justify-center">
              <span className="font-serif text-9xl text-[#c9a96e]/40 font-light select-none">
                {f.initials}
              </span>
            </div>
          )}
          <div className="absolute inset-y-0 right-0 w-0.5 bg-[#c9a96e]/0 group-hover:bg-[#c9a96e] transition-all duration-500 hidden lg:block" />
          <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#c9a96e]/0 group-hover:bg-[#c9a96e] transition-all duration-500 lg:hidden" />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-8 lg:p-10">

          {/* Badges + name */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <div className="px-3 py-1 bg-[#c9a96e]/10 border border-[#c9a96e]/30">
                <span className="text-[#c9a96e] text-xs font-bold tracking-widest uppercase font-sans">
                  Senior Technical Advisor
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200">
                <Award size={11} className="text-amber-600" />
                <span className="text-amber-700 text-xs font-sans font-semibold">50+ Years Experience</span>
              </div>
            </div>
            <h3 className="font-serif text-3xl lg:text-4xl text-gray-900 font-medium leading-tight mb-1">
              {f.name}
            </h3>
            <p className="text-gray-400 text-base font-sans">{f.roleDetail}</p>
          </div>

          {/* Bio */}
          <p className="text-gray-600 text-base leading-relaxed font-sans mb-7 flex-1">
            {f.bio}
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-2 mb-6">
            {f.credentials.map((cred) => (
              <span
                key={cred}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-500 text-xs font-sans group-hover:border-[#c9a96e]/20 transition-colors duration-300"
              >
                {cred}
              </span>
            ))}
          </div>

          {/* Education */}
          <div className="flex items-center gap-2 pt-5 border-t border-gray-100">
            <GraduationCap size={14} className="text-[#c9a96e] shrink-0" />
            <p className="text-gray-500 text-sm font-sans">{f.education}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Section ────────────────────────────────────────────────────────────────
export function Leadership() {
  return (
    <section id="team" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel label={leadership.sectionLabel} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="font-serif text-4xl lg:text-5xl text-gray-900 font-light leading-tight mb-6"
          >
            {leadership.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed font-sans"
          >
            {leadership.description}
          </motion.p>
        </div>

        {/* Featured — Dr. B D Sharma */}
        <FeaturedCard />

        {/* Divider label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gray-200" />
          <p className="text-gray-400 text-xs tracking-widest uppercase font-sans font-semibold shrink-0">
            Partners & Leadership
          </p>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Regular team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {leadership.members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 pt-10 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="h-0.5 w-10 bg-[#c9a96e]/50 shrink-0" />
          <p className="text-gray-500 text-base font-sans leading-relaxed">
            Backed by deep relationships with LPs, sovereign funds, DFIs, and global corporates — the team operates at the intersection of capital and execution.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

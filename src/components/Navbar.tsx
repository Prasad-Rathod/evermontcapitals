import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0f172a] shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-baseline gap-2.5">
            <span className="font-serif text-2xl text-white tracking-widest font-medium leading-none">
              <span className="text-[#c9a96e]">E</span>VERMONT
            </span>
            <span className="text-slate-400 text-xs font-sans tracking-[0.4em] font-light leading-none">
              CAPITALS
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm tracking-wider uppercase font-medium font-sans transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-6 py-3 border border-[#c9a96e] text-[#c9a96e] text-sm tracking-wider uppercase font-semibold font-sans hover:bg-[#c9a96e] hover:text-[#0f172a] transition-all duration-300"
            >
              Investor Access
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0f172a] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-20 flex items-center px-6 border-b border-white/10">
              <span className="font-serif text-2xl text-white tracking-widest">
                <span className="text-[#c9a96e]">E</span>VERMONT
                <span className="text-slate-400 text-xs ml-2.5 tracking-[0.4em]">CAPITALS</span>
              </span>
            </div>
            <div className="flex flex-col px-6 pt-6 pb-12 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="py-5 text-3xl font-serif text-white/60 hover:text-[#c9a96e] border-b border-white/[0.07] transition-colors duration-300"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-8 py-4 text-center border border-[#c9a96e] text-[#c9a96e] text-sm tracking-widest uppercase font-semibold hover:bg-[#c9a96e] hover:text-[#0f172a] transition-all duration-300"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Investor Access
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

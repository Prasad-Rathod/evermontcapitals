import { footer } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-[#0c1120] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-xl text-white tracking-[0.18em] font-medium">
                <span className="text-[#c9a96e]">E</span>VERMONT
              </span>
              <span className="text-slate-500 text-xs tracking-widest font-light">
                CAPITALS
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed font-sans">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-[#c9a96e] text-sm tracking-widest uppercase font-sans font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-slate-500 text-xs leading-relaxed font-sans max-w-2xl">
            {footer.legal}
          </p>
          <p className="text-slate-500 text-xs font-sans shrink-0">
            Evermont Capitals · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

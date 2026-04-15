interface SectionLabelProps {
  label: string
  variant?: 'gold' | 'eco' | 'light'
}

export function SectionLabel({ label, variant = 'gold' }: SectionLabelProps) {
  const lineColor =
    variant === 'gold' ? 'bg-[#c9a96e]'
    : variant === 'eco' ? 'bg-[#16a34a]'
    : 'bg-white/30'

  const textColor =
    variant === 'gold' ? 'text-[#c9a96e]'
    : variant === 'eco' ? 'text-[#16a34a]'
    : 'text-white/60'

  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`h-0.5 w-10 shrink-0 ${lineColor}`} />
      <p className={`text-sm font-semibold tracking-widest uppercase font-sans ${textColor}`}>
        {label}
      </p>
    </div>
  )
}

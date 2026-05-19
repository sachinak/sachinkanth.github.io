import ScrollReveal from './ScrollReveal'

interface SectionHeaderProps {
  title: string
  description: string
  light?: boolean
}

export default function SectionHeader({ title, description, light = false }: SectionHeaderProps) {
  return (
    <ScrollReveal className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-12 md:mb-16">
      <h2 className={`text-h2 ${light ? 'text-[var(--soft-cream)]' : 'text-[var(--deep-espresso)]'}`}>
        {title}
      </h2>
      <p className={`text-body-large max-w-md ${light ? 'text-[rgba(245,240,232,0.7)]' : 'text-[var(--charcoal)]'}`}>
        {description}
      </p>
    </ScrollReveal>
  )
}

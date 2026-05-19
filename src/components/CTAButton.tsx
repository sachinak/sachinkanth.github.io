import { Link } from 'react-router-dom'

interface CTAButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  to?: string
  onClick?: () => void
  className?: string
  fullWidth?: boolean
}

export default function CTAButton({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  fullWidth = false,
}: CTAButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center text-cta rounded-full
    transition-all duration-300 cursor-pointer
    ${fullWidth ? 'w-full' : ''}
    ${variant === 'primary'
      ? 'bg-[var(--crimson)] text-[var(--soft-cream)] px-7 py-3.5 border-none hover:bg-[#e83e3e] hover:-translate-y-0.5 active:translate-y-0'
      : 'bg-transparent text-[var(--deep-espresso)] px-7 py-3.5 border border-[var(--deep-espresso)] hover:bg-[var(--deep-espresso)] hover:text-[var(--soft-cream)]'
    }
    ${className}
  `

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
    </button>
  )
}

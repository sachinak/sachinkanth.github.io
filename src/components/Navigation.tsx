import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Projects', href: '/#featured-projects' },
  { label: 'About', href: '/#about' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Life', href: '/#life' },
  { label: 'Contact', to: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${
          scrolled || mobileOpen
            ? 'bg-[rgba(245,240,232,0.92)] backdrop-blur-[10px]'
            : 'bg-transparent'
        }`}
        style={{ padding: '16px var(--page-padding)' }}
      >
        <nav className="flex items-center justify-between max-w-[var(--content-max-width)] mx-auto">
          <Link
            to="/"
            className="font-playfair font-bold text-[0.95rem] uppercase tracking-[0.1em] text-[var(--deep-espresso)]"
          >
            Sachin Kanth
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-nav text-[var(--charcoal)] hover:text-[var(--crimson)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href!)}
                  className="text-nav text-[var(--charcoal)] hover:text-[var(--crimson)] transition-colors duration-300 bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[var(--deep-espresso)] transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--deep-espresso)] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[var(--deep-espresso)] transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] bg-[var(--warm-paper)] flex flex-col items-center justify-center gap-8"
          style={{ paddingTop: '80px' }}
        >
          {navLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-h2 text-[var(--deep-espresso)] hover:text-[var(--crimson)] transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href!)}
                className="text-h2 text-[var(--deep-espresso)] hover:text-[var(--crimson)] transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            )
          )}
        </div>
      )}
    </>
  )
}



export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-warm)]" style={{ padding: '40px var(--page-padding)' }}>
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-playfair font-bold text-[0.95rem] uppercase tracking-[0.1em] text-[var(--deep-espresso)]">
              Sachin Kanth
            </span>
            <span className="text-caption text-[var(--charcoal)]">&copy; 2025</span>
          </div>
          <div className="flex items-center gap-3 text-nav text-[var(--charcoal)]">
            <a
              href="https://www.linkedin.com/in/sachinkanth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--crimson)] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span>&middot;</span>
            <span className="opacity-50">GitHub</span>
          </div>
        </div>
        <p className="text-caption text-[var(--charcoal)] text-center">
          Built with intention between Toronto and Bangalore
        </p>
      </div>
    </footer>
  )
}

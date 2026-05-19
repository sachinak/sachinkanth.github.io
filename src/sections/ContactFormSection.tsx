import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import CTAButton from '../components/CTAButton'
import StarIcon from '../components/StarIcon'

const conversationCards = [
  { topic: 'Product Strategy', quote: "Let's build something real." },
  { topic: 'Gen AI & Tech', quote: "What's coming next?" },
  { topic: 'Coffee & Ideas', quote: 'Pour-over or espresso?' },
  { topic: 'Toronto Stories', quote: 'The best conversations happen here.' },
]

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const inviteRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const starRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(headingRef.current, { opacity: 0, y: 30, duration: 0.8 }, 0)
    tl.from(inviteRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.2)

    if (cardsRef.current) {
      tl.from(cardsRef.current.children, {
        opacity: 0, y: 20, duration: 0.5, stagger: 0.08,
      }, 0.4)
    }

    if (formRef.current) {
      const fields = formRef.current.querySelectorAll('.form-field')
      tl.from(fields, {
        opacity: 0, y: 20, duration: 0.5, stagger: 0.12,
      }, 0.7)
    }

    tl.from(footerRef.current, { opacity: 0, duration: 0.5 }, 1.3)
    tl.from(starRef.current, { opacity: 0, rotation: 0, duration: 0.8 }, 1.5)
  }, { scope: containerRef })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      ref={containerRef}
      style={{
        padding: '160px var(--page-padding) var(--section-padding)',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[640px] mx-auto text-center">
        <h1
          ref={headingRef}
          className="font-playfair font-black text-[clamp(2.2rem,5vw,3.6rem)] uppercase tracking-[0.02em] text-[var(--deep-espresso)]"
        >
          Let&apos;s Talk.
        </h1>

        <p
          ref={inviteRef}
          className="text-body-large text-[var(--charcoal)] max-w-[520px] mx-auto mt-6"
        >
          Whether it&apos;s a project, a crazy idea, or just a good conversation — my door (and inbox) is open.
        </p>

        {/* Conversation Starter Cards */}
        <div
          ref={cardsRef}
          className="flex gap-3 justify-center flex-wrap mt-8 mb-10"
        >
          {conversationCards.map((card) => (
            <div
              key={card.topic}
              className="w-[140px] bg-[var(--soft-cream)] border border-[var(--border-warm)] rounded-lg p-4 flex flex-col transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(43,27,23,0.06)] hover:border-[var(--gold)]"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.06em] text-[var(--deep-espresso)] mb-2">
                {card.topic}
              </span>
              <span className="font-caveat text-[0.85rem] text-[var(--crimson)] italic leading-snug">
                {card.quote}
              </span>
            </div>
          ))}
        </div>

        {/* Form */}
        {submitted ? (
          <div className="py-10">
            <p className="text-[var(--crimson)] text-base">
              Thank you! Your message is on its way. I&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-[560px] mx-auto">
            <div className="form-field text-left mb-5">
              <label className="text-caption uppercase text-[var(--charcoal)] tracking-[0.04em] block mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[var(--soft-cream)] border border-[var(--border-warm)] rounded-md px-[18px] py-3.5 text-base text-[var(--deep-espresso)] placeholder:text-[var(--charcoal)]/40 focus:border-[var(--crimson)] focus:shadow-[0_0_0_3px_rgba(212,43,43,0.1)] focus:outline-none transition-all duration-250"
              />
            </div>
            <div className="form-field text-left mb-5">
              <label className="text-caption uppercase text-[var(--charcoal)] tracking-[0.04em] block mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[var(--soft-cream)] border border-[var(--border-warm)] rounded-md px-[18px] py-3.5 text-base text-[var(--deep-espresso)] placeholder:text-[var(--charcoal)]/40 focus:border-[var(--crimson)] focus:shadow-[0_0_0_3px_rgba(212,43,43,0.1)] focus:outline-none transition-all duration-250"
              />
            </div>
            <div className="form-field text-left mb-6">
              <label className="text-caption uppercase text-[var(--charcoal)] tracking-[0.04em] block mb-2">
                Your Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project, idea, or just say hello..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[var(--soft-cream)] border border-[var(--border-warm)] rounded-md px-[18px] py-3.5 text-base text-[var(--deep-espresso)] placeholder:text-[var(--charcoal)]/40 focus:border-[var(--crimson)] focus:shadow-[0_0_0_3px_rgba(212,43,43,0.1)] focus:outline-none transition-all duration-250 resize-y"
              />
            </div>
            <CTAButton fullWidth>Send Message</CTAButton>
          </form>
        )}

        {/* Trust Line */}
        <div ref={footerRef} className="mt-8">
          <p className="text-caption text-[var(--charcoal)] opacity-60">
            I read every message. I usually reply within 48 hours.
          </p>
          <p className="text-[0.85rem] text-[var(--crimson)] mt-2 hover:underline cursor-pointer">
            <a
              href="https://www.linkedin.com/in/sachinkanth/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prefer direct? Find me on LinkedIn &rarr;
            </a>
          </p>
        </div>

        <div ref={starRef} className="flex justify-center mt-10">
          <StarIcon size={32} rotation={20} />
        </div>
      </div>
    </section>
  )
}

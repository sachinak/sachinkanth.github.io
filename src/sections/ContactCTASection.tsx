import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import CTAButton from '../components/CTAButton'
import StarIcon from '../components/StarIcon'

export default function ContactCTASection() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const starRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        once: true,
      },
    })

    if (headingRef.current) {
      const chars = headingRef.current.querySelectorAll('.cta-char')
      tl.from(chars, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power3.out',
      })
    }

    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, '-=0.2')

    tl.from(linksRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.5,
    }, '-=0.2')

    tl.from(starRef.current, {
      opacity: 0,
      rotation: 0,
      duration: 0.8,
    }, '-=0.1')
  }, { scope: headingRef })

  const renderChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="cta-char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      style={{
        padding: 'var(--section-padding) var(--page-padding) 80px',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <h2
          ref={headingRef}
          className="font-playfair font-black text-[clamp(2.2rem,5vw,3.8rem)] uppercase tracking-[0.02em] text-[var(--deep-espresso)] leading-[1.05]"
        >
          <span className="block">{renderChars("Let's Build Something")}</span>
          <span className="block">{renderChars('Meaningful Together.')}</span>
        </h2>

        <p
          ref={subtitleRef}
          className="text-body-large text-[var(--charcoal)] max-w-[600px] mt-6"
        >
          Have a project in mind? Let&apos;s grab a coffee (virtual or pour-over) and talk about what we could build.
        </p>

        <div ref={linksRef} className="flex flex-wrap items-center gap-4 mt-10">
          <CTAButton
            variant="secondary"
            href="https://www.linkedin.com/in/sachinkanth/"
          >
            LinkedIn
          </CTAButton>
          <CTAButton variant="secondary">GitHub</CTAButton>
          <CTAButton to="/contact">Schedule a Call</CTAButton>
        </div>

        <div ref={starRef} className="flex justify-center mt-10 hidden sm:block">
          <StarIcon size={40} rotation={-15} />
        </div>
      </div>
    </section>
  )
}

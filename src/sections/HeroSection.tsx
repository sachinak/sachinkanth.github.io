import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import CTAButton from '../components/CTAButton'
import StarIcon from '../components/StarIcon'

const ringPhrases = [
  'Digital Technology Leader',
  'Solving real problems, not just shipping features',
  'Bridging Strategy, Engineering & Design',
  'Based in Toronto \u00B7 Originally from Bangalore',
  'Coffee nerd \u00B7 Fitness enthusiast \u00B7 Story collector',
]

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const ruleRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const starRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // 1. Ring fades in
    tl.from(ringRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
    }, 0)

    // 2. Name characters stagger in
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char')
      tl.from(chars, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.06,
      }, 0.3)
    }

    // 3. Horizontal rule animates width
    tl.from(ruleRef.current, {
      width: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, 0.8)

    // 4. Tagline fades in
    tl.from(taglineRef.current, {
      opacity: 0,
      y: 15,
      duration: 1,
    }, 1.0)

    // 5. CTAs fade in
    tl.from(ctaRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.8,
    }, 1.4)

    // 6. Star fades in + rotates
    tl.from(starRef.current, {
      opacity: 0,
      rotation: 0,
      duration: 0.8,
    }, 1.6)
  }, { scope: containerRef })

  const renderNameChars = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="char inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ padding: '0 var(--page-padding)', paddingTop: '100px' }}
    >
      {/* Rotating Text Ring */}
      <div
        ref={ringRef}
        className="relative mx-auto mb-12 md:mb-16"
        style={{
          width: 'clamp(260px, 30vw, 380px)',
          height: 'clamp(260px, 30vw, 380px)',
          perspective: '500px',
        }}
      >
        <div
          className="w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'rotate360 40s linear infinite',
          }}
        >
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
              />
            </defs>
            <text
              fill="var(--deep-espresso)"
              fontSize="11"
              fontFamily="var(--font-playfair)"
              fontWeight="700"
              letterSpacing="0.05em"
              textLength="750"
            >
              <textPath href="#circlePath">
                {ringPhrases.join(' \u00B7 ')} \u00B7 {ringPhrases.join(' \u00B7 ')} \u00B7
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Hero Name */}
      <h1
        ref={nameRef}
        className="text-h1 uppercase text-center text-[var(--deep-espresso)]"
      >
        <span className="block">{renderNameChars('SACHIN')}</span>
        <div
          ref={ruleRef}
          className="h-[2px] bg-[var(--crimson)] mx-auto my-3 md:my-4"
          style={{ width: '80px' }}
        />
        <span className="block">{renderNameChars('KANTH')}</span>
      </h1>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="font-caveat text-[clamp(1.2rem,2vw,1.5rem)] text-[var(--crimson)] text-center mt-6 md:mt-8"
      >
        Building things that matter — at work and in life.
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10">
        <CTAButton
          onClick={() => {
            const el = document.getElementById('featured-projects')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          See My Work
        </CTAButton>
        <CTAButton variant="secondary" to="/contact">
          Get In Touch
        </CTAButton>
      </div>

      {/* Decorative Star */}
      <div ref={starRef} className="mt-8 md:mt-10 hidden sm:block">
        <StarIcon size={40} rotation={15} />
      </div>

      <style>{`
        @keyframes rotate360 {
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </section>
  )
}

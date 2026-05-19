import SectionHeader from '../components/SectionHeader'
import StarIcon from '../components/StarIcon'
import ScrollReveal from '../components/ScrollReveal'

const expertiseCards = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c9912d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="10" />
        <line x1="24" y1="14" x2="24" y2="24" />
        <line x1="24" y1="24" x2="30" y2="28" />
        <circle cx="24" cy="24" r="2" fill="#c9912d" />
        <line x1="24" y1="2" x2="24" y2="6" />
        <line x1="24" y1="42" x2="24" y2="46" />
        <line x1="2" y1="24" x2="6" y2="24" />
        <line x1="42" y1="24" x2="46" y2="24" />
      </svg>
    ),
    title: 'Strategy & Product',
    skills: [
      'Product Strategy & Roadmapping',
      'Platform Development',
      'Digital Transformation',
      'Business Analysis',
      'Generative AI Strategy',
    ],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c9912d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,12 8,24 16,36" />
        <polyline points="32,12 40,24 32,36" />
        <line x1="20" y1="38" x2="28" y2="10" />
      </svg>
    ),
    title: 'Engineering & Design',
    skills: [
      'Full-Stack Development',
      'Python, Java, JavaScript',
      'React, Node.js, SQL/NoSQL',
      'UI/UX Design',
      'Technical Architecture',
    ],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#c9912d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4C24 4 14 14 14 22C14 27.5 18.5 32 24 32C29.5 32 34 27.5 34 22C34 14 24 4 24 4Z" />
        <line x1="24" y1="32" x2="24" y2="44" />
        <line x1="18" y1="44" x2="30" y2="44" />
        <circle cx="20" cy="20" r="1.5" fill="#c9912d" />
        <circle cx="28" cy="18" r="1.5" fill="#c9912d" />
      </svg>
    ),
    title: 'Entrepreneurship & Media',
    skills: [
      'Business Strategy & Operations',
      'F&B Entrepreneurship',
      'Podcast Production',
      'Content Strategy',
      'Community Building',
    ],
  },
]

const stats = [
  'Strategy without execution is just a plan. I make sure things ship.',
  'I live in the space where engineering meets empathy — where code becomes craft.',
]

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      style={{
        padding: 'var(--section-padding) var(--page-padding)',
        background: 'var(--deep-espresso)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <SectionHeader
          title="What I Do"
          description="Three pillars of practice built across consulting rooms, startup garages, and restaurant kitchens."
          light
        />

        {/* Expertise Cards */}
        <ScrollReveal stagger={0.1} y={50} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {expertiseCards.map((card) => (
            <div
              key={card.title}
              className="bg-[rgba(245,240,232,0.04)] border border-[rgba(245,240,232,0.08)] rounded p-8 transition-all duration-350 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(43,27,23,0.15)]"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-[var(--soft-cream)] uppercase tracking-[0.06em] font-normal text-[clamp(1rem,1.8vw,1.15rem)] mb-6">
                {card.title}
              </h3>
              <div className="flex flex-col gap-1">
                {card.skills.map((skill) => (
                  <span key={skill} className="text-[rgba(245,240,232,0.5)] text-base">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </ScrollReveal>

        {/* Divider */}
        <div className="my-12 md:my-16 border-t border-[rgba(245,240,232,0.1)]" />

        {/* Stat Callouts */}
        <ScrollReveal y={30} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <p
              key={i}
              className="font-playfair font-bold italic text-[clamp(1.2rem,2vw,1.5rem)] text-[var(--soft-cream)] leading-snug"
            >
              {stat}
            </p>
          ))}
        </ScrollReveal>

        <div className="flex justify-center mt-10 md:mt-12">
          <StarIcon size={40} rotation={-15} />
        </div>
      </div>
    </section>
  )
}

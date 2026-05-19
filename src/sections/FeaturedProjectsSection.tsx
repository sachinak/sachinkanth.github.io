import { useState, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import SectionHeader from '../components/SectionHeader'
import StarIcon from '../components/StarIcon'
import ScrollReveal from '../components/ScrollReveal'

const filters = ['All', 'Deloitte', 'Ventures', 'Publications'] as const
type Filter = (typeof filters)[number]

interface Project {
  label: string
  labelType: string
  title: string
  tags: string[]
  description: string
  link?: string
  filter: Filter
}

const projects: Project[] = [
  {
    label: 'DELoitte',
    labelType: 'DELoitte',
    title: 'Internal Platforms',
    tags: ['Platform Strategy', 'Enterprise Architecture', 'Digital Transformation'],
    description:
      'Leading the development and deployment of internal platforms at Deloitte. Driving digital transformation by building scalable, self-service digital infrastructure across the firm.',
    filter: 'Deloitte',
  },
  {
    label: 'DELoitte',
    labelType: 'DELoitte',
    title: 'Gen AI Solutions',
    tags: ['Generative AI', 'Product Strategy', 'Emerging Tech'],
    description:
      'Leading the Gen AI offerings portfolio at Deloitte — shaping product strategy, identifying high-value use cases, and bringing emerging technology solutions to market.',
    filter: 'Deloitte',
  },
  {
    label: 'VENTURE',
    labelType: 'VENTURE',
    title: 'TechX Player Management Tool',
    tags: ['Product Management', 'Sports Tech', 'Full-Stack'],
    description:
      'An all-in-one platform to manage players, analyze performance data, and streamline operations for sports academies. Designed and shipped the full product from concept to launch.',
    link: 'https://www.techxplayermanagementtool.com/',
    filter: 'Ventures',
  },
  {
    label: 'VENTURE',
    labelType: 'VENTURE',
    title: 'FutureNow Toronto Podcast',
    tags: ['Podcast', 'Media', 'Community'],
    description:
      'A podcast exploring the intersection of technology, culture, and what comes next. Conversations with builders, thinkers, and the people shaping Toronto\'s tech future.',
    link: 'https://www.futurenowtoronto.com/',
    filter: 'Ventures',
  },
  {
    label: 'VENTURE',
    labelType: 'VENTURE',
    title: 'Ariento Restaurants',
    tags: ['F&B', 'Entrepreneurship', 'Hospitality'],
    description:
      'A restaurant venture bringing thoughtfully curated dining experiences to life. From concept to operations — building something people genuinely want to gather around.',
    link: 'https://ariento-restaurants.vercel.app/',
    filter: 'Ventures',
  },
  {
    label: 'PUBLICATION',
    labelType: 'PUBLICATION',
    title: 'Latest Tech News',
    tags: ['Tech Writing', 'Curation', 'Daily Digest'],
    description:
      'A curated daily digest of the most important stories in technology — cutting through the noise to deliver what actually matters to builders and decision-makers.',
    link: 'https://latest-tech-news.vercel.app/',
    filter: 'Publications',
  },
]

export default function FeaturedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.filter === activeFilter)

  const animateFilterChange = useCallback((filter: Filter) => {
    if (!gridRef.current) return
    const cards = gridRef.current.children

    gsap.to(cards, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      stagger: 0.03,
      onComplete: () => {
        setActiveFilter(filter)
        requestAnimationFrame(() => {
          if (!gridRef.current) return
          const newCards = gridRef.current.children
          gsap.fromTo(
            newCards,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: 'power3.out' }
          )
        })
      },
    })
  }, [])

  return (
    <section
      id="featured-projects"
      style={{
        padding: 'var(--section-padding) var(--page-padding)',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <SectionHeader
          title="Featured Projects"
          description="Selected work from Deloitte, independent ventures, and the spaces between."
        />

        {/* Filter Tabs */}
        <ScrollReveal delay={0.15} className="flex gap-2 mb-10 no-scrollbar overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => animateFilterChange(filter)}
              className={`text-cta rounded-full px-5 py-2 border whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[var(--deep-espresso)] text-[var(--soft-cream)] border-[var(--deep-espresso)]'
                  : 'bg-transparent text-[var(--charcoal)] border-[var(--border-warm)] hover:bg-[var(--soft-cream)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        {/* Project Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-[var(--deep-espresso)] rounded p-8 border border-[rgba(245,240,232,0.1)] transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(43,27,23,0.2)]"
            >
              <span className="text-caption uppercase text-[rgba(245,240,232,0.5)] tracking-wider">
                {project.labelType}
              </span>
              <h3 className="font-playfair font-extrabold text-[clamp(1.4rem,2.5vw,1.8rem)] text-[var(--soft-cream)] tracking-[0.02em] mt-3 mb-4">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-caption text-[rgba(245,240,232,0.6)] border border-[rgba(245,240,232,0.2)] rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[rgba(245,240,232,0.7)] text-base leading-relaxed mb-5">
                {project.description}
              </p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nav text-[var(--gold)] hover:text-[var(--soft-cream)] transition-colors duration-300 inline-flex items-center gap-2"
                >
                  Learn More <span>&rarr;</span>
                </a>
              ) : (
                <span className="text-nav text-[var(--gold)] opacity-60 inline-flex items-center gap-2">
                  Learn More <span>&rarr;</span>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Decorative Star */}
        <div className="flex justify-center mt-12 md:mt-16">
          <StarIcon size={80} rotation={30} />
        </div>
      </div>
    </section>
  )
}

import Marquee from 'react-fast-marquee'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'

const educationCards = [
  {
    category: 'EDUCATION',
    title: 'Masters in Digital Innovation',
    description: 'Global Innovation Management — building innovation capability across borders and cultures.',
    handwritten: 'Learning never stops',
  },
  {
    category: 'SPORTS',
    title: 'Cricket Player',
    description: 'Team player on and off the field. The discipline of sport shapes how I approach every challenge.',
    handwritten: 'On and off the field',
  },
  {
    category: 'MEDIA',
    title: 'Podcast Host',
    description: 'FutureNow Toronto — conversations with the people shaping what\'s next in tech and culture.',
    handwritten: 'Everyone has a story',
  },
  {
    category: 'CITY',
    title: 'Toronto \u00B7 Bangalore',
    description: 'Two cities, two rhythms. The best ideas come from living between worlds.',
    handwritten: 'Home is where the WiFi is',
  },
]

const philosophyQuotes = [
  'I believe in building with empathy \u2014 technology should make people\'s lives better, not more complicated.',
  'Every product tells a story. My job is to make sure it\'s one worth telling.',
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-padding) var(--page-padding)',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <SectionHeader
          title="About Me"
          description="The person behind the professional summary."
        />

        {/* Portrait + Bio Layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-12 md:mb-16">
          {/* Portrait */}
          <ScrollReveal y={0} className="w-full md:w-[40%] flex flex-col items-center">
            <div className="w-full max-w-[380px] mx-auto md:mx-0">
              <div className="rounded-full overflow-hidden border-[3px] border-[var(--deep-espresso)] shadow-[0_8px_32px_rgba(43,27,23,0.15)] aspect-square">
                <img
                  src="./assets/portrait-about.jpg"
                  alt="Sachin Kanth"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-caveat text-[1.4rem] text-[var(--crimson)] text-center mt-4">
                Hello!
              </p>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.2} className="w-full md:w-[55%]">
            <p className="font-playfair font-bold italic text-[clamp(1.1rem,1.8vw,1.25rem)] text-[var(--deep-espresso)] mb-6">
              I work at the intersection of technology, strategy, and human connection.
            </p>
            <div className="text-[var(--charcoal)] leading-[1.7] space-y-4">
              <p>
                I am a Digital Technology Manager at Deloitte, where I lead product strategy for internal platforms and Gen AI solutions. My role sits at the crossroads of business strategy and technical execution — translating complex organizational needs into platforms and products that people actually want to use.
              </p>
              <p>
                Before Deloitte, I built things on my own terms — TechX, a player management tool for sports academies; Ariento Restaurants, a hospitality venture; and FutureNow Toronto, a podcast about the city's evolving tech landscape. Each venture taught me something different about what it takes to go from idea to reality.
              </p>
              <p>
                When I am not building, I am exploring — Toronto's food scene, Bangalore's tech corridors, the latest in AI research, or the perfect pour-over coffee. I believe the best products come from people who live fully outside of work.
              </p>
            </div>
            <p className="font-caveat text-[clamp(1.2rem,2vw,1.4rem)] text-[var(--crimson)] italic mt-6">
              Let&apos;s build something meaningful together.
            </p>
          </ScrollReveal>
        </div>

        {/* Marquee */}
        <Marquee speed={40} gradient={false} className="mb-10 md:mb-12">
          <span className="text-[0.85rem] uppercase tracking-[0.08em] text-[var(--charcoal)] opacity-40 mx-4">
            Human-Centered &middot; Strategy-Led &middot; Toronto &middot; Bangalore &middot; Coffee Enthusiast &middot; Cricket Player &middot; Podcast Host &middot; Restaurant Builder &middot; AI Explorer &middot;
          </span>
        </Marquee>

        {/* Philosophy Quotes */}
        <ScrollReveal stagger={0.15} y={20} className="flex flex-col items-center gap-6 md:gap-8 mb-12 md:mb-16">
          {philosophyQuotes.map((quote, i) => (
            <p
              key={i}
              className="font-playfair font-bold italic text-[clamp(1rem,1.5vw,1.15rem)] text-[var(--deep-espresso)] text-center max-w-[600px]"
            >
              {quote}
            </p>
          ))}
        </ScrollReveal>

        {/* Education & Interests Cards */}
        <ScrollReveal stagger={0.1} y={30}>
          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {educationCards.map((card) => (
              <div
                key={card.title}
                className="min-w-[220px] max-w-[220px] bg-[var(--soft-cream)] border border-[var(--border-warm)] rounded-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(43,27,23,0.08)] hover:border-[var(--gold)]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <span className="text-caption uppercase text-[var(--charcoal)] opacity-50 tracking-wider mb-3">
                  {card.category}
                </span>
                <h4 className="font-playfair font-extrabold text-[1.1rem] text-[var(--deep-espresso)] tracking-[0.02em] mb-3">
                  {card.title}
                </h4>
                <p className="text-caption text-[var(--charcoal)] opacity-70 leading-relaxed mb-3 flex-grow">
                  {card.description}
                </p>
                <p className="font-caveat text-[0.95rem] text-[var(--crimson)] italic">
                  {card.handwritten}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

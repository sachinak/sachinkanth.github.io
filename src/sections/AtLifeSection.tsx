import Marquee from 'react-fast-marquee'
import StarIcon from '../components/StarIcon'
import ScrollReveal from '../components/ScrollReveal'

const lifeCards = [
  {
    title: 'THE MIC',
    image: './assets/life-mic.jpg',
    alt: 'Podcast microphone on a warm wooden desk',
  },
  {
    title: 'CRICKET PLAYER',
    image: './assets/life-cricket.jpg',
    alt: 'Cricket bat at golden hour',
  },
  {
    title: 'ARIENTO',
    image: './assets/life-ariento.jpg',
    alt: 'Beautifully plated dish in warm candlelight',
  },
  {
    title: 'COFFEE CULTURE',
    image: './assets/life-coffee.jpg',
    alt: 'Pour-over coffee in warm morning light',
  },
  {
    title: 'TORONTO & BANGALORE',
    image: './assets/life-cities.jpg',
    alt: 'Toronto and Bangalore cityscapes',
  },
]

export default function AtLifeSection() {
  return (
    <section
      id="life"
      style={{
        padding: 'var(--section-padding) var(--page-padding)',
        background: 'var(--warm-paper)',
      }}
    >
      <div className="max-w-[var(--content-max-width)] mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-8">
          <div className="relative">
            <h2 className="text-h2 text-[var(--deep-espresso)]">Beyond The Screen</h2>
            <div className="flex gap-2 mt-2 md:absolute md:-left-16 md:top-1/2 md:-translate-y-1/2">
              <StarIcon size={16} rotation={-10} />
              <StarIcon size={16} rotation={5} />
              <StarIcon size={16} rotation={20} />
            </div>
          </div>
          <p className="text-body-large max-w-md text-[var(--charcoal)]">
            The things that fuel the work — curiosity, community, and a refusal to be just one thing.
          </p>
        </ScrollReveal>

        {/* Scrolling Marquee */}
        <Marquee speed={35} gradient={false} className="mb-8 md:mb-10">
          <span className="text-[0.8rem] uppercase tracking-[0.06em] text-[var(--charcoal)] opacity-50 mx-3">
            Podcast Host &middot; Cricket Player &middot; Restaurateur &middot; Coffee Lover &middot; Tech Explorer &middot; Story Collector &middot;
          </span>
        </Marquee>

        {/* Horizontal Card Strip */}
        <ScrollReveal stagger={0.1} y={30}>
          <div
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-[var(--page-padding)] px-[var(--page-padding)]"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {lifeCards.map((card) => (
              <div
                key={card.title}
                className="min-w-[280px] max-w-[280px] md:min-w-[280px] flex-shrink-0 bg-[var(--deep-espresso)] rounded overflow-hidden group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="p-4 pb-2">
                  <h3 className="font-playfair font-black text-[clamp(1.6rem,2.5vw,2rem)] uppercase tracking-[0.03em] text-[var(--soft-cream)] transition-transform duration-300 group-hover:-translate-y-1">
                    {card.title}
                  </h3>
                </div>
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Stat Callout */}
        <ScrollReveal y={20} className="flex justify-center mt-10 md:mt-12">
          <p className="font-playfair font-bold italic text-[clamp(1.1rem,1.8vw,1.3rem)] text-[var(--deep-espresso)] text-center max-w-[500px]">
            I believe the best technologists are the ones who live fully outside of technology.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

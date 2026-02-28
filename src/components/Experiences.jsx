import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TreePine, Waves, Moon, Coffee } from 'lucide-react'
import FadeInUp from './FadeInUp'

const cards = [
  {
    num: '01',
    icon: TreePine,
    title: 'Forest Bathing',
    desc: 'Guided or solitary walks through ancient woodland. Breathe. Listen. Belong to something older than memory.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80&auto=format&fit=crop',
  },
  {
    num: '02',
    icon: Waves,
    title: 'Wild Swimming',
    desc: 'Plunge into the glacial tarn at dawn. Cold water clarity—the mind empties with the first breath.',
    img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80&auto=format&fit=crop',
  },
  {
    num: '03',
    icon: Moon,
    title: 'Stargazing',
    desc: 'Zero light pollution. A fleece, a flask, and the Milky Way arching overhead in complete silence.',
    img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80&auto=format&fit=crop',
  },
  {
    num: '04',
    icon: Coffee,
    title: 'Morning Ritual',
    desc: 'Hand-ground coffee and sourdough on the deck. Mist lifts from the valley. Nothing else is required.',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Experiences() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])

  return (
    <section id="experiences" ref={ref} className="bg-forest py-28 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <FadeInUp>
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="divider" style={{ background: 'rgba(201,168,76,0.5)' }} />
                <span className="section-label text-cream/30">THE EXPERIENCES</span>
              </div>
              <h2 className="section-title text-cream" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                The Days Pass<br />
                <em style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Without Effort</em>
              </h2>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <div className="flex flex-col justify-end">
              <p className="body-copy text-cream/45" style={{ maxWidth: '40ch', fontSize: '0.88rem', lineHeight: 1.9 }}>
                There is no itinerary here. Only possibilities. The forest, the lake, the fire, the sky. Each morning arrives as an invitation, not an obligation.
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <FadeInUp key={card.num} delay={i * 0.1}>
              <motion.div
                className="group relative overflow-hidden bg-forest-light border border-cream/5 cursor-default"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />

                  {/* Number */}
                  <div className="absolute top-4 left-4">
                    <span className="section-label text-cream/25" style={{ fontSize: '0.58rem' }}>{card.num}_</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <card.icon size={13} className="text-gold/70" strokeWidth={1.5} />
                    <h3 className="section-label text-cream/80" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>
                      {card.title.toUpperCase()}
                    </h3>
                  </div>
                  <p className="body-copy text-cream/40" style={{ fontSize: '0.8rem', lineHeight: 1.75 }}>
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}

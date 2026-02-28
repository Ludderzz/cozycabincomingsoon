import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Trees, Sparkles, Wind, Flame } from 'lucide-react'
import FadeInUp from './FadeInUp'
import ComingSoonModal from './ComingSoonModal'

const features = [
  { icon: Trees, label: 'Ancient Woodland', desc: 'Set within a private 40-acre estate of old-growth oak and birch' },
  { icon: Flame, label: 'Cast Iron Wood Burner', desc: 'Hand-fired each evening, warming the entire cabin by nightfall' },
  { icon: Sparkles, label: 'Star Gazing Terrace', desc: 'Zero light pollution, Milky Way visible on clear nights year-round' },
  { icon: Wind, label: 'Wild Swimming Tarn', desc: 'A private glacial lake, 90 seconds walk through the forest path' },
]

export default function TheStay() {
  const ref = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yImage = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section id="the-stay" ref={ref} className="relative bg-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* LEFT: Image */}
        <div className="relative overflow-hidden bg-forest min-h-[50vh] lg:min-h-screen order-2 lg:order-1">
          <motion.div className="absolute inset-0" style={{ y: yImage, scale: 1.12 }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=85&auto=format&fit=crop"
              alt="Interior of Cozy Cabin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-forest/20" />
          </motion.div>
          <div className="absolute bottom-8 left-8 z-10">
            <span className="section-label text-cream/50" style={{ fontSize: '0.58rem' }}>01_ — THE INTERIOR</span>
          </div>
          <div className="absolute top-8 right-8 z-10 bg-forest/70 backdrop-blur-sm border border-cream/10 p-5">
            <div className="section-label text-cream/40 mb-3" style={{ fontSize: '0.55rem' }}>CAPACITY</div>
            <div className="hero-title text-cream" style={{ fontSize: '2.5rem', lineHeight: 1 }}>2</div>
            <div className="section-label text-cream/40 mt-1" style={{ fontSize: '0.55rem' }}>GUESTS</div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-0">
          <FadeInUp>
            <div className="flex items-center gap-3 mb-8">
              <span className="divider" />
              <span className="section-label text-slate" style={{ color: '#8A9BA3' }}>THE STAY</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h2 className="section-title text-forest mb-8" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
              A Cabin Built<br /><em>for Solitude</em>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="body-copy text-slate mb-3" style={{ maxWidth: '38ch' }}>
              Cozy Cabin is a handcrafted timber lodge hidden within the heart of the Lake District. Designed for couples and solo travellers who understand that the finest luxury is simply being left alone — with nature, with fire, with silence.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <p className="body-copy text-slate mb-12" style={{ maxWidth: '38ch', fontSize: '0.85rem' }}>
              Every detail has been considered: from the hand-stitched wool blankets to the curated library of naturalist texts. There is no television. There is no WiFi. There is only the forest, and the sound of rain on cedar.
            </p>
          </FadeInUp>

          <div className="space-y-0 mb-12">
            {features.map((f, i) => (
              <FadeInUp key={f.label} delay={0.3 + i * 0.08}>
                <div className="feature-item">
                  <f.icon size={14} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="section-label text-forest mb-0.5" style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}>{f.label}</div>
                    <div className="body-copy text-slate" style={{ fontSize: '0.82rem', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay={0.6}>
            <button onClick={() => setModalOpen(true)} className="btn-primary self-start">
              Book Your Stay
            </button>
          </FadeInUp>
        </div>
      </div>

      {/* Second image row */}
      <div className="grid grid-cols-3 h-72 lg:h-96">
        {[
          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80&auto=format&fit=crop',
        ].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-forest/15" />
            <div className="absolute bottom-4 left-4">
              <span className="section-label text-cream/50" style={{ fontSize: '0.52rem' }}>{String(i + 2).padStart(2, '0')}_</span>
            </div>
          </div>
        ))}
      </div>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

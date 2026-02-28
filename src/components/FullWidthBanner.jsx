import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeInUp from './FadeInUp'
import ComingSoonModal from './ComingSoonModal'

export default function FullWidthBanner() {
  const ref = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0" style={{ y, scale: 1.15 }}>
        <img
          src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1800&q=85&auto=format&fit=crop"
          alt="Forest at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/65" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <FadeInUp>
          <p className="hero-subtitle text-cream/60 mb-6" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>
            "To be immersed in nature is to be reminded of your own smallness — and to find this a great relief."
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="divider" style={{ background: 'rgba(201,168,76,0.4)' }} />
            <span className="section-label text-cream/30" style={{ fontSize: '0.58rem' }}>THE COZY CABIN PHILOSOPHY</span>
            <span className="divider" style={{ background: 'rgba(201,168,76,0.4)' }} />
          </div>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="mt-12">
            <button onClick={() => setModalOpen(true)} className="btn-primary">
              Reserve Your Escape
            </button>
          </div>
        </FadeInUp>
      </div>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import ComingSoonModal from './ComingSoonModal'

export default function Hero() {
  const ref = useRef(null)
  const [modalOpen, setModalOpen] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden bg-forest">
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: yImg }}>
        <img
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=90&auto=format&fit=crop"
          alt="Cozy Cabin Forest"
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/65 via-forest/30 to-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/40 via-transparent to-forest/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
        className="absolute top-32 left-8 md:left-16 flex items-center gap-3"
      >
        <MapPin size={10} className="text-gold" strokeWidth={1.5} />
        <span className="section-label text-cream/40" style={{ fontSize: '0.58rem' }}>
          54° 12′ N · 2° 47′ W · LAKE DISTRICT
        </span>
      </motion.div>

      <motion.div
        style={{ opacity: opacityContent, y: yContent }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-8 h-px bg-gold/60" />
          <span className="section-label text-cream/50" style={{ fontSize: '0.6rem' }}>AN EXCLUSIVE WOODLAND RETREAT</span>
          <span className="block w-8 h-px bg-gold/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-title text-cream"
          style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
        >
          Cozy Cabin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-subtitle text-cream/70 mt-5"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
        >
          Discover the Silence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-14"
        >
          <button onClick={() => setModalOpen(true)} className="btn-primary">
            Coming soon
          </button>
          <a href="#the-stay" className="btn-outline">
            Explore the Lodge
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="section-label text-cream/30" style={{ fontSize: '0.55rem' }}>SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gold/60"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

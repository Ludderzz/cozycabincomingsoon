import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Trees, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-forest flex flex-col">

      {/* Background image with deep overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&q=90&auto=format&fit=crop"
          alt="Forest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/70 to-forest/95" />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top nav bar */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-10"
      >
        {/* Logo */}
        <div>
          <div className="section-label text-cream/40" style={{ fontSize: '0.62rem', letterSpacing: '0.35em' }}>COZY CABIN</div>
          <div className="text-cream/20 mt-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.65rem', letterSpacing: '0.15em', fontStyle: 'italic' }}>
            A Private Forest Retreat
          </div>
        </div>

        {/* Coordinates */}
        <div className="hidden md:flex items-center gap-2.5">
          <MapPin size={10} className="text-gold/50" strokeWidth={1.5} />
          <span className="section-label text-cream/25" style={{ fontSize: '0.55rem' }}>54° 12′ N · 2° 47′ W</span>
        </div>
      </motion.div>

      {/* Main content — centred */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center py-20">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="block w-8 h-px bg-gold/40" />
          <span className="section-label text-cream/35" style={{ fontSize: '0.58rem' }}>OPENING SOON</span>
          <span className="block w-8 h-px bg-gold/40" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-title text-cream"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 1.0 }}
        >
          Cozy Cabin
        </motion.h1>

        {/* Italic subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hero-subtitle text-cream/55 mt-4"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
        >
          Discover the Silence
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="my-12 w-16 h-px bg-gold/30 origin-center"
        />

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="body-copy text-cream/45 max-w-sm mx-auto mb-12"
          style={{ fontSize: '0.88rem', lineHeight: 2 }}
        >
          A handcrafted timber lodge hidden in the heart of the Lake District. We're putting the final touches on something rather special. Leave your email and we'll let you know the moment we open.
        </motion.p>

     
        {/* Features strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-20"
        >
          {[
            { icon: Trees, label: 'Ancient Woodland' },
            { icon: Sparkles, label: 'Zero Light Pollution' },
            { icon: MapPin, label: 'Lake District' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon size={12} className="text-gold/40" strokeWidth={1.5} />
              <span className="section-label text-cream/25" style={{ fontSize: '0.58rem' }}>{label.toUpperCase()}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="relative z-10 flex items-center justify-between px-8 md:px-16 pb-8"
      >
        <span className="section-label text-cream/15" style={{ fontSize: '0.52rem' }}>
          © 2026 COZY CABIN LTD.
        </span>
        <a
          href="mailto:hello@cozycabin.co.uk"
          className="section-label text-cream/20 hover:text-cream/50 transition-colors duration-300"
          style={{ fontSize: '0.52rem' }}
        >
          HELLO@COZYCABIN.CO.UK
        </a>
      </motion.div>
    </div>
  )
}

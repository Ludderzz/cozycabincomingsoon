import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ComingSoonModal from './ComingSoonModal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-forest/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <a href="#hero" className="group">
            <div className="section-label text-cream/50 group-hover:text-cream/80 transition-colors duration-300" style={{ fontSize: '0.6rem', letterSpacing: '0.35em' }}>
              COZY CABIN
            </div>
            <div className="text-cream/20 group-hover:text-cream/40 transition-colors duration-300" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.65rem', letterSpacing: '0.2em', fontStyle: 'italic', marginTop: '1px' }}>
              A Private Forest Retreat
            </div>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {['The Stay', 'Availability', 'Experiences'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <button onClick={() => setModalOpen(true)} className="btn-primary" style={{ padding: '0.7rem 1.75rem', fontSize: '0.62rem' }}>
              Book Your Stay
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-5 h-px bg-cream/70 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-cream/70 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-cream/70 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-forest flex flex-col items-center justify-center gap-10"
          >
            {['The Stay', 'Availability', 'Experiences'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="section-title text-cream text-3xl hover:text-gold-light transition-colors"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
              >
                {item}
              </a>
            ))}
            <button onClick={() => { setMenuOpen(false); setModalOpen(true) }} className="btn-primary mt-4">
              Book Your Stay
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

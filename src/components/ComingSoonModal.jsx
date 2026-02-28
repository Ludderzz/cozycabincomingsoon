import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'

function EmailCapture({ onClose }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setTimeout(onClose, 2200)
  }

  if (done) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-2">
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '1.05rem', color: 'rgba(201,168,76,0.8)' }}>
          You're on the list.
        </p>
      </motion.div>
    )
  }

  

  
}

export default function ComingSoonModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(27, 43, 33, 0.75)', backdropFilter: 'blur(6px)' }}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 pointer-events-none"
          >
            <div
              className="relative pointer-events-auto w-full max-w-md"
              style={{ background: '#1B2B21', border: '1px solid rgba(253,252,251,0.08)' }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-cream/30 hover:text-cream/70 transition-colors"
              >
                <X size={16} strokeWidth={1.5} />
              </button>

              <div className="px-10 py-12 text-center">
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 border border-gold/25 flex items-center justify-center">
                    <Sparkles size={18} className="text-gold/60" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Label */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="block w-6 h-px bg-gold/35" />
                  <span className="section-label text-cream/30" style={{ fontSize: '0.57rem' }}>BOOKINGS</span>
                  <span className="block w-6 h-px bg-gold/35" />
                </div>

                {/* Heading */}
                <h3
                  className="text-cream mb-4"
                  style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '1.7rem', lineHeight: 1.15 }}
                >
                  Coming Soon
                </h3>

                {/* Body */}
                <p
                  className="text-cream/40 mb-8 mx-auto"
                  style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '0.85rem', lineHeight: 1.9, maxWidth: '30ch' }}
                >
                  We're putting the final touches on Cozy Cabin. Bookings will open very soon.
                </p>

                <EmailCapture onClose={onClose} />

                <p className="mt-5 text-cream/20" style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.62rem', letterSpacing: '0.08em' }}>
                  Explore while you wait.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

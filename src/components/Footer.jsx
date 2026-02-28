import { useState } from 'react'
import { MapPin, Instagram, Mail } from 'lucide-react'
import FadeInUp from './FadeInUp'
import ComingSoonModal from './ComingSoonModal'

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <footer className="bg-forest border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">

          <FadeInUp>
            <div>
              <h3 className="text-cream mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400, fontSize: '1.5rem' }}>
                Cozy Cabin
              </h3>
              <p className="text-cream/35 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                A Private Forest Retreat
              </p>
              <div className="flex items-center gap-2">
                <MapPin size={11} className="text-gold/50" strokeWidth={1.5} />
                <span className="section-label text-cream/25" style={{ fontSize: '0.58rem' }}>LAKE DISTRICT, CUMBRIA · ENGLAND</span>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div>
              <div className="section-label text-cream/30 mb-6" style={{ fontSize: '0.6rem' }}>NAVIGATE</div>
              <div className="space-y-3">
                {['The Stay', 'Availability', 'Experiences'].map((l) => (
                  <div key={l}>
                    <a href={`#${l.toLowerCase().replace(' ', '-')}`} className="body-copy text-cream/35 hover:text-cream/70 transition-colors duration-300" style={{ fontSize: '0.82rem' }}>
                      {l}
                    </a>
                  </div>
                ))}
                <div>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="body-copy text-cream/35 hover:text-cream/70 transition-colors duration-300 text-left"
                    style={{ fontSize: '0.82rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div>
              <div className="section-label text-cream/30 mb-6" style={{ fontSize: '0.6rem' }}>CONNECT</div>
              <div className="space-y-4">
                <a href="mailto:hello@cozycabin.co.uk" className="flex items-center gap-3 group">
                  <Mail size={12} className="text-gold/40 group-hover:text-gold/70 transition-colors" strokeWidth={1.5} />
                  <span className="body-copy text-cream/35 group-hover:text-cream/60 transition-colors" style={{ fontSize: '0.82rem' }}>hello@cozycabin.co.uk</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                  <Instagram size={12} className="text-gold/40 group-hover:text-gold/70 transition-colors" strokeWidth={1.5} />
                  <span className="body-copy text-cream/35 group-hover:text-cream/60 transition-colors" style={{ fontSize: '0.82rem' }}>@cozycabinretreat</span>
                </a>
                 <div className="section-label text-cream/30 mb-6" style={{ fontSize: '0.6rem' }}>Made with love - WebcircuitUK</div>
              </div>

              <div className="mt-8">
                <div className="section-label text-cream/25 mb-3" style={{ fontSize: '0.58rem' }}>BE FIRST TO KNOW WHEN WE OPEN</div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 text-center transition-all duration-300"
                  style={{
                    border: '1px solid rgba(201,168,76,0.25)',
                    background: 'rgba(201,168,76,0.06)',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.5)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.14)'; e.currentTarget.style.color = 'rgba(201,168,76,0.9)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.06)'; e.currentTarget.style.color = 'rgba(201,168,76,0.5)' }}
                >
                  Register Interest
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-cream/5">
          <span className="section-label text-cream/20" style={{ fontSize: '0.55rem' }}>© 2026 COZY CABIN LTD. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms & Conditions'].map(l => (
              <a key={l} href="#" className="section-label text-cream/20 hover:text-cream/40 transition-colors" style={{ fontSize: '0.55rem' }}>{l.toUpperCase()}</a>
            ))}
          </div>
        </div>
      </div>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </footer>
  )
}

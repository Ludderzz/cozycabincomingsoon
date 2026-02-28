import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import FadeInUp from './FadeInUp'
import ComingSoonModal from './ComingSoonModal'

const BOOKED_DATES = {
  2025: {
    7: [3,4,5,6,7,12,13,19,20,21,26,27,28],
    8: [1,2,9,10,11,16,17,18,23,24,25,30,31],
  },
  2026: {
    1: [1,2,3,4,10,11,17,18,24,25],
    2: [7,8,14,15,21,22,28],
    3: [1,7,8,14,15,21,22,28,29],
    4: [4,5,11,12,18,19,25,26],
    5: [2,3,9,10,16,17,23,24,30,31],
    6: [6,7,13,14,20,21,27,28],
    7: [4,5,6,7,11,12,13,18,19,25,26,27],
    8: [1,2,8,9,15,16,22,23,29,30],
  }
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

function getBookedDates(year, month) { return (BOOKED_DATES[year]?.[month + 1]) || [] }
function getDaysInMonth(year, month) { return new Date(year, month + 1, 0).getDate() }
function getFirstDayOffset(year, month) { let d = new Date(year, month, 1).getDay(); return d === 0 ? 6 : d - 1 }

export default function Calendar() {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const booked = getBookedDates(viewYear, viewMonth)
  const daysCount = getDaysInMonth(viewYear, viewMonth)
  const offset = getFirstDayOffset(viewYear, viewMonth)

  const prevMonth = () => { if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) } else setViewMonth(m => m - 1) }
  const nextMonth = () => { if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) } else setViewMonth(m => m + 1) }

  const isBooked = (day) => booked.includes(day)
  const isToday = (day) => day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear()
  const isPast = (day) => new Date(viewYear, viewMonth, day) < new Date(new Date().setHours(0,0,0,0))
  const isCheckIn = (day) => checkIn && checkIn.day === day && checkIn.month === viewMonth && checkIn.year === viewYear
  const isCheckOut = (day) => checkOut && checkOut.day === day && checkOut.month === viewMonth && checkOut.year === viewYear
  const isInRange = (day) => {
    if (!checkIn || !checkOut) return false
    const d = new Date(viewYear, viewMonth, day)
    return d > new Date(checkIn.year, checkIn.month, checkIn.day) && d < new Date(checkOut.year, checkOut.month, checkOut.day)
  }

  const handleDateClick = (day) => {
    if (isBooked(day) || isPast(day)) return
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn({ day, month: viewMonth, year: viewYear })
      setCheckOut(null)
    } else {
      const clicked = new Date(viewYear, viewMonth, day)
      const ci = new Date(checkIn.year, checkIn.month, checkIn.day)
      if (clicked <= ci) { setCheckIn({ day, month: viewMonth, year: viewYear }); setCheckOut(null) }
      else { setCheckOut({ day, month: viewMonth, year: viewYear }); setModalOpen(true) }
    }
  }

  const nights = checkIn && checkOut
    ? Math.round((new Date(checkOut.year, checkOut.month, checkOut.day) - new Date(checkIn.year, checkIn.month, checkIn.day)) / 86400000)
    : null

  const pricePerNight = 100

  return (
    <section id="availability" className="bg-cream py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #1B2B21 39px, #1B2B21 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #1B2B21 39px, #1B2B21 40px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

        <div className="mb-20 text-center">
          <FadeInUp>
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="divider" />
              <span className="section-label text-slate-light">AVAILABILITY</span>
              <span className="divider" />
            </div>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="section-title text-forest" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              When Will You Escape?
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <p className="body-copy text-slate mt-4 mx-auto" style={{ maxWidth: '44ch', fontSize: '0.85rem' }}>
              Browse availability below. Select your dates to register interest — bookings open very soon.
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

          {/* Calendar */}
          <FadeInUp className="lg:col-span-3" delay={0.2}>
            <div className="bg-white border border-slate/10 shadow-xl shadow-forest/5">
              {/* Month header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-slate/8">
                <button onClick={prevMonth} className="p-2 hover:bg-forest/5 transition-colors rounded-full group">
                  <ChevronLeft size={16} className="text-slate group-hover:text-forest transition-colors" strokeWidth={1.5} />
                </button>
                <div className="text-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${viewMonth}-${viewYear}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="section-title text-forest" style={{ fontSize: '1.3rem', fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
                        {MONTHS[viewMonth]}
                      </div>
                      <div className="section-label text-slate-light mt-0.5" style={{ fontSize: '0.6rem' }}>{viewYear}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <button onClick={nextMonth} className="p-2 hover:bg-forest/5 transition-colors rounded-full group">
                  <ChevronRight size={16} className="text-slate group-hover:text-forest transition-colors" strokeWidth={1.5} />
                </button>
              </div>

              {/* Day labels */}
              <div className="grid grid-cols-7 px-6 pt-5 pb-2">
                {DAYS.map(d => (
                  <div key={d} className="text-center section-label text-slate-light" style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}>{d}</div>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-1 px-6 pb-6">
                {Array.from({ length: offset }).map((_, i) => <div key={`e-${i}`} />)}
                {Array.from({ length: daysCount }).map((_, i) => {
                  const day = i + 1
                  const booked = isBooked(day), past = isPast(day), todayDay = isToday(day)
                  const checkin = isCheckIn(day), checkout = isCheckOut(day), inRange = isInRange(day)
                  let cls = 'calendar-day '
                  if (booked || past) cls += 'booked'
                  else if (checkin || checkout) cls += 'selected'
                  else if (inRange) cls += 'selected opacity-50'
                  else if (todayDay) cls += 'today available'
                  else cls += 'available'

                  return (
                    <motion.button
                      key={day}
                      className={cls}
                      onClick={() => handleDateClick(day)}
                      whileTap={!booked && !past ? { scale: 0.9 } : {}}
                      style={{
                        color: checkin || checkout ? '#FDFCFB' : inRange ? '#1B2B21' : undefined,
                        background: inRange ? 'rgba(27,43,33,0.08)' : undefined,
                      }}
                    >
                      {day}
                    </motion.button>
                  )
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-8 px-6 py-4 border-t border-slate/8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-forest/5 border border-slate/20 flex items-center justify-center">
                    <span className="body-copy" style={{ fontSize: '0.55rem', color: '#8A9BA3', textDecoration: 'line-through' }}>15</span>
                  </div>
                  <span className="section-label text-slate-light" style={{ fontSize: '0.58rem' }}>Booked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-forest flex items-center justify-center">
                    <span className="body-copy text-cream" style={{ fontSize: '0.55rem' }}>15</span>
                  </div>
                  <span className="section-label text-slate-light" style={{ fontSize: '0.58rem' }}>Selected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gold/50 flex items-center justify-center">
                    <span className="body-copy" style={{ fontSize: '0.55rem', color: '#1B2B21' }}>15</span>
                  </div>
                  <span className="section-label text-slate-light" style={{ fontSize: '0.58rem' }}>Today</span>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Booking Card */}
          <FadeInUp className="lg:col-span-2" delay={0.3}>
            <div className="bg-forest border border-forest-light shadow-2xl sticky top-28">
              <div className="px-8 py-7 border-b border-cream/8">
                <div className="flex items-baseline gap-2">
                  <span className="hero-title text-cream" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif' }}>£{pricePerNight}</span>
                  <span className="section-label text-cream/40" style={{ fontSize: '0.6rem' }}>/ NIGHT</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-gold" style={{ fontSize: '0.65rem' }}>★</span>)}
                  <span className="section-label text-cream/40 ml-1" style={{ fontSize: '0.58rem' }}>4.98 · 47 REVIEWS</span>
                </div>
              </div>

              <div className="px-8 py-6">
                <div className="grid grid-cols-2 border border-cream/15 mb-5">
                  <div className="p-4 border-r border-cream/15">
                    <div className="section-label text-cream/40 mb-1.5" style={{ fontSize: '0.55rem' }}>CHECK-IN</div>
                    <div className="body-copy text-cream" style={{ fontSize: '0.85rem' }}>
                      {checkIn ? `${String(checkIn.day).padStart(2,'0')} ${MONTHS[checkIn.month].slice(0,3)}` : <span className="text-cream/30">Select</span>}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="section-label text-cream/40 mb-1.5" style={{ fontSize: '0.55rem' }}>CHECK-OUT</div>
                    <div className="body-copy text-cream" style={{ fontSize: '0.85rem' }}>
                      {checkOut ? `${String(checkOut.day).padStart(2,'0')} ${MONTHS[checkOut.month].slice(0,3)}` : <span className="text-cream/30">Select</span>}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {nights && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mb-5 overflow-hidden">
                      <div className="border-t border-cream/10 pt-5 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="section-label text-cream/50" style={{ fontSize: '0.6rem' }}>£{pricePerNight} × {nights} NIGHTS</span>
                          <span className="body-copy text-cream/80" style={{ fontSize: '0.82rem' }}>£{(pricePerNight * nights).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="section-label text-cream/50" style={{ fontSize: '0.6rem' }}>CLEANING FEE</span>
                          <span className="body-copy text-cream/80" style={{ fontSize: '0.82rem' }}>£75</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-cream/10">
                          <span className="section-label text-cream/80" style={{ fontSize: '0.6rem' }}>TOTAL</span>
                          <span className="body-copy text-cream font-medium" style={{ fontSize: '0.9rem' }}>£{(pricePerNight * nights + 75).toLocaleString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Coming Soon CTA */}
                <motion.button
                  onClick={() => setModalOpen(true)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 relative overflow-hidden group"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(201,168,76,0.5)',
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                  }}
                >
                  <span className="relative z-10 group-hover:text-forest transition-colors duration-300">
                    Notify Me When Open
                  </span>
                  <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Coming soon badge */}
                <div className="flex items-center justify-center gap-2.5 mt-4">
                  <span className="block w-8 h-px bg-gold/20" />
                  <p className="body-copy text-cream/30 text-center" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}>
                    Bookings Coming Soon
                  </p>
                  <span className="block w-8 h-px bg-gold/20" />
                </div>
              </div>

              <div className="px-8 pb-8 space-y-3">
                {['Free cancellation before 30 days', 'Private exclusive access', 'No parties or events'].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={12} className="text-gold/60 flex-shrink-0" strokeWidth={1.5} />
                    <span className="section-label text-cream/35" style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'none', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      <ComingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TheStay from './components/TheStay'
import Calendar from './components/Calendar'
import Experiences from './components/Experiences'
import FullWidthBanner from './components/FullWidthBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TheStay />
      <FullWidthBanner />
      <Calendar />
      <Experiences />
      <Footer />
    </div>
  )
}

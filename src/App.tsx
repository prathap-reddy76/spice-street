import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { FloatingButtons } from './components/FloatingButtons'
import { Hero } from './sections/Hero'
import { InfoBar } from './sections/InfoBar'
import { About } from './sections/About'
import { Menu } from './sections/Menu'
import { SpecialOffer } from './sections/SpecialOffer'
import { WhyChooseUs } from './sections/WhyChooseUs'
import { Gallery } from './sections/Gallery'
import { Reviews } from './sections/Reviews'
import { Reservation } from './sections/Reservation'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <About />
        <Menu />
        <SpecialOffer />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App

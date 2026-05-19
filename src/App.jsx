import Header from './components/Header'
import Hero from './components/Hero'
import SystemSection from './components/SystemSection'
import WorkModes from './components/WorkModes'
import AppShowcase from './components/AppShowcase'
import Pricing from './components/Pricing'
import ProductsSection from './components/ProductsSection'
import AboutUs from './components/AboutUs'
import StoriesCarousel from './components/StoriesCarousel'
import FinalCTA from './components/FinalCTA'
import FloatingComyPopup from './components/FloatingComyPopup'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SystemSection />
        <WorkModes />
        <AppShowcase />
        <Pricing />
        <ProductsSection />
        <AboutUs />
        <StoriesCarousel />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingComyPopup />
    </div>
  )
}
